import classNames from 'classnames'
import Head from 'next/head'
import React from 'react'
import ReactGA from 'react-ga'
import AboutMe from './AboutMe'
import { BlogPostContainer, BlogPostMeta } from './BlogPost'
import Disqus from './Disqus'
import EndButtons from './EndButtons'
import MarkdownContent from './MarkdownContent'
import Nav from './Nav'
import { OGImage } from './OGImage'

const Container = ({ children }) => (
  <div className="dark:bg-darkBackground">{children}</div>
)

const NonContent = ({ children }) => (
  <div className="sm:px-[5%]">{children}</div>
)

const PostContainerOuter = ({ children, hasPadding }) => (
  <div
    className={classNames(
      'flex',
      'flex-row',
      {
        'p-5': hasPadding,
        'p-0': !hasPadding,
      },
      'max-xl:p-0'
    )}
  >
    {children}
  </div>
)

const PostContainerInner = ({ children }) => (
  <div className="block w-full flex-col">{children}</div>
)

export default class BlogPageLayout extends React.Component {
  render() {
    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,300&display=swap"
            rel="stylesheet"
          />
          {this.props.pageContext.frontmatter.usesLargeTwitterCard ? (
            <meta name="twitter:card" content="summary_large_image" />
          ) : (
            <meta name="twitter:card" content="summary" />
          )}
          <meta name="twitter:creator" content="@noahsark769" />
          <meta name="twitter:site" content="@noahsark769" />
          <meta
            property="og:url"
            content={`https://noahgilmore.com${this.props.location.pathname}`}
          />
          <meta
            property="og:title"
            content={this.props.pageContext.frontmatter.title}
          />
          <meta
            property="og:description"
            content={this.props.pageContext.frontmatter.staticPreview}
          />
          <meta
            name="twitter:description"
            content={this.props.pageContext.frontmatter.staticPreview}
          />
          <meta
            name="description"
            content={this.props.pageContext.frontmatter.staticPreview}
          />
        </Head>
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
        {this.props.pageContext.frontmatter.ogimage && (
          <OGImage filename={this.props.pageContext.frontmatter.ogimage} />
        )}
        <Nav blog />
        <BlogPostContainer isCompressed={true}>
          <PostContainerOuter hasPadding={false}>
            <PostContainerInner>
              <NonContent>
                <BlogPostMeta
                  title={this.props.pageContext.frontmatter.title}
                  subtitle={this.props.pageContext.frontmatter.subtitle}
                  date={this.props.pageContext.frontmatter.date}
                />
              </NonContent>
              <MarkdownContent>{this.props.children}</MarkdownContent>
              <NonContent>
                <EndButtons
                  tweetTitle={this.props.pageContext.frontmatter.title}
                  tweetUrl={`https://noahgilmore.com${this.props.location.pathname}`}
                />
                <div
                  style={{ fontFamily: "'Merriweather', times, serif" }}
                  className="mt-32 flex flex-col border-t border-solid border-white pt-16 leading-6 dark:text-white"
                >
                  <AboutMe />
                </div>
                <Disqus />
              </NonContent>
            </PostContainerInner>
          </PostContainerOuter>
        </BlogPostContainer>
      </Container>
    )
  }

  componentDidMount() {
    ReactGA.initialize('UA-35325391-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
}
