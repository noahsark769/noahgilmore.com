import subprocess

def check_return_code(command_list):
  return subprocess.Popen(command_list).wait()

def exec_string(command_string):
  return check_return_code(command_string.strip().split())

def exec_strings(commands):
  """Execute a series of commands and stop if one of them has non-zero return code."""
  for command in commands:
    print "----> [Exec] %s" % command
    if exec_string(command) != 0:
      print "[Error] Command `%s` did not return exit status 0." % command
      return
  print "[Info] All commands completed successfully."

if __name__ == "__main__":
  exec_strings([
    "git checkout gh-pages",
    "git merge master",
    "git push origin gh-pages",
    "git checkout master"
  ])
