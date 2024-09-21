import React from 'react'
import { IoIosCheckmark, IoMdLink } from 'react-icons/io'

const HeaderLinkContainer = ({ children }) => (
  <div className="absolute top-0 left-0">{children}</div>
)

const Icon = ({ children }) => (
  <div className="cursor-pointer text-[#1a3f4b] transition-all duration-200 ease-in-out hover:text-[#47656e] dark:text-[#60b5d1] dark:hover:text-[#6bcfef] sm:block hidden">
    {children}
  </div>
)

const HeaderLink = ({ onClick }) => {
  const [done, setDone] = React.useState(false)

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

const H1 = ({ children, ...props }) => (
  <h1 className="relative sm:-ml-[50px] sm:pl-[50px]" {...props}>
    {children}
  </h1>
)

const H2 = ({ children, ...props }) => (
  <h2 className="relative sm:-ml-[50px] sm:pl-[50px]" {...props}>
    {children}
  </h2>
)

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isHovering: false,
    }
  }

  handleMouseEnter() {
    this.setState({ isHovering: true })
  }

  handleMouseLeave() {
    this.setState({ isHovering: false })
  }

  copyToClipboard() {
    var textField = document.createElement('textarea')
    const href = window.location.href
    var toCopy
    if (window.location.hash) {
      toCopy = window.location.href.replace(
        window.location.hash,
        `#${this.props.id}`
      )
    } else {
      toCopy = window.location.href + `#${this.props.id}`
    }
    textField.innerText = toCopy
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  render() {
    const Tag = { h1: H1, h2: H2 }[this.props.is]
    return (
      <Tag
        id={this.props.id}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        {this.props.children}
        {this.state.isHovering && (
          <HeaderLink
            id={this.props.id}
            onClick={() => this.copyToClipboard()}
          />
        )}
      </Tag>
    )
  }
}
