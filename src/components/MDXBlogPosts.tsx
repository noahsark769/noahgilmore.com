import React from 'react'
import { BlogPostContainer } from '../components/BlogPost'
import BlogPostPreview from '../components/BlogPostPreview'
import Nav from '../components/Nav'

export default function MDXBlogPosts({ mdxEdges }: any) {
  return (
    <div className="dark:bg-darkBackground">
      <Nav blog />
      <BlogPostContainer isCompressed darkened>
        {mdxEdges.map((edge: any) => {
          return (
            <BlogPostPreview
              key={edge.node.id}
              url={'/blog/' + edge.node.parent.name}
              title={edge.node.frontmatter.title}
              date={edge.node.frontmatter.date}
              mdxPreview={edge.node.frontmatter.mdxPreview}
            />
          )
        })}
      </BlogPostContainer>
    </div>
  )
}
