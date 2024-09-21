import classNames from 'classnames'
import Head from 'next/head'
import React from 'react'

export const BlogPostContainer = ({ children, isCompressed, darkened }) => {
  return (
    <div
      className={classNames(
        'py-[60px] md:px-0 mx-auto w-[90%]',
        'sm:mx-auto',
        isCompressed ? 'sm:max-w-[700px]' : 'sm:max-w-[1600px]',
        darkened && 'bg-[#f6f6f6] dark:bg-inherit'
      )}
    >
      {children}
    </div>
  )
}

const TitleContainer = ({ children }) => (
  <div className="w-full mb-10">{children}</div>
)

const Heading = ({ children }) => (
  <h1 className="w-full font-['Roboto','Helvetica_Neue','Helvetica',sans-serif] text-[34px] mb-[10px] leading-[1.2em] dark:text-white">
    {children}
  </h1>
)

const SubtitleHeading = ({ children }) => (
  <h1 className="w-full font-['Roboto','Helvetica_Neue','Helvetica',sans-serif] text-[18px] mb-[10px] leading-[1.2em] italic dark:text-[#ddd]">
    {children}
  </h1>
)

const DateContainer = ({ children }) => (
  <p className="font-['Merriweather',times,serif] italic text-[13px] text-[#999]">
    {children}
  </p>
)

export const BlogPostMeta = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <TitleContainer>
        <Heading>{props.title}</Heading>
        {props.subtitle && <SubtitleHeading>{props.subtitle}</SubtitleHeading>}
        <DateContainer>{props.date}</DateContainer>
      </TitleContainer>
    </div>
  )
}

export default function BlogPost({ children }) {
  return <BlogPostContainer>{children}</BlogPostContainer>
}
