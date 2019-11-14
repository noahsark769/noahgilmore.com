import React from 'react';
import { Div, A, GlobalStyle } from '../components/default';
import styled from "styled-components";
import HomepageLink from '../components/HomepageLink';
import { Helmet } from "react-helmet";
import RightColumnContent from '../components/RightColumnContent';
import ReactGA from 'react-ga';

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
                <title>Noah Gilmore</title>
                <link href='https://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css' />
            </Helmet>
            <LeftColumn>
                <Title><A href="/">Noah Gilmore</A></Title>
                <Links>
                    <HomepageLink onClick={() => this.handleContentChange("about")}>About</HomepageLink>
                    <HomepageLink onClick={() => this.handleContentChange("contact")}>Contact</HomepageLink>
                    <HomepageLink to='/blog'>Blog</HomepageLink>
                </Links>
            </LeftColumn>
            <RightColumn>
                <RightColumnContent component={this.state.component} />
            </RightColumn>
        </Container>
    }

    componentDidMount() {
        ReactGA.initialize('UA-35325391-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
}

export default IndexPage;
