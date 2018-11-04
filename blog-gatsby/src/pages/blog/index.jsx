import React from 'react';
import { Helmet } from "react-helmet";
import { GlobalStyle } from '../../components/default';
import Nav from '../../components/Nav';
import { BlogPostContainer } from '../../components/BlogPost';
import BlogPostPreview from '../../components/BlogPostPreview';
import CaptionedImage from '../../components/CaptionedImage';
import ReactGA from 'react-ga';
import { StaticQuery, graphql } from 'gatsby'
import { formatDateString } from '../../lib/dateFormat';

const MDXBlogPostsQuery = (props) => (
  <StaticQuery
    query={graphql`
        query MDXQuery {
          allMdx(sort: { order: DESC, fields: [frontmatter___date]}) {
            edges {
              node {
                parent {
                  ... on File {
                    name
                    relativePath
                  }
                }
                id
                frontmatter {
                  title
                  date
                  mdxPreview
                }
              }
            }
          }
        }
    `}

    render={(data) => {
      return <MDXBlogPosts queryData={data} />
    }}
  />
);

const MDXBlogPosts = (props) => {
    return (
        <div>
            <GlobalStyle />
            <Helmet>
              <link href='http://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css' />
              <link href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic" rel="stylesheet" />
            </Helmet>
            <Nav />
            <BlogPostContainer>{props.queryData.allMdx.edges.map((edge) => {
                return <BlogPostPreview
                  key={edge.node.id}
                  url={"/blog/" + edge.node.parent.name}
                  title={edge.node.frontmatter.title}
                  date={formatDateString(edge.node.frontmatter.date)}
                  mdxPreview={edge.node.frontmatter.mdxPreview}/>
            })}</BlogPostContainer>
        </div>
    );
};

export default MDXBlogPostsQuery;
