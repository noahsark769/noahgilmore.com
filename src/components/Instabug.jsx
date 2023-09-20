import React from "react";
import styled from "styled-components";
import { blue, blueHighlight } from "../components/colors";
import Image from "../components/Image";
import ReactGA from "react-ga";

const Container = styled.div`
  a,
  a:visited {
    color: #60b5d1 !important;
  }
  a:hover {
    color: #6bcfef;
  }
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
  margin-right: 10px;

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
  justify-content: center;

  font-family: "Gentium Book Basic", times, serif;
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
  margin-right: 20px;
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
    margin-top: 6px;
  }

  text-align: right;
  margin-right: 10px;
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

const InstabugLinkWrapper = props => {
  return (
    <ReactGA.OutboundLink
      eventLabel="instabug"
      to="https://instabug.com/crashlytics-alternative?utm_source=noahgilmore&utm_medium=nativeads&utm_campaign=noahgilmore-nativeads-november"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      {props.children}
    </ReactGA.OutboundLink>
  );
};

const Instabug = props => {
  return (
    <div className="sponsorship-opt-out-point">
      <Container>
        <HeaderContainer>
          <HeaderContent>SPONSORED CONTENT</HeaderContent>
          {props.onHide && (
            <HeaderContent>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  props.onHide();
                }}
              >
                HIDE
              </a>
            </HeaderContent>
          )}
        </HeaderContainer>
        <BodyContainer>
          <BodyAndContent>
            <ScreenshotContainer>
              <LogoContainer>
                <InstabugLinkWrapper>
                  <Image
                    filename="instabug-logo-white.png"
                    alt="Instabug logo"
                  />
                </InstabugLinkWrapper>
              </LogoContainer>
              <Spacer />
              <Screenshot>
                <Image
                  filename="instabug-screenshot.png"
                  alt="Screenshot of Instabug running in Trestle"
                />
              </Screenshot>
            </ScreenshotContainer>
            <BodyInner>
              <BodyContent>
                Instabug implements in-app bug reports and message threads with
                users in a simple, easy to configure interface.
              </BodyContent>
              <BodyContent>
                Drop Instabug's library into your app to support user feedback
                out of the box!
              </BodyContent>
              <InstabugLinkWrapper>
                <CallToActionButton>Try Instabug Free</CallToActionButton>
              </InstabugLinkWrapper>
            </BodyInner>
          </BodyAndContent>
        </BodyContainer>
        <FooterContainer>
          <p>
            Visiting Instabug helps support my writing and open source projects.{" "}
            <a href="/blog/advertising">Learn more</a>
          </p>
        </FooterContainer>
      </Container>
    </div>
  );
};

export default Instabug;
