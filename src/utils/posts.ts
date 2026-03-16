import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { formatDateString } from "../lib/dateFormat";

const postsDirectory = join(process.cwd(), "src", "content", "blog");

export interface Post {
  slug: string
  content: string
  title: string
  subtitle: string
  date: string
  rawDate: string
  mdxPreview: string
  tags: string[]
  ogimage: string
  staticPreview: string
  usesLargeTwitterCard: boolean
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(name => name.endsWith(".mdx"));
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    content,
    title: data.title ?? "",
    subtitle: data.subtitle ?? "",
    date: formatDateString(data.date),
    rawDate: new Date(data.date).toISOString().split("T")[0],
    mdxPreview: data.mdxPreview ?? "",
    tags: data.tags
      ? data.tags.split(",").map((tag: string) => tag.trim())
      : [],
    ogimage: data.ogimage ?? "",
    staticPreview: data.staticPreview ?? "",
    usesLargeTwitterCard: data.usesLargeTwitterCard ?? false,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    );
  return posts;
}
