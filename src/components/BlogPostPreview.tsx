import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { P } from '../components/default'
import MarkdownContent from '../components/MarkdownContent'

const Wrapper = ({ children, href }: React.PropsWithChildren<{ href: string }>) => (
  <Link href={href} className="mb-5 flex cursor-pointer flex-col rounded-xs border border-[#ddd] bg-white p-5 transition-all duration-200 ease-in-out hover:border-[rgba(128,165,177,1)] dark:border-[#444] dark:bg-secondaryDarkBackground">
    {children}
  </Link>
)

const Title = ({ children }: React.PropsWithChildren) => (
  <h2 className="mb-[5px] font-sans text-[20px] dark:text-white">
    {children}
  </h2>
)

const StyledDate = ({ children }: React.PropsWithChildren) => (
  <div className="font-serif text-[14px] italic text-[#999]">
    {children}
  </div>
)

const Content = ({ children }: React.PropsWithChildren) => (
  <div className="pb-[15px] font-['Open_Sans',times,serif] text-[13px] leading-[26px] text-[#333]">
    {children}
  </div>
)

const NonContent = ({ children }: React.PropsWithChildren) => <div>{children}</div>

const LinkSpan = ({ children }: React.PropsWithChildren) => (
  <span className="font-serif text-[#1a3f4b] text-inherit underline no-underline outline-hidden hover:text-[#1a3f4b] hover:underline focus:text-inherit focus:no-underline focus:outline-hidden dark:text-[#60b5d1] dark:hover:text-[#60b5d1]">
    {children}
  </span>
)

const BlogPostPreview = ({ url, title, date, mdxPreview }: {
  url: string
  title: string
  date: string
  mdxPreview: string
}) => {
  return (
    <Wrapper href={url}>
        <NonContent>
          <Title>{title}</Title>
          <StyledDate>{date}</StyledDate>
        </NonContent>
        <Content>
          <MarkdownContent>
            <ReactMarkdown
              components={{
                a: ({ children }: React.PropsWithChildren) => <LinkSpan>{children}</LinkSpan>,
              }}
            >
              {mdxPreview}
            </ReactMarkdown>
          </MarkdownContent>
        </Content>
        <NonContent>
          <P>
            <LinkSpan>Read more</LinkSpan>
          </P>
        </NonContent>
      </Wrapper>
  )
}

export default BlogPostPreview
