import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import corgi from '../../public/corgi.jpg'
import { HighlightedA } from '../components/default'
import { BlogPostContainer, BlogPostMeta } from './BlogPost'
import { BlogGlobalStyle } from './default'
import Disqus from './Disqus'
import EndButtons from './EndButtons'
import MarkdownContent from './MarkdownContent'
import Nav from './Nav'
import { OGImage } from './OGImage'

const Container = ({ children }) => (
  <div className="dark:bg-darkBackground">{children}</div>
)

const NonContent = ({ children }) => (
  <div className="max-sm:px-[5%]">{children}</div>
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
        <BlogGlobalStyle />
        <Helmet>
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
        </Helmet>
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
                  <div className="mb-12 flex flex-row items-center md:mb-0">
                    <div className="mr-8 w-32 max-w-none overflow-hidden rounded-full md:w-48">
                      <Image
                        src={corgi}
                        layout="responsive"
                        alt="Picture of me with a corgi"
                        className="mr-8 w-32 max-w-none overflow-hidden rounded-full md:w-48"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1
                        className="mb-4 text-3xl font-bold uppercase leading-8"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        Noah Gilmore
                      </h1>
                      <p className="hidden md:block">
                        I'm Noah, a software developer based in the San
                        Francisco Bay Area. I focus mainly on iOS, Apple
                        platform development, and full stack web development.
                      </p>
                    </div>
                  </div>
                  <p className="mb-12 block md:hidden">
                    Hello! I'm Noah, a software developer based in the San
                    Francisco bay area. I focus mainly on iOS, Apple platform
                    development, and full stack web development.
                  </p>
                  <div>
                    <ul className="p-0 md:pb-8 md:pt-8">
                      <li className="pb-6">
                        <span role="img" aria-label="Computer">
                          💻
                        </span>{' '}
                        I'm writing a macOS editor for Atlassian Confluence
                        called{' '}
                        <HighlightedA
                          className="underline"
                          href="https://getfluency.io"
                        >
                          Fluency
                        </HighlightedA>
                      </li>
                      <li className="pb-6">
                        <span role="img" aria-label="Phone">
                          📱
                        </span>{' '}
                        I wrote an app which lets you create transparent app
                        icons called{' '}
                        <HighlightedA
                          className="underline"
                          href="https://transparenticons.app"
                        >
                          Transparent App Icons
                        </HighlightedA>
                      </li>
                      <li className="pb-6">
                        <span role="img" aria-label="Puzzle">
                          🧩
                        </span>{' '}
                        I made a puzzle game for iPhone and iPad called{' '}
                        <HighlightedA
                          className="underline"
                          href="https://apps.apple.com/us/app/trestle-the-new-sudoku/id1300230302"
                        >
                          Trestle
                        </HighlightedA>
                      </li>
                      <li className="pb-6">
                        <span role="img" aria-label="Art">
                          🎨
                        </span>{' '}
                        I wrote a CoreImage filter utility app for iOS
                        developers called{' '}
                        <HighlightedA
                          className="underline"
                          href="https://apps.apple.com/us/app/cifilter-io/id1457458557"
                        >
                          CIFilter.io
                        </HighlightedA>
                      </li>
                      <li>
                        <span role="img" aria-label="Wave">
                          👋
                        </span>{' '}
                        Please feel free to reach out on{' '}
                        <HighlightedA
                          className="underline"
                          href="https://twitter.com/noahsark769"
                        >
                          Twitter
                        </HighlightedA>
                      </li>
                    </ul>
                  </div>
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
