import React from "react";
import styled from "styled-components";
import { A, P, colors } from "../components/default";
import MarkdownContent from "../components/MarkdownContent";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  background-color: white;

  @media (prefers-color-scheme: dark) {
    background-color: ${colors.secondaryDarkBackground};
  }

  &:hover {
    border-color: rgba(128, 165, 177, 1);
  }

  @media all and (max-width: 600px) {
    border-right: none;
    border-left: none;
    padding-right: 0;
    padding-left: 0;
  }
`;

const Title = styled.h1`
  font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 20px;
  margin-bottom: 5px;

  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`;

const StyledDate = styled.div`
  font-family: "Merriweather", times, serif;
  font-style: italic;
  font-size: 14px;
  color: #999;
`;

const Content = styled.div`
  font-family: "Open Sans", times, serif;
  font-size: 13px;
  line-height: 16px;
  color: #333;
  padding-bottom: 15px;
  line-height: 26px;
`;

const NonContent = styled.div`
  @media all and (max-width: 600px) {
    padding-right: 5%;
    padding-left: 5%;
  }
`;

const StyledA = styled(A)`
  &,
  &:hover {
    color: #1a3f4b;
    text-decoration: underline;
    font-family: "Merriweather", times, serif;
    font-size: 16px;
    line-height: 18px;

    @media (prefers-color-scheme: dark) {
      color: #60b5d1;
    }
  }
`;

export default class BlogPostPreview extends React.Component {
  render() {
    return (
      <Link href={this.props.url} passHref>
        <Wrapper>
          <NonContent>
            <Title>{this.props.title}</Title>
            <StyledDate>{this.props.date}</StyledDate>
          </NonContent>
          <Content>
            <MarkdownContent>
              <ReactMarkdown>{this.props.mdxPreview}</ReactMarkdown>
            </MarkdownContent>
          </Content>
          <NonContent>
            <P>
              <StyledA href={this.props.url}>Read more</StyledA>
            </P>
          </NonContent>
        </Wrapper>
      </Link>
    );
  }
}
