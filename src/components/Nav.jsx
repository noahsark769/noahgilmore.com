import classNames from 'classnames'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { ImBlog } from 'react-icons/im'
import { IoIosAppstore, IoIosHome, IoLogoGithub } from 'react-icons/io'
import styled from 'styled-components'
import { blue, blueHighlight } from '../components/colors'
import { A, LI, UL } from '../components/default'

const StyledNav = ({ children }) => (
  <nav className="flex flex-row flex-wrap p-5 sm:p-[20px_60px] dark:border-[#777]">
    {children}
  </nav>
)

const Title = ({ children }) => (
  <div className="flex-[2] font-['Roboto','Helvetica_Neue','Helvetica',sans-serif] text-[28px] dark:text-white">
    {children}
  </div>
)

const NavLinks = ({ children }) => (
  <UL className="flex-[10] flex flex-row flex-wrap justify-end h-full self-center gap-5">
    {children}
  </UL>
)

const NavLink = ({ children }) => (
  <LI className="flex flex-col items-center text-center font-['Roboto','Helvetica_Neue','Helvetica',sans-serif] text-base">
    {children}
  </LI>
)

const StyledA = ({ blue, children, className, ...props }) => (
  <A
    className={classNames(
      'h-auto flex flex-col items-center transition-colors duration-200 ease-in-out',
      {
        'text-standardBlue hover:text-standardBlueHighlight': blue,
      },
      className
    )}
    {...props}
  >
    {children}
  </A>
)

const Nav = (props) => {
  // props.blog means it's in a blog context
  return (
    <StyledNav>
      <Title>
        <StyledA href={props.blog ? '/blog' : '/'}>NOAH GILMORE</StyledA>
      </Title>
      <NavLinks>
        {props.blog && (
          <NavLink title="Site Home">
            <StyledA aria-label="Home" href="/">
              <IoIosHome color={blue} size="24" />
            </StyledA>
          </NavLink>
        )}
        {!props.blog && (
          <NavLink title="Blog">
            <StyledA aria-label="Blog" href="/blog">
              <ImBlog color={blue} size="24" />
            </StyledA>
          </NavLink>
        )}
        <NavLink title="Twitter">
          <StyledA aria-label="Twitter" href="https://twitter.com/noahsark769">
            <FaTwitter color={blue} size="24" />
          </StyledA>
        </NavLink>
        <NavLink title="GitHub" className="hidden md:flex">
          <StyledA aria-label="GitHub" href="https://github.com/noahsark769">
            <IoLogoGithub color={blue} size="24" />
          </StyledA>
        </NavLink>
        <NavLink title="App Store">
          <StyledA
            aria-label="App Store"
            href="https://apps.apple.com/us/app/cifilter-io/id1457458557"
          >
            <IoIosAppstore color={blue} size="24" />
          </StyledA>
        </NavLink>
      </NavLinks>
    </StyledNav>
  )
}

export default Nav
