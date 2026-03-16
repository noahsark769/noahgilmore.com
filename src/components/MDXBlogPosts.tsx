import React from 'react'
import { BlogPostContainer } from '../components/BlogPost'
import BlogPostPreview from '../components/BlogPostPreview'
import Nav from '../components/Nav'

export interface BlogPostEdge {
  node: {
    id: string
    parent: { name: string }
    frontmatter: {
      title: string
      date: string
      mdxPreview: string
    }
  }
}

export default function MDXBlogPosts({ mdxEdges }: { mdxEdges: BlogPostEdge[] }) {
  return (
    <div className="dark:bg-darkBackground">
      <Nav blog />
      <BlogPostContainer isCompressed darkened>
        {mdxEdges.map((edge) => {
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
