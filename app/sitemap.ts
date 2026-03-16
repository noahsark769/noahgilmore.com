import type { MetadataRoute } from "next"
import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

const siteUrl = "https://noahgilmore.com"
const postsDirectory = join(process.cwd(), "src", "content", "blog")

function getPostMeta() {
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => {
      const { data } = matter(
        fs.readFileSync(join(postsDirectory, name), "utf8")
      )
      const slug = name.replace(/\.mdx$/, "")
      const tags: string[] = data.tags
        ? data.tags.split(",").map((t: string) => t.trim())
        : []
      return { slug, date: data.date, tags }
    })
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPostMeta()

  const uniqueTags = [...new Set(posts.flatMap((p) => p.tags))]

  return [
    {
      url: `${siteUrl}/`,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/blog`,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/examples/ios-copy-to-clipboard`,
      priority: 0.5,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      priority: 0.7 as const,
    })),
    ...uniqueTags.map((tag) => ({
      url: `${siteUrl}/blog/tags/${tag}`,
      priority: 0.4 as const,
    })),
  ]
}
