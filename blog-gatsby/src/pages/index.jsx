import React from 'react';
import { Div, A, GlobalStyle } from '../components/default';
import styled, { css } from "styled-components";
import HomepageLink from '../components/HomepageLink';
import { Helmet } from "react-helmet";

const Container = styled(Div)`
    width: 960px;
    height: 100vh;
    margin: 0 auto;
`;

const leftRightMargin = 70;

const LeftColumn = styled(Div)`
    width: ${960 * 0.4 + "px;"}
    height: 100%;
    background-image: url("https://format-com-cld-res.cloudinary.com/image/private/s--noYGWsqS--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/43206-2413999-uc-2.jpg?2500");
    background-size: cover;
    background-position: center center;
    padding-top: 50px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-right: ${leftRightMargin}px;
`;

const Title = styled(Div)`
    font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
    height: 60px;
    line-height: 40px;
    font-size: 30px;
    text-transform: uppercase;

    width: 100%;
    text-align: left;
    padding: 10px 15px 10px 0;
    background-color: white;
    text-align: right;
`;

const Links = styled(Div)`
    display: block;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
`;

const RightColumn = styled(Div)`
    width: ${960 * 0.6 - leftRightMargin + "px;"}
    font-family: "Bariol", "Helvetica Neue", "Helvetica", sans-serif;
    vertical-align: middle;
    display: inline-block;
`;

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

class RightColumnContent extends React.Component {
    render() {
        if (this.props.component === "home") {
            return (
                <RightColumnSection intro>
                    a college graduate, developer, musician. Sometimes witty.
                </RightColumnSection>
            )
        } else if (this.props.component === "about") {
            return (
                <RightColumnSection>
                    <p>Hi, I'm Noah. I'm a software engineer, recent Berkeley grad, and migrant to the SF Bay Area. I'm into writing blog posts: you can read there <a href="https://noahgilmore.svbtle.com">here</a>.</p>
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

class IndexPage extends React.Component {
    constructor() {
        super();
        this.state = {
            component: "home"
        };
    }

    handleContentChange(section) {
        this.setState({ component: section })
    }

    render() {
        return <Container>
            <GlobalStyle />
            <Helmet>
                <link href='http://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css' />
            </Helmet>
            <LeftColumn>
                <Title><A href="/">Noah Gilmore</A></Title>
                <Links>
                    <HomepageLink onClick={() => this.handleContentChange("about")}>About</HomepageLink>
                    <HomepageLink onClick={() => this.handleContentChange("contact")}>Contact</HomepageLink>
                    <HomepageLink to='https://noahgilmore.svbtle.com/'>Blog</HomepageLink>
                </Links>
            </LeftColumn>
            <RightColumn>
                <RightColumnContent component={this.state.component} />
            </RightColumn>
        </Container>
    }
}

export default IndexPage;
