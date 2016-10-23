"""Script for rendering blog posts.

Usage:
    python scripts/render.py
"""
from mako.template import Template
from mako.lookup import TemplateLookup
import errno
import os


def get_frontmatter(contents):
    """Get frontmatter."""
    return contents.split("---")[0]


def get_backmatter(contents):
    """Get backmatter."""
    return contents.split("---")[1].strip()


def mkdir_p(path):
    """Mkdir -p."""
    try:
        os.makedirs(path)
    except OSError as exc:  # Python >2.5
        if exc.errno == errno.EEXIST and os.path.isdir(path):
            pass
        else:
            raise


def write_file(dir_path, filename, content):
    """Write file."""
    mkdir_p(dir_path)
    with open(os.path.join(dir_path, filename), 'w') as f:
        f.write(content)


def main():
    """Main function."""
    lookup = TemplateLookup(directories=["templates"])
    template = Template(
        filename='templates/posts/pyparsing-trees.html',
        lookup=lookup
    )
    write_file(
        '2016/10',
        'pyparsing-trees.html',
        get_backmatter(template.render())
    )


if __name__ == '__main__':
    main()
