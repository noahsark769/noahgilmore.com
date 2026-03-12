import classNames from 'classnames'
import Head from 'next/head'
import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import AboutMe from './AboutMe'
import { BlogPostContainer, BlogPostMeta } from './BlogPost'
import Disqus from './Disqus'
import EndButtons from './EndButtons'
import MarkdownContent from './MarkdownContent'
import Nav from './Nav'
import { OGImage } from './OGImage'

const Container = ({ children }: any) => (
  <div className="dark:bg-darkBackground">{children}</div>
)

const NonContent = ({ children }: any) => (
  <div className="sm:px-[5%]">{children}</div>
)

const PostContainerOuter = ({ children, hasPadding }: any) => (
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

const PostContainerInner = ({ children }: any) => (
  <div className="block w-full flex-col">{children}</div>
)

export default function BlogPageLayout({ pageContext, location, children }: any) {
  useEffect(() => {
    ReactGA.initialize('UA-35325391-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

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
        {pageContext.frontmatter.usesLargeTwitterCard ? (
          <meta name="twitter:card" content="summary_large_image" />
        ) : (
          <meta name="twitter:card" content="summary" />
        )}
        <meta name="twitter:creator" content="@noahsark769" />
        <meta name="twitter:site" content="@noahsark769" />
        <meta
          property="og:url"
          content={`https://noahgilmore.com${location.pathname}`}
        />
        <meta
          property="og:title"
          content={pageContext.frontmatter.title}
        />
        <meta
          property="og:description"
          content={pageContext.frontmatter.staticPreview}
        />
        <meta
          name="twitter:description"
          content={pageContext.frontmatter.staticPreview}
        />
        <meta
          name="description"
          content={pageContext.frontmatter.staticPreview}
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
      {pageContext.frontmatter.ogimage && (
        <OGImage filename={pageContext.frontmatter.ogimage} />
      )}
      <Nav blog />
      <BlogPostContainer isCompressed={true}>
        <PostContainerOuter hasPadding={false}>
          <PostContainerInner>
            <NonContent>
              <BlogPostMeta
                title={pageContext.frontmatter.title}
                subtitle={pageContext.frontmatter.subtitle}
                date={pageContext.frontmatter.date}
              />
            </NonContent>
            <MarkdownContent>{children}</MarkdownContent>
            <NonContent>
              <EndButtons
                tweetTitle={pageContext.frontmatter.title}
                tweetUrl={`https://noahgilmore.com${location.pathname}`}
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
