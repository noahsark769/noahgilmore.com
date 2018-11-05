import React from 'react';
import styled from "styled-components";
import { A, P } from '../components/default';
import MarkdownContent from '../components/MarkdownContent';
import ReactMarkdown from 'react-markdown';

const Wrapper = styled.div`
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

    &:hover {
        border-color: rgba(128, 165, 177, 1);
    }

    @media all and (max-width: 600px) {
        border-right: none;
        border-left: none;
        padding-right: 0;
        padding-left: 0;
        background-color: white;
    }
`;

const Title = styled.h1`
    font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 20px;
    margin-bottom: 5px;
`;

const StyledDate = styled.div`
    font-family: "Gentium Book Basic", times, serif;
    font-style: italic;
    font-size: 16px;
    color: #999;
    margin-bottom: 20px;
`;

const Content = styled.div`
    font-family: "Open Sans", times, serif;
    font-size: 15px;
    line-height: 16px;
    color: #333;
    padding-bottom: 15px;
    margin-top: 15px;
    line-height: 26px;
`;

const NonContent = styled.div`
    @media all and (max-width: 600px) {
        padding-right: 5%;
        padding-left: 5%;
    }
`;

const StyledA = styled(A)`
    &, &:hover {
        color: #1A3F4B;
        text-decoration: underline;
        font-family: "Gentium Book Basic", times, serif;
        font-size: 16px;
        line-height: 18px;
    }
`;

export default class BlogPostPreview extends React.Component {
    handleClick() {
        window.location = this.props.url;
    }

    render() {
        return (
            <Wrapper onClick={() => this.handleClick()}>
                <NonContent>
                    <Title>{this.props.title}</Title>
                    <StyledDate>{this.props.date}</StyledDate>
                </NonContent>
                <Content>
                    <MarkdownContent>
                        <ReactMarkdown source={this.props.mdxPreview} />
                    </MarkdownContent>
                </Content>
                <NonContent>
                    <P><StyledA href={this.props.url}>Read more</StyledA></P>
                </NonContent>
            </Wrapper>
        );
    }
};
