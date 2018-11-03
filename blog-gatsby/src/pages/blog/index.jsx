import React from 'react';
import { Helmet } from "react-helmet";
import { GlobalStyle } from '../../components/default';
import Nav from '../../components/Nav';
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
                frontmatter {
                  title
                  date
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
        <div>{props.queryData.allMdx.edges.map((edge) => {
            return <div>{edge.node.frontmatter.title}</div>
        })}</div>
    );
};

export default MDXBlogPostsQuery;
