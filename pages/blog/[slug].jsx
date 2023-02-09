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
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
          CaptionedImage: props => <CaptionedImage {...props} />,
          Tweet: props => <Tweet {...props} />,
          FlowGrid: props => <FlowGrid {...props} />,
          Instabug: props => <Instabug {...props} />,
          IOS13SystemColorTable: props => <IOS13SystemColorTable {...props} />,
          TrestleBlogPostLink: props => <TrestleBlogPostLink {...props} />,
          code: props => {
            if (props.className && typeof props.children === "string") {
              return (
                <SyntaxHighlighter
                  PreTag={undefined}
                  // Note (Noah, 2023-02-09): vscode-highlight-code is specified in the CSS,
                  // this is an artifact of the fact that we used to use hljs directly, should
                  // probably change this to a different name or something
                  codeTagProps={{ className: "vscode-highlight-code" }}
                  customStyle={{ padding: 0, overflowX: "scroll" }}
                  style={monokaiSublime}
                  language={props.className?.replace("language-", "")}
                  {...props}
                />
              );
            }
            return <code {...props} />;
          },
          pre: props => {
            // Note (Noah, 2023-02-09): react-syntax-highlighter inserts an extra <pre>
            // which messes with our CSS in MarkdownContent
            if (props.children?.props.className.includes("language-")) {
              return <>{props.children}</>;
            }
            return <pre {...props} />;
          }
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
