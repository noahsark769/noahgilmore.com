import classNames from 'classnames'
import React from 'react'
import AboutMe from './AboutMe'
import { BlogPostContainer, BlogPostMeta } from './BlogPost'
import Disqus from './Disqus'
import EndButtons from './EndButtons'
import MarkdownContent from './MarkdownContent'
import Nav from './Nav'

const Container = ({ children }: React.PropsWithChildren) => (
  <div className="dark:bg-darkBackground">{children}</div>
)

const NonContent = ({ children }: React.PropsWithChildren) => (
  <div className="sm:px-[5%]">{children}</div>
)

const PostContainerOuter = ({ children, hasPadding }: React.PropsWithChildren<{ hasPadding: boolean }>) => (
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

const PostContainerInner = ({ children }: React.PropsWithChildren) => (
  <div className="block w-full flex-col">{children}</div>
)

export default function BlogPageLayout({ pageContext, location, children }: React.PropsWithChildren<{
  pageContext: {
    frontmatter: {
      title: string
      subtitle?: string
      date: string
    }
  }
  location: {
    pathname: string
  }
}>) {
  return (
    <Container>
      <Nav blog />
      <BlogPostContainer isCompressed={true} darkened={false}>
        <PostContainerOuter hasPadding={false}>
          <PostContainerInner>
            <BlogPostMeta
              title={pageContext.frontmatter.title}
              subtitle={pageContext.frontmatter.subtitle}
              date={pageContext.frontmatter.date}
            />
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
