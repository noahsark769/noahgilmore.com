import type { Metadata } from "next"
import { BlogPostContainer } from "../../src/components/BlogPost"
import BlogPostPreview from "../../src/components/BlogPostPreview"
import Nav from "../../src/components/Nav"
import { getAllPosts } from "../../src/utils/posts"

export const metadata: Metadata = {
  title: "Blog | Noah Gilmore",
  description:
    "Noah Gilmore's personal blog. Software development (web, iOS).",
  alternates: {
    canonical: "https://noahgilmore.com/blog",
  },
  openGraph: {
    url: "https://noahgilmore.com/blog",
    title: "Blog | Noah Gilmore",
    description:
      "Noah Gilmore's personal blog. Software development (web, iOS).",
  },
  twitter: {
    card: "summary",
    creator: "@noahsark769",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const edges = posts.map((post) => ({
    node: {
      id: post.slug,
      parent: { name: post.slug },
      frontmatter: {
        title: post.title,
        date: post.date,
        mdxPreview: post.mdxPreview,
      },
    },
  }))

  return (
    <div className="dark:bg-darkBackground">
      <Nav blog />
      <BlogPostContainer isCompressed darkened>
        {edges.map((edge) => (
          <BlogPostPreview
            key={edge.node.id}
            url={"/blog/" + edge.node.parent.name}
            title={edge.node.frontmatter.title}
            date={edge.node.frontmatter.date}
            mdxPreview={edge.node.frontmatter.mdxPreview}
          />
        ))}
      </BlogPostContainer>
    </div>
  )
}
