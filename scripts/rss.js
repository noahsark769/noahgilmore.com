import fs from "fs";
import { Feed } from "feed";
import { getAllPosts } from "../src/utils/posts.js";

export default async function generateRssFeed(config) {
  const allPosts = getAllPosts([
    "slug",
    "title",
    "date",
    "mdxPreview",
    "staticPreview"
  ]);
  const siteUrl = process.env.NEXT_PUBLIC_ROOT_URL ?? "localhost:3000";

  const feedOptions = {
    title: config.title,
    description: config.description,
    id: siteUrl,
    link: siteUrl,
    copyright: `All rights reserved ${new Date().getFullYear()}, Noah Gilmore`,
    generator: "Feed generator for noahgilmore.com",
    feedLinks: {
      rss2: `${siteUrl}/${config.path}.xml`
    }
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}`,
      description: post.staticPreview,
      date: new Date(post.date)
    });
  });

  fs.writeFileSync(`./public/${config.path}.xml`, feed.rss2());
}

generateRssFeed({
  title: "Noah Gilmore's Development Blog: Apple Platform Development",
  description: "Posts about Apple platform development from Noah Gilmore",
  tag: "apple",
  path: "blog/apple"
});
generateRssFeed({
  title: "Noah Gilmore's Development Blog: iOS",
  description: "Posts about iOS application development from Noah Gilmore",
  tag: "ios",
  path: "blog/ios"
});
generateRssFeed({
  title: "Noah Gilmore's Development Blog: Web",
  description: "Posts about web development from Noah Gilmore",
  tag: "web",
  path: "blog/web"
});
generateRssFeed({
  title: "Noah Gilmore's Development Blog",
  description: "Posts about software from Noah Gilmore",
  path: "blog/rss"
});
