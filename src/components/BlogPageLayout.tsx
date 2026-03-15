import classNames from 'classnames'
import React from 'react'
import AboutMe from './AboutMe'
import { BlogPostContainer, BlogPostMeta } from './BlogPost'
import Disqus from './Disqus'
import EndButtons from './EndButtons'
import MarkdownContent from './MarkdownContent'
import Nav from './Nav'

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
  return (
    <Container>
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
