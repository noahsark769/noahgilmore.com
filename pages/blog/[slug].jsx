import { getAllPosts, getPostBySlug } from "../../src/utils/posts";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import BlogPageLayout from "../../src/components/BlogPageLayout";
import Header from "../../src/components/Header";
import Tweet from "../../src/components/Tweet";
import CaptionedImage from "../../src/components/CaptionedImage";
import FlowGrid from "../../src/components/FlowGrid";
import Instabug from "../../src/components/Instabug";
import IOS13SystemColorTable from "../../src/components/IOS13SystemColorTable";
import TrestleBlogPostLink from "../../src/components/DataLink";
import slugify from "slugify";

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
          h1: props => {
            return (
              <Header
                is="h1"
                id={slugify(props.children)}
                {...{
                  ...props,
                  ...(typeof props.children === "string"
                    ? { id: slugify(props.children.toLowerCase()) }
                    : {})
                }}
              />
            );
          },
          h2: props => {
            return (
              <Header
                is="h2"
                id={slugify(props.children)}
                {...{
                  ...props,
                  ...(typeof props.children === "string"
                    ? { id: slugify(props.children.toLowerCase()) }
                    : {})
                }}
              />
            );
          },
          image: props => <div className="w-full">Yo</div>,
          img: props => <div className="w-full">Yo</div>,
          CaptionedImage: props => <CaptionedImage {...props} />,
          Tweet: props => <Tweet {...props} />,
          FlowGrid: props => <FlowGrid {...props} />,
          Instabug: props => <Instabug {...props} />,
          IOS13SystemColorTable: props => <IOS13SystemColorTable {...props} />,
          TrestleBlogPostLink: props => <TrestleBlogPostLink {...props} />
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
