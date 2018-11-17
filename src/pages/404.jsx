import React from 'react'
import styled from 'styled-components';

const OuterContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #3070a5;
    height: 100vh;  
`;


const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 600px;
    margin: 0 auto;
    height: 100vh;
    color: white;
    font-family: Helvetica, sans-serif;
    padding-top: 300px;
`;

const Title = styled.h1`
    font-size: 100px;
    padding-bottom: 40px;
`;

const A = styled.a`
    &, &:hover, &:visited {
        color: white;
    }
    text-decoration: underline;
`;

const NotFoundPage = () => (
    <OuterContainer>
        <Container>
            <Title>:(</Title>
            <p>You found a page that doesn't exist (404). <A href="/blog">Go back home</A></p>
        </Container>
    </OuterContainer>
)

export default NotFoundPage
