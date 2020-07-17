import React from 'react';
import { Helmet } from "react-helmet";
import { BlogGlobalStyle, colors } from '../components/default';
import Nav from '../components/Nav';
import { BlogPostContainer } from '../components/BlogPost';
import BlogPostPreview from '../components/BlogPostPreview';
import ReactGA from 'react-ga';
import { formatDateString } from '../lib/dateFormat';
import styled from 'styled-components';

const Container = styled.div`
  @media (prefers-color-scheme: dark) {
    background-color: ${colors.darkBackground};
  }
`;

export default class MDXBlogPosts extends React.Component {
  render() {
    let isDarkMode = (typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches);
    return (
        <Container>
            <BlogGlobalStyle />
            <Helmet>
              <title>{(this.props.tag || "Blog") + " | "}Noah Gilmore</title>
              <link href='https://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css' />
              <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" />
                {!isDarkMode && <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css" />}
                {isDarkMode && <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css" />}
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:creator" content="@noahsark769" />
              <meta property="og:url" content={`https://noahgilmore.com/blog`} />
              <meta property="og:title" content="Blog - Noah Gilmore" />
              <meta property="og:description" content="Noah Gilmore's personal blog. Software development (web, iOS)." />
              <meta name="Description" content="Noah Gilmore's personal blog. Software development (web, iOS)." />
            </Helmet>
            <Nav />
            <BlogPostContainer isCompressed darkened>{this.props.mdxEdges.map((edge) => {
                return <BlogPostPreview
                  key={edge.node.id}
                  url={"/blog/" + edge.node.parent.name}
                  title={edge.node.frontmatter.title}
                  date={formatDateString(edge.node.frontmatter.date)}
                  mdxPreview={edge.node.frontmatter.mdxPreview}/>
            })}</BlogPostContainer>
        </Container>
    );
  }

  componentDidMount() {
      ReactGA.initialize('UA-35325391-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
  }
};