import classNames from 'classnames'
import React from 'react'

export const colors = {
  darkBackground: `#23282f`,
  secondaryDarkBackground: `#2b2c2f`,
}

export const Div = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div className={className} {...props} />
)
export const Nav = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav className={className} {...props} />
)

export const UL = ({ className, ...props }: React.ComponentProps<'ul'>) => (
  <ul className={classNames('m-0 p-0', className)} {...props} />
)
export const LI = ({ className, ...props }: React.ComponentProps<'li'>) => (
  <li className={classNames('m-0 p-0', className)} {...props} />
)
export const P = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p className={classNames('m-0 p-0', className)} {...props} />
)

export const A = ({ className, ...props }: React.ComponentProps<'a'>) => (
  <a
    className={classNames(
      'outline-hidden text-inherit no-underline',
      'hover:outline-hidden hover:text-inherit hover:no-underline',
      'focus:outline-hidden focus:text-inherit focus:no-underline',
      className
    )}
    {...props}
  />
)

export const HighlightedA = ({ className, ...props }: React.ComponentProps<'a'>) => (
  <a
    className={classNames(
      'text-[#1a3f4b] dark:text-[#60b5d1]',
      'transition-colors duration-200 ease-in-out',
      'outline-hidden underline',
      'hover:text-[#1a3f4b] dark:hover:text-[#60b5d1]',
      'focus:text-[#1a3f4b] dark:focus:text-[#60b5d1]',
      className
    )}
    {...props}
  />
)
