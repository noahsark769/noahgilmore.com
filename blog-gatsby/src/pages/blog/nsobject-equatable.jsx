import React from 'react';
import { Helmet } from "react-helmet";
import { Div, A, GlobalStyle } from '../../components/default';
import styled from "styled-components";
import Nav from '../../components/Nav';
import BlogPost from '../../components/BlogPost';


function Page() {
    return (
        <div>
            <GlobalStyle />
            <Helmet>
                <link href='http://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css' />
                <link href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic" rel="stylesheet" />
            </Helmet>
            <Nav />
            <BlogPost title="NSObject Equality is Tricky" date="November 13th, 2016">HEY</BlogPost>
        </div>
    )
}

export default Page;
