import React from 'react';
import { Div, A } from '../components/default';
import styled, { css } from "styled-components";

const RightColumnSection = styled(Div)`
    width: 100%;
    text-align: left;
    font-size: 16px;
    ${props => props.intro && css`
        line-height: 40px;
        text-transform: lowercase;
        border-bottom: 1px solid #eee;
    `}
`;

const P = styled(Div)`
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    width: 100%;
    text-align: center;
    text-decoration: underline;
`;

export default class RightColumnContent extends React.Component {
    render() {
        if (this.props.component === "about") {
            return (
                <RightColumnSection>
                    <p>Hi, I'm Noah. I'm a software developer based in the San Francisco bay area. You can read my blog posts <a href="/blog">here</a>.</p>
                </RightColumnSection>
            )
        } else if (this.props.component === "contact") {
            return (
                <RightColumnSection>
                    <P><A href="https://twitter.com/noahsark769">twitter</A></P>
                    <P><A href="https://github.com/noahsark769">github</A></P>
                </RightColumnSection>
            )
        }
    }
}