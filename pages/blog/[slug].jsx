import { getAllPosts, getPostBySlug } from "../../src/utils/posts";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import BlogPageLayout from "../../src/components/BlogPageLayout";
import Header from "../../src/components/Header";

export default function BlogPage(props) {
  const pageContext = {
    frontmatter: props.post
  };
  return (
    <BlogPageLayout
      pageContext={pageContext}
      location={{
        pathname: `/blog/${props.post.slug}`
      }}
    >
      <MDXRemote
        {...props.source}
        components={{
          h1: props => <Header is="h1" {...props} />,
          h2: props => <Header is="h2" {...props} />
        }}
      />
    </BlogPageLayout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "subtitle",
    "date",
    "slug",
    "content",
    "tags",
    "usesLargeTwitterCard",
    "staticPreview",
    "ogimage"
  ]);
  const mdxSource = await serialize(post.content || "", {
    mdxOptions: {
      // @ts-ignore
      rehypePlugins: [[imageSize, { dir: "public" }]]
    }
  });
  return { props: { source: mdxSource, post } };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
