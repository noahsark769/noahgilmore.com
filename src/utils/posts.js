import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { formatDateString } from "../lib/dateFormat.js";

const postsDirectory = join(process.cwd(), "src", "pages", "blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(name => name.endsWith(".mdx"));
}

export function getPostBySlug(slug, fields) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post = {};
  fields.forEach(field => {
    if (field === "content") {
      post[field] = content;
    } else if (field === "slug") {
      post[field] = realSlug;
    } else if (field === "date") {
      post[field] = formatDateString(data[field]);
    } else if (field === "tags") {
      post[field] = data[field]
        ? data[field].split(",").map(tag => tag.trim())
        : [];
    } else if (typeof data[field] !== "undefined") {
      post[field] = data[field];
    }
  });

  return post;
}

export function getAllPosts(fields) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    );
  return posts;
}
