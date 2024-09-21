import React from 'react'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import { BlogPostContainer } from '../components/BlogPost'
import BlogPostPreview from '../components/BlogPostPreview'
import Nav from '../components/Nav'

export default class MDXBlogPosts extends React.Component {
  render() {
    return (
      <div className="dark:bg-darkBackground">
        <Helmet>
          <title>{(this.props.tag || 'Blog') + ' | '}Noah Gilmore</title>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,300&display=swap"
            rel="stylesheet"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@noahsark769" />
          <meta property="og:url" content={`https://noahgilmore.com/blog`} />
          <meta property="og:title" content="Blog - Noah Gilmore" />
          <meta
            property="og:description"
            content="Noah Gilmore's personal blog. Software development (web, iOS)."
          />
          <meta
            name="Description"
            content="Noah Gilmore's personal blog. Software development (web, iOS)."
          />
        </Helmet>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .twitter-embed > div {
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
          `,
          }}
        />
        <Nav blog />
        <BlogPostContainer isCompressed darkened>
          {this.props.mdxEdges.map((edge) => {
            return (
              <BlogPostPreview
                key={edge.node.id}
                url={'/blog/' + edge.node.parent.name}
                title={edge.node.frontmatter.title}
                date={edge.node.frontmatter.date}
                mdxPreview={edge.node.frontmatter.mdxPreview}
              />
            )
          })}
        </BlogPostContainer>
      </div>
    )
  }

  componentDidMount() {
    ReactGA.initialize('UA-35325391-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
}
