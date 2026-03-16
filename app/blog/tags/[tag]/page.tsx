import type { Metadata } from "next"
import { BlogPostContainer } from "../../../../src/components/BlogPost"
import BlogPostPreview from "../../../../src/components/BlogPostPreview"
import Nav from "../../../../src/components/Nav"
import { getAllPosts } from "../../../../src/utils/posts"

export const metadata: Metadata = {
  title: "Blog | Noah Gilmore",
  description:
    "Noah Gilmore's personal blog. Software development (web, iOS).",
  twitter: {
    card: "summary",
    creator: "@noahsark769",
  },
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug", "tags"])
  const uniqueTags = [...new Set(posts.map((p) => p.tags).flat())]
  return uniqueTags.map((tag) => ({ tag }))
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  const posts = getAllPosts([
    "slug",
    "content",
    "title",
    "date",
    "mdxPreview",
    "tags",
  ]).filter((p) => p.tags.includes(tag))

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
