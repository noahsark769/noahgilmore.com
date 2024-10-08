import classNames from 'classnames'

export const colors = {
  darkBackground: `#23282f`,
  secondaryDarkBackground: `#2b2c2f`,
}

export const Div = ({ className, ...props }) => (
  <div className={className} {...props} />
)
export const Nav = ({ className, ...props }) => (
  <nav className={className} {...props} />
)

export const UL = ({ className, ...props }) => (
  <ul className={classNames('m-0 p-0', className)} {...props} />
)
export const LI = ({ className, ...props }) => (
  <li className={classNames('m-0 p-0', className)} {...props} />
)
export const P = ({ className, ...props }) => (
  <p className={classNames('m-0 p-0', className)} {...props} />
)

export const A = ({ className, ...props }) => (
  <a
    className={classNames(
      'outline-none text-inherit no-underline',
      'hover:outline-none hover:text-inherit hover:no-underline',
      'focus:outline-none focus:text-inherit focus:no-underline',
      className
    )}
    {...props}
  />
)

export const HighlightedA = ({ className, ...props }) => (
  <div
    className={classNames(
      'text-[#1a3f4b] dark:text-[#60b5d1]',
      'transition-colors duration-200 ease-in-out',
      'outline-none underline',
      'hover:text-[#1a3f4b] dark:hover:text-[#60b5d1]',
      'focus:text-[#1a3f4b] dark:focus:text-[#60b5d1]',
      className
    )}
    {...props}
  />
)
