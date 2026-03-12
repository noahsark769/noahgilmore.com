import classNames from 'classnames'

export const colors = {
  darkBackground: `#23282f`,
  secondaryDarkBackground: `#2b2c2f`,
}

export const Div = ({ className, ...props }: any) => (
  <div className={className} {...props} />
)
export const Nav = ({ className, ...props }: any) => (
  <nav className={className} {...props} />
)

export const UL = ({ className, ...props }: any) => (
  <ul className={classNames('m-0 p-0', className)} {...props} />
)
export const LI = ({ className, ...props }: any) => (
  <li className={classNames('m-0 p-0', className)} {...props} />
)
export const P = ({ className, ...props }: any) => (
  <p className={classNames('m-0 p-0', className)} {...props} />
)

export const A = ({ className, ...props }: any) => (
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

export const HighlightedA = ({ className, ...props }: any) => (
  <div
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
