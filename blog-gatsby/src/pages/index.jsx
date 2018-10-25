import React from 'react';
import { Div } from '../components/div';

import Layout from '../components/layout';
import Image from '../components/image';
import styled from "styled-components";
import HomepageLink from '../components/HomepageLink';

const Container = styled(Div)`
    width: 960px;
    height: 100vh;
    margin: 0 auto;
    background-color: palevioletred;
`

const LeftColumn = styled(Div)`
    width: ${960 * 0.4 + "px;"}
    background-color: blue;
    height: 100%;
    background-image: url("https://berkeleytime-production-static.s3.amazonaws.com/static_media/css/img/berkeley.jpg");
    background-size: cover;
    background-position: center center;
    padding-top: 50px;
    position: relative;
`

const Title = styled(Div)`
    // font-family: @roboto;
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

const IndexPage = () => (
  <Container>
      <LeftColumn>
          <Title><HomepageLink to="/">Noah Gilmore</HomepageLink></Title>
      </LeftColumn>
  </Container>
)

export default IndexPage;
