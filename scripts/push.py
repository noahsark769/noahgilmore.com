import subprocess

class Colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def print_info(string):
  return print_color(Colors.OKBLUE, string)

def print_success(string):
  return print_color(Colors.OKGREEN, string)

def print_fail(string):
  return print_color(Colors.FAIL, string)

def print_color(color, string):
  print color + string + Colors.ENDC

def get_current_branch():
  return subprocess.check_output("git rev-parse --abbrev-ref HEAD".split()).strip()

def has_uncommitted_changes():
  """Return whether the current branch has uncommitted changes. Note that this is not
  technically the best possible way to do this, but it works for our purposes.
  """
  return bool(len(subprocess.check_output("git status -s".split()).strip()))

def check_return_code(command_list):
  return subprocess.Popen(command_list).wait()

def exec_string(command_string):
  return check_return_code(command_string.strip().split())

def exec_strings(commands):
  """Execute a series of commands and stop if one of them has non-zero return code."""
  for command in commands:
    print_info("[Exec] %s" % command)
    if exec_string(command) != 0:
      print_fail("[Error] Command `%s` did not return exit status 0." % command)
      return
  print_success("[Info] All commands completed successfully.")

def main():
  print_info("[Info] Checking current branch...")
  current_branch = get_current_branch()
  if current_branch != "master":
    print_fail("[Error] Must run this script from master. Currently on %s." % current_branch)
    return

  print_info("[Info] Checking for uncommitted work...")
  if has_uncommitted_changes():
    print_fail("[Error] `git status -s` reports uncommitted work. Fix this to push.")
    return

  print_info("[Info] Pushing...")
  exec_strings([
    "git checkout gh-pages",
    "git merge master",
    "git push origin gh-pages",
    "git checkout master"
  ])

if __name__ == "__main__":
  main()
