import React from 'react';
import { Helmet } from "react-helmet";
import { GlobalStyle } from './default';
import Nav from './Nav';
import EndButtons from './EndButtons';
import { BlogPostContainer, BlogPostMeta } from './BlogPost';
import MarkdownContent from './MarkdownContent';
import { formatDateString } from '../lib/dateFormat';
import Disqus from './Disqus';
import ReactGA from 'react-ga';
import styled from 'styled-components';

const Container = styled.div`
  @media (prefers-color-scheme: dark) {
    background-color: #2b2c2f;
  }
`;

const NonContent = styled.div`
    @media all and (max-width: 600px) {
        padding-right: 5%;
        padding-left: 5%;
    }
`;

export default class BlogPageLayout extends React.Component {
    render() {
      let isDarkMode = (typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches);
        return (
            <Container>
              <GlobalStyle />
              <Helmet>
                  <link href='https://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css' />
                  <link href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic" rel="stylesheet" />
                  {!isDarkMode && <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css" />}
                  {isDarkMode && <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css" />}
                  <meta name="twitter:card" content="summary" />
                  <meta name="twitter:creator" content="@noahsark769" />
                  <meta property="og:url" content={`https://noahgilmore.com${this.props.location.pathname}`} />
                  <meta property="og:title" content={this.props.pageContext.frontmatter.title} />
                  <meta property="og:description" content={this.props.pageContext.frontmatter.staticPreview} />
                  <meta name="description" content={this.props.pageContext.frontmatter.staticPreview} />
              </Helmet>
              <Nav blog />
              <BlogPostContainer>
                <NonContent>
                  <BlogPostMeta
                      title={this.props.pageContext.frontmatter.title}
                      date={formatDateString(this.props.pageContext.frontmatter.date)} />
                </NonContent>
                <MarkdownContent>
                  {this.props.children}
                </MarkdownContent>
                <NonContent>
                  <EndButtons tweetTitle={this.props.pageContext.frontmatter.title} tweetUrl={`https://noahgilmore.com${this.props.location.pathname}`} />
                  <Disqus />
                </NonContent>
              </BlogPostContainer>
            </Container>
        )
    }

    componentDidMount() {
        ReactGA.initialize('UA-35325391-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
}
