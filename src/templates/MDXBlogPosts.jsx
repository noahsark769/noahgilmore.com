import React from 'react';
import { Helmet } from "react-helmet";
import { GlobalStyle } from '../components/default';
import Nav from '../components/Nav';
import { BlogPostContainer } from '../components/BlogPost';
import BlogPostPreview from '../components/BlogPostPreview';
import ReactGA from 'react-ga';
import { StaticQuery, graphql } from 'gatsby'
import { formatDateString } from '../lib/dateFormat';


class MDXBlogPosts extends React.Component {
  render() {
    return (
        <div>
            <GlobalStyle />
            <Helmet>
              <title>{this.props.pageContext.tag + " | "}Noah Gilmore</title>
              <link href='https://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css' />
              <link href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic" rel="stylesheet" />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:creator" content="@noahsark769" />
              <meta property="og:url" content={`https://noahgilmore.com/blog`} />
              <meta property="og:title" content="Blog - Noah Gilmore" />
              <meta property="og:description" content="Noah Gilmore's personal blog. Software development (web, iOS)." />
              <meta name="Description" content="Noah Gilmore's personal blog. Software development (web, iOS)." />
            </Helmet>
            <Nav />
            <BlogPostContainer darkened>{this.props.pageContext.edges.map((edge) => {
                return <BlogPostPreview
                  key={edge.node.id}
                  url={"/blog/" + edge.node.parent.name}
                  title={edge.node.frontmatter.title}
                  date={formatDateString(edge.node.frontmatter.date)}
                  mdxPreview={edge.node.frontmatter.mdxPreview}/>
            })}</BlogPostContainer>
        </div>
    );
  }

  componentDidMount() {
      ReactGA.initialize('UA-35325391-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
  }
};

export default MDXBlogPosts;