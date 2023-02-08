import MDXBlogPosts from "../../../src/components/MDXBlogPosts";
import { getAllPosts } from "../../../src/utils/posts";

export default function BlogPage(props) {
  return <MDXBlogPosts mdxEdges={props.edges} />;
}

export const getStaticProps = async ({ params }) => {
  const posts = getAllPosts([
    "slug",
    "content",
    "title",
    "date",
    "mdxPreview",
    "tags"
  ]).filter(p => p.tags.includes(params.tag));
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

export const getStaticPaths = async () => {
  const posts = getAllPosts([
    "slug",
    "content",
    "title",
    "date",
    "mdxPreview",
    "tags"
  ]);
  const uniqueTags = [...new Set(posts.map(p => p.tags).flat())];
  return {
    paths: uniqueTags.map(tag => ({ params: { tag } })),
    fallback: false
  };
};
