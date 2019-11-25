import React from 'react';
import styled from "styled-components";
import { blue, blueHighlight } from '../components/colors';
import Image from "../components/Image";
import ReactGA from "react-ga";

const Container = styled.div`
    margin-top: 20px;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0 5px 0;

    @media all and (max-width: 600px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`;

const HeaderContent = styled.div`
    font-family: "Bariol", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 11px;
    color: #666;
    margin: 0;

    @media (prefers-color-scheme: light) {
        color: #aaa;
    }
`;

const BodyContainer = styled.div`
    border: 2px solid ${blue};
    border-radius: 4px;
    padding: 10px 10px 0 10px;
    background-color: #3a3a3a;
    display: flex;
    flex-direction: column;

    &:hover {
        border-color: ${blueHighlight};
    }

    @media all and (max-width: 600px) {
        border-right: none;
        border-left: none;
        border-radius: 0;
    }
`;

const Spacer = styled.div`
    flex: 1;
`;

const BodyAndContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    @media all and (max-width: 600px) {
        flex-direction: column;
    }
`;

const BodyInner = styled.div`
    flex: 6;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    align-items: flex-end;
`;

const BodyContent = styled.p`
    padding-bottom: 10px;
    font-size: 16px !important;
    line-height: 18px !important;
    margin: 0 !important;
    padding-bottom: 10px !important;
    color: white !important;
    &:last-child {
        padding-bottom: 0;s
    }

    a {
        color: #60b5d1 !important;
    }
    a:hover {
        color: #6bcfef;
    }

    
`;

const LogoContainer = styled.div`
    max-width: 200px;
    padding-top: 10px;

    @media all and (max-width: 600px) {
        margin-bottom: 20px;
    }
`;

const ScreenshotContainer = styled.div`
    flex: 4;
    
    display: flex;
    flex-direction: column;
`;

const Screenshot = styled.div`
    @media all and (max-width: 600px) {
        display: none;
    }
`;

const FooterContainer = styled.div`
    p {
        font-size: 16px !important;
        line-height: 18px !important;
        font-family: "Bariol", "Helvetica Neue", "Helvetica", sans-serif !important;
        font-size: 12px;
        color: #666;
    }

    text-align: right;
`;

const CallToActionButton = styled.span`
    display: block;
    padding: 10px 20px 10px 20px;
    background-color: ${blue};
    font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
    color: white !important;
    text-align: center;
    border-radius: 4px;
    margin-bottom: 10px;
    margin-top: 10px;
    text-decoration: none;
`;

const InstabugLinkWrapper = (props) => {
    return <ReactGA.OutboundLink eventLabel="noah-test" to="/" target="_blank" style={{textDecoration: "none"}}>
        {props.children}
    </ReactGA.OutboundLink>
};

const Instabug = (props) => {
    return <Container>
        <HeaderContainer>
            <HeaderContent>SPONSORED CONTENT</HeaderContent>
        </HeaderContainer>
        <BodyContainer>
            <BodyAndContent>
                <ScreenshotContainer>
                    <LogoContainer>
                        <InstabugLinkWrapper>
                            <Image filename="instabug-logo-white.png" alt="Instabug logo" />
                        </InstabugLinkWrapper>
                    </LogoContainer>
                    <Spacer />
                    <Screenshot>
                        <Image filename="instabug-screenshot.png" alt="Screenshot of Instabug running in Trestle" />
                    </Screenshot>
                </ScreenshotContainer>
                <BodyInner>
                    <BodyContent>Instabug is my go-to solution for user-reported issues in <a href="https://apps.apple.com/us/app/trestle-the-new-sudoku/id1300230302">Trestle</a>.</BodyContent>
                    <BodyContent>Instabug helps you identify and resolve severe crashes quickly. You can retrace in-app events and know exactly which line of code caused the crash along with environment details, network logs, repro steps, and the session profiler.</BodyContent>
                    <BodyContent>Ask more questions or keep users up-to-date with in-app replies straight from your dashboard.</BodyContent>
                    <InstabugLinkWrapper>
                        <CallToActionButton>Try Instabug Free</CallToActionButton>
                    </InstabugLinkWrapper>
                </BodyInner>
            </BodyAndContent>
        </BodyContainer>
        <FooterContainer>
            <p>Visiting Instabug helps support my writing and open source projects. <a href="/">Learn more</a></p>
        </FooterContainer>
    </Container>
};

export default Instabug;