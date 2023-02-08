import { IoMdLink, IoIosCheckmark } from "react-icons/io";
import styled from "styled-components";
import React from "react";

const HeaderLinkContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Icon = styled.span`
  cursor: pointer;

  @media all and (max-width: 600px) {
    display: none;
  }

  color: #1a3f4b;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;

  @media (prefers-color-scheme: dark) {
    color: #60b5d1;
  }

  &:hover {
    color: #47656e;

    @media (prefers-color-scheme: dark) {
      color: #6bcfef;
    }
  }
`;

class HeaderLink extends React.Component {
  constructor() {
    super();
    this.state = { done: false };
  }

  handleClick() {
    this.props.onClick();
    this.setState({ done: true });
  }

  render() {
    return (
      <HeaderLinkContainer onClick={() => this.handleClick()}>
        <Icon>
          {this.state.done ? <IoIosCheckmark size={32} /> : <IoMdLink />}
        </Icon>
      </HeaderLinkContainer>
    );
  }
}

const H1 = styled.h1`
  position: relative;
  @media all and (min-width: 600px) {
    margin-left: -50px;
    padding-left: 50px;
  }
`;

const H2 = styled.h2`
  position: relative;
  @media all and (min-width: 600px) {
    margin-left: -50px;
    padding-left: 50px;
  }
`;

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isHovering: false
    };
  }

  handleMouseEnter() {
    this.setState({ isHovering: true });
  }

  handleMouseLeave() {
    this.setState({ isHovering: false });
  }

  copyToClipboard() {
    var textField = document.createElement("textarea");
    const href = window.location.href;
    var toCopy;
    if (window.location.hash) {
      toCopy = window.location.href.replace(
        window.location.hash,
        `#${this.props.id}`
      );
    } else {
      toCopy = window.location.href + `#${this.props.id}`;
    }
    textField.innerText = toCopy;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }

  render() {
    const MyTag = { h1: H1, h2: H2 }[this.props.is];
    return (
      <MyTag
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
      </MyTag>
    );
  }
}
