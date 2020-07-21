import React from 'react';
import MDXBlogPosts from '../../components/MDXBlogPosts';
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

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
      return <MDXBlogPosts mdxEdges={data.allMdx.edges} />
    }}
  />
);

export default MDXBlogPostsQuery;
