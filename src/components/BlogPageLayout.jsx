import React from "react";
import { Helmet } from "react-helmet";
import { BlogGlobalStyle, colors } from "./default";
import Nav from "./Nav";
import EndButtons from "./EndButtons";
import { BlogPostContainer, BlogPostMeta } from "./BlogPost";
import MarkdownContent from "./MarkdownContent";
import Disqus from "./Disqus";
import ReactGA from "react-ga";
import styled from "styled-components";
import { OGImage } from "./OGImage";
import Image from "next/image";
import { HighlightedA } from "../components/default";
import corgi from "../../public/corgi.jpg";

const Container = styled.div`
  @media (prefers-color-scheme: dark) {
    background-color: ${colors.darkBackground};
  }
`;

const NonContent = styled.div`
  @media all and (max-width: 600px) {
    padding-right: 5%;
    padding-left: 5%;
  }
`;

const PostContainerOuter = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${props => (props.hasPadding ? "20px" : "0")};

  @media all and (max-width: 1200px) {
    padding: 0;
  }
`;

const PostContainerInner = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;
`;

export default class BlogPageLayout extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isShowingInstabug: true
    };
  }

  handleInstabugHide() {
    this.setState({
      isShowingInstabug: false
    });
  }

  render() {
    let isDarkMode =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return (
      <Container>
        <BlogGlobalStyle />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,300&display=swap"
            rel="stylesheet"
          />
          {!isDarkMode && (
            <link
              rel="stylesheet"
              href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"
            />
          )}
          {isDarkMode && (
            <link
              rel="stylesheet"
              href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"
            />
          )}
          {this.props.pageContext.frontmatter.usesLargeTwitterCard ? (
            <meta name="twitter:card" content="summary_large_image" />
          ) : (
            <meta name="twitter:card" content="summary" />
          )}
          <meta name="twitter:creator" content="@noahsark769" />
          <meta name="twitter:site" content="@noahsark769" />
          <meta
            property="og:url"
            content={`https://noahgilmore.com${this.props.location.pathname}`}
          />
          <meta
            property="og:title"
            content={this.props.pageContext.frontmatter.title}
          />
          <meta
            property="og:description"
            content={this.props.pageContext.frontmatter.staticPreview}
          />
          <meta
            name="twitter:description"
            content={this.props.pageContext.frontmatter.staticPreview}
          />
          <meta
            name="description"
            content={this.props.pageContext.frontmatter.staticPreview}
          />
        </Helmet>
        {this.props.pageContext.frontmatter.ogimage && (
          <OGImage filename={this.props.pageContext.frontmatter.ogimage} />
        )}
        <Nav blog />
        <BlogPostContainer isCompressed={true}>
          <PostContainerOuter hasPadding={false}>
            <PostContainerInner>
              <NonContent>
                <BlogPostMeta
                  title={this.props.pageContext.frontmatter.title}
                  subtitle={this.props.pageContext.frontmatter.subtitle}
                  date={this.props.pageContext.frontmatter.date}
                />
              </NonContent>
              <MarkdownContent>{this.props.children}</MarkdownContent>
              <NonContent>
                <EndButtons
                  tweetTitle={this.props.pageContext.frontmatter.title}
                  tweetUrl={`https://noahgilmore.com${this.props.location.pathname}`}
                />
                <div
                  style={{ fontFamily: "'Merriweather', times, serif" }}
                  className="dark-mode:text-white flex flex-col leading-6 mt-32 pt-16 border-t border-solid border-white"
                >
                  <div className="flex flex-row items-center mb-12 md:mb-0">
                    <div className="w-32 md:w-48 max-w-none rounded-full overflow-hidden mr-8">
                      <Image
                        src={corgi}
                        layout="responsive"
                        alt="Picture of me with a corgi"
                        className="w-32 md:w-48 max-w-none rounded-full overflow-hidden mr-8"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1
                        className="uppercase text-3xl font-bold mb-4 leading-8"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        Noah Gilmore
                      </h1>
                      <p className="hidden md:block">
                        I'm Noah, a software developer based in the San
                        Francisco Bay Area. I focus mainly on iOS, Apple
                        platform development, and full stack web development.
                      </p>
                    </div>
                  </div>
                  <p className="block md:hidden mb-12">
                    Hello! I'm Noah, a software developer based in the San
                    Francisco bay area. I focus mainly on iOS, Apple platform
                    development, and full stack web development.
                  </p>
                  <div>
                    <ul className="p-0 md:pt-8 md:pb-8">
                      <li className="pb-6">
                        <span role="img" aria-label="Computer">
                          💻
                        </span>{" "}
                        I'm writing a macOS editor for Atlassian Confluence
                        called{" "}
                        <HighlightedA
                          className="underline"
                          href="https://getfluency.io"
                        >
                          Fluency
                        </HighlightedA>
                      </li>
                      <li className="pb-6">
                        <span role="img" aria-label="Phone">
                          📱
                        </span>{" "}
                        I wrote an app which lets you create transparent app
                        icons called{" "}
                        <HighlightedA
                          className="underline"
                          href="https://transparenticons.app"
                        >
                          Transparent App Icons
                        </HighlightedA>
                      </li>
                      <li className="pb-6">
                        <span role="img" aria-label="Puzzle">
                          🧩
                        </span>{" "}
                        I made a puzzle game for iPhone and iPad called{" "}
                        <HighlightedA
                          className="underline"
                          href="https://apps.apple.com/us/app/trestle-the-new-sudoku/id1300230302"
                        >
                          Trestle
                        </HighlightedA>
                      </li>
                      <li className="pb-6">
                        <span role="img" aria-label="Art">
                          🎨
                        </span>{" "}
                        I wrote a CoreImage filter utility app for iOS
                        developers called{" "}
                        <HighlightedA
                          className="underline"
                          href="https://apps.apple.com/us/app/cifilter-io/id1457458557"
                        >
                          CIFilter.io
                        </HighlightedA>
                      </li>
                      <li>
                        <span role="img" aria-label="Wave">
                          👋
                        </span>{" "}
                        Please feel free to reach out on{" "}
                        <HighlightedA
                          className="underline"
                          href="https://twitter.com/noahsark769"
                        >
                          Twitter
                        </HighlightedA>
                      </li>
                    </ul>
                  </div>
                </div>
                <Disqus />
              </NonContent>
            </PostContainerInner>
          </PostContainerOuter>
        </BlogPostContainer>
      </Container>
    );
  }

  componentDidMount() {
    ReactGA.initialize("UA-35325391-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}
