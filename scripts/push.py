"""Script to push changes to gh-pages."""

from simplegit import Git
from logger import Logger
import os

from datetime import datetime
import subprocess

logger = Logger()
git = Git(logger=logger)


class IgnoredBuildPathsContext(object):
    """Struct of ignored build paths that should be unignored on build."""

    def __init__(self, paths):
        """Init."""
        self.paths = paths

    def deignore_step(self):
        """Return a step function which removes paths from gitignore."""
        def step():
            logger.info("Removing build files from gitignore...")
            try:
                with open(".gitignore", "r") as f:
                    content = f.readlines()
                with open(".gitignore", "w") as f:
                    f.writelines(
                        filter(
                            lambda line: line.strip() in self.paths,
                            content
                        )
                    )
            except Exception as e:
                logger.fatal(str(e))
                return False
            return True
        return step

    def reignore_step(self):
        """Return a step which re-ignores the ignored paths."""
        def step():
            logger.info("Adding build files to gitignore...")
            try:
                with open(".gitignore", "r") as f:
                    content = f.readlines()
                content.append("\n".join(self.paths))
                with open(".gitignore", "w") as f:
                    f.writelines(content)
            except Exception as e:
                logger.fatal(str(e))
                return False
            return True
        return step

    def add_step(self):
        """Return a step to add ignored files."""
        def step():
            for path in self.paths:
                _, rtncode, _ = git.add(path)
                if rtncode != 0:
                    return False
            return True
        return step


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


def subprocess_step(*args, **kwargs):
    """Step for calling a subprocess."""
    def step():
        logger.info(" ".join(args))
        p = subprocess.Popen(args, **kwargs)
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

    context = IgnoredBuildPathsContext(
        paths=["build/*", "blog/bower_components"]
    )

    exec_steps(
        git_step("checkout", "gh-pages"),
        git_step("merge", "master"),
        context.deignore_step(),
        subprocess_step("python", "scripts/build.py"),
        subprocess_step("bower", "install", cwd=os.path.join(os.path.dirname(os.path.realpath(__file__)), "..", "blog")), # noqa
        context.add_step(),
        context.reignore_step(),
        git_step("commit", "-m '[%s] Build for release'" % datetime.today().strftime("%c")), # noqa
        git_step("push", "origin gh-pages"),
        git_step("checkout", "master"),
    )

if __name__ == "__main__":
    main()
