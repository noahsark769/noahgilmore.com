class Colors:
    BLUE = '\033[94m'
    GREEN = '\033[92m'
    ORANGE = '\033[93m'
    RED = '\033[91m'
    END = '\033[0m'


class Logger(object):
    def output(self, message):
        print message

    def fatal(self, message):
        print self._red("[Fatal error] %s" % message)

    def warn(self, message):
        print self._orange("[Warning] %s" % message)

    def info(self, message):
        print self._blue("[Info] %s" % message)

    def success(self, message):
        print self._green("[Success] %s" % message)

    def _red(self, message):
        return self._colored_text(message, Colors.RED)

    def _orange(self, message):
        return self._colored_text(message, Colors.ORANGE)

    def _blue(self, message):
        return self._colored_text(message, Colors.BLUE)

    def _green(self, message):
        return self._colored_text(message, Colors.GREEN)

    def _colored_text(self, text, color):
        return color + text + Colors.END
