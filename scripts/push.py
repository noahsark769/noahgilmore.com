"""Script to push changes to gh-pages."""

from simplegit import Git
from logger import Logger

from datetime import datetime
import subprocess

logger = Logger()
git = Git(logger=logger)


def get_current_branch():
    """Return the current branch name."""
    lines, _, _ = git.call("rev-parse", "--abbrev-ref HEAD")
    return lines[0].strip()


def has_uncommitted_changes():
    """Return whether the current branch has uncommitted changes.

    Note that this is not technically the best possible way to do this, but it
    works for our purposes.
    """
    lines, _, _ = git.status("-s")
    return bool(len(lines))


def exec_steps(*args):
    """Given step functions as args, execute in order until False returned."""
    for step in args:
        if not step():
            logger.fatal("Step did not return True.")
            return
    logger.success("All steps completed successfully.")


def git_step(cmd, args_string):
    """Return a step function representing a git command.

    The resulting function returns true if the given git command and
    arg string (e.g. 'push', 'origin master') returns nonzero exit code.
    """
    def step():
        _, rtncode, _ = git.call(cmd, args_string)
        return rtncode == 0
    return step


def deignore_build_step():
    """Return a step function which removes the last line from gitignore."""
    def step():
        logger.info("Removing build files from gitignore...")
        try:
            with open(".gitignore", "r") as f:
                content = f.readlines()
            with open(".gitignore", "w") as f:
                f.writelines(content[:-2])
        except Exception as e:
            logger.fatal(str(e))
            return False
        return True
    return step


def ignore_build_step():
    """Return a step function which adds 'build/*' to gitignore."""
    def step():
        logger.info("Adding build files to gitignore...")
        try:
            with open(".gitignore", "r") as f:
                content = f.readlines()
            content.append("build/*\n")
            content.append("blog/bower_components")
            with open(".gitignore", "w") as f:
                f.writelines(content)
        except Exception as e:
            logger.fatal(str(e))
            return False
        return True
    return step


def subprocess_step(*args):
    """Step for calling a subprocess."""
    def step():
        logger.info(" ".join(args))
        p = subprocess.Popen(args)
        return p.wait() == 0
    return step


def main():
    """Main."""
    logger.info("Checking current branch...")
    current_branch = get_current_branch()
    if current_branch != "master":
        logger.fatal("Must run this script from master. Currently on %s." % current_branch) # noqa
        return

    logger.info("Checking for uncommitted work...")
    if has_uncommitted_changes():
        logger.fatal(
            "`git status -s` reports uncommitted work. Fix this to push."
        )
        return

    logger.info("Pushing...")
    exec_steps(
        git_step("checkout", "gh-pages"),
        git_step("merge", "master"),
        deignore_build_step(),
        subprocess_step("python", "scripts/build.py"),
        subprocess_step("cd", "blog"),
        subprocess_step("bower", "install"),
        subprocess_step("cd", ".."),
        git_step("add", "build/*"),
        git_step("add", "blog/bower_components"),
        ignore_build_step(),
        git_step("commit", "-m '[%s] Build for release'" % datetime.today().strftime("%c")), # noqa
        git_step("push", "origin gh-pages"),
        git_step("checkout", "master"),
    )

if __name__ == "__main__":
    main()
