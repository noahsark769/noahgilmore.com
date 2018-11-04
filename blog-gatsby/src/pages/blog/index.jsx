import React from 'react';
import { Helmet } from "react-helmet";
import { GlobalStyle } from '../../components/default';
import Nav from '../../components/Nav';
import { BlogPostContainer } from '../../components/BlogPost';
import BlogPostPreview from '../../components/BlogPostPreview';
import CaptionedImage from '../../components/CaptionedImage';
import ReactGA from 'react-ga';
import { StaticQuery, graphql } from 'gatsby'

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
                const frontmatter = edge.node.frontmatter;
                const date = new Date(frontmatter.date);
                const displayDate = date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});
                console.log(frontmatter);
                return <BlogPostPreview key={edge.node.id} url={"/blog/" + edge.node.parent.name} title={frontmatter.title} date={displayDate} mdxPreview={frontmatter.mdxPreview}/>
            })}</BlogPostContainer>
        </div>
    );
};

export default MDXBlogPostsQuery;
