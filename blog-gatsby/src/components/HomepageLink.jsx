import React from 'react';
import { Div, A } from '../components/default';
import styled from "styled-components";

const StyledLink = styled(A)`
    display: block;
    width: 100%;
    padding: 15px 15px 15px 0;
    background-color: white;
    pointer: cursor;

    font-family: "Bariol", "Helvetica Neue", "Helvetica", sans-serif;
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;

    margin-bottom: 10px;
    text-align: right;

    cursor: pointer;
`

const HomepageLink = (props) => (
    <StyledLink href={props.to}>{props.children}</StyledLink>
);

export default HomepageLink;