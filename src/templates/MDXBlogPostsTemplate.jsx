import React from 'react';
import MDXBlogPosts  from "../components/MDXBlogPosts";

export default function MDXBlogPostsTemplate(props) {
  return <MDXBlogPosts tag={props.pageContext.tag} mdxEdges={props.pageContext.edges} />;
};
