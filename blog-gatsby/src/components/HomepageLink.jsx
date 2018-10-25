import React from 'react';
import { Div } from '../components/div';
import styled from "styled-components";

const StyledLink = styled(Div)`
    display: block;
    width: 100%;
    padding: 15px 15px 15px 0;
    background-color: white;
    pointer: cursor;

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