import React from 'react';
import { Div, A, GlobalStyle } from '../components/default';
import styled from "styled-components";
import HomepageLink from '../components/HomepageLink';

const Container = styled(Div)`
    width: 960px;
    height: 100vh;
    margin: 0 auto;
`

const LeftColumn = styled(Div)`
    width: ${960 * 0.4 + "px;"}
    height: 100%;
    background-image: url("https://berkeleytime-production-static.s3.amazonaws.com/static_media/css/img/berkeley.jpg");
    background-size: cover;
    background-position: center center;
    padding-top: 50px;
    position: relative;
`

const Title = styled(Div)`
    font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
    height: 60px;
    line-height: 40px;
    font-size: 30px;
    text-transform: uppercase;

    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    padding: 10px 15px 10px 0;
    background-color: white;
    text-align: right;
`

const Links = styled(Div)`
    display: block;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
`

const IndexPage = () => (
    <Container>
        <GlobalStyle />
        <LeftColumn>
            <Title><A href="/">Noah Gilmore</A></Title>
            <Links>
                <HomepageLink to='/blog'>Blog</HomepageLink>
            </Links>
        </LeftColumn>
    </Container>
)

export default IndexPage;
