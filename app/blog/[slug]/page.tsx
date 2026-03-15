import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import imageSize from "rehype-img-size"
import { getAllPosts, getPostBySlug } from "../../../src/utils/posts"
import BlogPageLayout from "../../../src/components/BlogPageLayout"
import {
  MdxH1,
  MdxH2,
  MdxCode,
  MdxPre,
  Tweet,
  CaptionedImage,
  FlowGrid,
  IOS13SystemColorTable,
  TrestleBlogPostLink,
} from "./mdx-components"

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"])
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug, [
    "title",
    "slug",
    "staticPreview",
    "usesLargeTwitterCard",
    "ogimage",
  ])
  if (!post.title) return {}

  const metadata: Metadata = {
    title: post.title,
    description: post.staticPreview,
    openGraph: {
      url: `https://noahgilmore.com/blog/${slug}`,
      title: post.title,
      description: post.staticPreview,
      ...(post.ogimage
        ? {
            images: [
              post.ogimage.startsWith("/")
                ? `https://noahgilmore.com${post.ogimage}`
                : `https://noahgilmore.com/${post.ogimage}`,
            ],
          }
        : {}),
    },
    twitter: {
      card: post.usesLargeTwitterCard ? "summary_large_image" : "summary",
      creator: "@noahsark769",
      site: "@noahsark769",
      description: post.staticPreview,
      ...(post.ogimage
        ? {
            images: [
              post.ogimage.startsWith("/")
                ? `https://noahgilmore.com${post.ogimage}`
                : `https://noahgilmore.com/${post.ogimage}`,
            ],
          }
        : {}),
    },
  }
  return metadata
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug, [
    "title",
    "subtitle",
    "date",
    "slug",
    "content",
    "tags",
    "usesLargeTwitterCard",
    "staticPreview",
    "ogimage",
  ])

  if (!post.title) {
    notFound()
  }

  const pageContext = { frontmatter: post }

  return (
    <BlogPageLayout
      pageContext={pageContext}
      location={{ pathname: `/blog/${slug}` }}
    >
      <MDXRemote
        source={post.content || ""}
        options={{
          mdxOptions: {
            // @ts-ignore
            rehypePlugins: [[imageSize, { dir: "public" }]],
          },
        }}
        components={{
          h1: MdxH1,
          h2: MdxH2,
          CaptionedImage,
          Tweet,
          FlowGrid,
          IOS13SystemColorTable,
          TrestleBlogPostLink,
          code: MdxCode,
          pre: MdxPre,
        }}
      />
    </BlogPageLayout>
  )
}
