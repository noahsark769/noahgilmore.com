import React from 'react';
import { Div, A } from '../components/default';
import styled from "styled-components";
import { Helmet } from "react-helmet";

const BlogPostContainer = styled.div`
    padding: 60px 0;
    margin: 0 auto;
    width: 90%;
    @media all and (min-width: 600px) {
        max-width: 700px;
        margin: auto;
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

const BlogPost = (props) => {
    return (
        <BlogPostContainer>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
            <TitleContainer>
                <Heading>{props.title}</Heading>
                <DateContainer>{props.date}</DateContainer>
            </TitleContainer>
            <div>
                {props.children}
            </div>
        </BlogPostContainer>
    )
};

export default BlogPost;