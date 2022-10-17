import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { formatDateString } from "../lib/dateFormat";

const postsDirectory = join(process.cwd(), "src", "pages", "blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(name => name.endsWith(".mdx"));
}

export function getPostBySlug(slug, fields) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};
  fields.forEach(field => {
    if (field === "content") {
      items[field] = content;
    } else if (field === "slug") {
      items[field] = realSlug;
    } else if (field === "date") {
      items[field] = formatDateString(data[field]);
    } else if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

// Yes

export function getAllPosts(fields) {
  const slugs = getPostSlugs();
  console.log("slugs", slugs);
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    );
  return posts;
}
