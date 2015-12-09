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

if __name__ == "__main__":
  exec_strings([
    "git checkout gh-pages",
    "git merge master",
    "git push origin gh-pages",
    "git checkout master"
  ])
