import React from 'react';
import MDXBlogPosts, { type BlogPostEdge } from "../components/MDXBlogPosts";

export default function MDXBlogPostsTemplate({ pageContext }: {
  pageContext: {
    tag: string
    edges: BlogPostEdge[]
  }
}) {
  return <MDXBlogPosts mdxEdges={pageContext.edges} />;
};
