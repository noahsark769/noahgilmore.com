"use client"

import React, { useState } from 'react'
import { IoIosCheckmark, IoMdLink } from 'react-icons/io'

const HeaderLinkContainer = ({ children, ...props }: React.ComponentProps<'div'>) => (
  <div className="absolute top-0 left-0" {...props}>{children}</div>
)

const Icon = ({ children }: React.PropsWithChildren) => (
  <div className="cursor-pointer text-[#1a3f4b] transition-all duration-200 ease-in-out hover:text-[#47656e] dark:text-[#60b5d1] dark:hover:text-[#6bcfef] sm:block hidden">
    {children}
  </div>
)

const HeaderLink = ({ onClick }: { onClick: () => void }) => {
  const [done, setDone] = useState(false)

  const handleClick = () => {
    onClick()
    setDone(true)
  }

  return (
    <HeaderLinkContainer onClick={handleClick}>
      <Icon>{done ? <IoIosCheckmark size={32} /> : <IoMdLink />}</Icon>
    </HeaderLinkContainer>
  )
}

const H1 = ({ children, ...props }: React.ComponentProps<'h1'>) => (
  <h1 className="relative sm:-ml-[50px] sm:pl-[50px]" {...props}>
    {children}
  </h1>
)

const H2 = ({ children, ...props }: React.ComponentProps<'h2'>) => (
  <h2 className="relative sm:-ml-[50px] sm:pl-[50px]" {...props}>
    {children}
  </h2>
)

const tagMap = { h1: H1, h2: H2 } as const

export default function Header({ is, id, children }: {
  is: keyof typeof tagMap
  id: string
  children: React.ReactNode
}) {
  const [isHovering, setIsHovering] = useState(false)

  const copyToClipboard = () => {
    var textField = document.createElement('textarea')
    var toCopy
    if (window.location.hash) {
      toCopy = window.location.href.replace(
        window.location.hash,
        `#${id}`
      )
    } else {
      toCopy = window.location.href + `#${id}`
    }
    textField.innerText = toCopy
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  const Tag = tagMap[is]
  return (
    <Tag
      id={id}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      {isHovering && (
        <HeaderLink
          onClick={() => copyToClipboard()}
        />
      )}
    </Tag>
  )
}
