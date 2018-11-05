import React from 'react';
import { Helmet } from "react-helmet";
import { GlobalStyle } from './default';
import Nav from './Nav';
import { BlogPostContainer, BlogPostMeta } from './BlogPost';
import MarkdownContent from './MarkdownContent';
import { formatDateString } from '../lib/dateFormat';
import Disqus from './Disqus';
import ReactGA from 'react-ga';
import styled from 'styled-components';

const NonContent = styled.div`
    @media all and (max-width: 600px) {
        padding-right: 5%;
        padding-left: 5%;
    }
`;

export default class BlogPageLayout extends React.Component {
    render() {
        return (
            <div>
              <GlobalStyle />
              <Helmet>
                  <link href='http://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css' />
                  <link href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic" rel="stylesheet" />
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
                  <Disqus />
                </NonContent>
              </BlogPostContainer>
            </div>
        )
    }

    componentDidMount() {
        ReactGA.initialize('UA-35325391-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
}
