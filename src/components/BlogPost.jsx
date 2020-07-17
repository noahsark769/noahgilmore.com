import React from 'react';
import styled, { css } from "styled-components";
import { Helmet } from "react-helmet";

export const BlogPostContainer = styled.div`
    padding: 60px 0;
    margin: 0 auto;
    width: 90%;

    @media all and (min-width: 600px) {
        max-width: ${(props) => props.isCompressed ? "700px" : "1600px"};
        margin: auto;
    }

    @media all and (max-width: 600px) {
        width: 100%;
        padding: 20px 0;
        ${(props) => props.darkened && css`
            background-color: #f6f6f6;
            @media (prefers-color-scheme: dark) {
                background-color: inherit;
            }
        `}
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    margin-bottom: 40px;
`;

const Heading = styled.h1`
    width: 100%;
    font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 34px;
    margin-bottom: 10px;
    line-height: 1.2em;

    @media (prefers-color-scheme: dark) {
        color: #fff;
    }
`;

const DateContainer = styled.p`
    font-family: "Merriweather", times, serif;
    font-style: italic;
    font-size: 13px;
    color: #999;
`;

export const BlogPostMeta = (props) => {
    return (
        <div>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
            <TitleContainer>
                <Heading>{props.title}</Heading>
                <DateContainer>{props.date}</DateContainer>
            </TitleContainer>
        </div>
    );
};

export default class BlogPost extends React.Component {
    render() {
        return (
            <BlogPostContainer>
                <div>
                    {this.props.children}
                </div>
            </BlogPostContainer>
        );
    }
};
