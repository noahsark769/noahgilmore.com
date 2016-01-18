import subprocess
from logger import Logger


def main():
    logger = Logger()
    for filename in ["fonts", "reset", "styles"]:
        args = ["lessc", "css/%s.less" % filename, "build/css/%s.css" % filename]
        logger.info("Executing command: %s" % " ".join(args))
        subprocess.check_output(
            args
        )

if __name__ == '__main__':
    main()
