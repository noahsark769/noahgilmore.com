import classNames from 'classnames'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { ImBlog } from 'react-icons/im'
import { IoIosHome, IoLogoGithub } from 'react-icons/io'
import { A, LI, UL } from '../components/default'

const StyledNav = ({ children }: React.PropsWithChildren) => (
  <nav className="flex flex-row flex-wrap p-5 sm:p-[20px_60px] dark:border-[#777]">
    {children}
  </nav>
)

const Title = ({ children }: React.PropsWithChildren) => (
  <div className="flex-2 font-['Roboto','Helvetica_Neue','Helvetica',sans-serif] text-[28px] dark:text-white">
    {children}
  </div>
)

const NavLinks = ({ children }: React.PropsWithChildren) => (
  <UL className="flex-10 flex flex-row flex-wrap justify-end h-full self-center gap-5">
    {children}
  </UL>
)

const NavLink = ({ children }: React.PropsWithChildren) => (
  <LI className="flex flex-col items-center text-center font-['Roboto','Helvetica_Neue','Helvetica',sans-serif] text-base">
    {children}
  </LI>
)

const StyledA = ({ children, className, ...props }: React.ComponentProps<typeof A>) => (
  <A
    className={classNames(
      'h-auto flex flex-col items-center transition-colors duration-200 ease-in-out',
      'text-standardBlue hover:text-standardBlueHighlight',
      className
    )}
    {...props}
  >
    {children}
  </A>
)

const Nav = ({ blog }: { blog?: boolean }) => {
  return (
    <StyledNav>
      <Title>
        <StyledA href={blog ? '/blog' : '/'}>NOAH GILMORE</StyledA>
      </Title>
      <NavLinks>
        {blog && (
          <NavLink>
            <StyledA aria-label="Home" href="/">
              <IoIosHome size="24" />
            </StyledA>
          </NavLink>
        )}
        {!blog && (
          <NavLink>
            <StyledA aria-label="Blog" href="/blog">
              <ImBlog size="24" />
            </StyledA>
          </NavLink>
        )}
        <NavLink>
          <StyledA aria-label="Twitter" href="https://twitter.com/noahsark769">
            <FaTwitter size="24" />
          </StyledA>
        </NavLink>
        <NavLink>
          <StyledA aria-label="GitHub" href="https://github.com/noahsark769" className="hidden md:flex">
            <IoLogoGithub size="24" />
          </StyledA>
        </NavLink>
      </NavLinks>
    </StyledNav>
  )
}

export default Nav
