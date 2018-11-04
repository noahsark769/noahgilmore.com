import React from 'react';
import styled from "styled-components";
import { Helmet } from "react-helmet";

export const BlogPostContainer = styled.div`
    padding: 60px 0;
    margin: 0 auto;
    width: 90%;
    @media all and (min-width: 600px) {
        max-width: 700px;
        margin: auto;
    }

    @media all and (max-width: 600px) {
        width: 100%;
        padding: 20px 0;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    margin-bottom: 40px;
`;

const Heading = styled.h1`
    width: 100%;
    font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 28px;
    margin-bottom: 10px;
`;

const DateContainer = styled.p`
    font-family: "Gentium Book Basic", times, serif;
    font-style: italic;
    font-size: 16px;
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
