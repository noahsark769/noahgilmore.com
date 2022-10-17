import MDXBlogPosts from "../src/components/MDXBlogPosts";
import { getAllPosts } from "../src/utils/posts";

export default function BlogPage(props) {
  return <MDXBlogPosts mdxEdges={props.edges} />;
}

export const getStaticProps = async () => {
  const posts = getAllPosts(["slug", "content", "title", "date", "mdxPreview"]);
  console.log(posts[0]);
  return {
    props: {
      edges: posts.map(post => {
        return {
          node: {
            id: post.slug,
            parent: {
              name: post.slug
            },
            frontmatter: {
              title: post.title,
              date: post.date,
              mdxPreview: post.mdxPreview
            }
          }
        };
      })
    }
  };
};
