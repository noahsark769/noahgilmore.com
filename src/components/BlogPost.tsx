import classNames from 'classnames'
import React from 'react'

export const BlogPostContainer = ({
  children,
  isCompressed,
  darkened,
}: React.PropsWithChildren<{
  isCompressed: boolean
  darkened: boolean
}>) => {
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

const TitleContainer = ({ children }: React.PropsWithChildren) => (
  <div className="w-full mb-10">{children}</div>
)

const Heading = ({ children }: React.PropsWithChildren) => (
  <h1 className="w-full font-sans text-[34px] mb-[10px] leading-[1.2em] dark:text-white">
    {children}
  </h1>
)

const SubtitleHeading = ({ children }: React.PropsWithChildren) => (
  <h1 className="w-full font-sans text-[18px] mb-[10px] leading-[1.2em] italic dark:text-[#ddd]">
    {children}
  </h1>
)

const DateContainer = ({ children }: React.PropsWithChildren) => (
  <p className="font-serif italic text-[13px] text-[#999]">
    {children}
  </p>
)

export const BlogPostMeta = ({
  title,
  subtitle,
  date,
}: {
  title: string
  subtitle?: string
  date: string
}) => {
  return (
    <div>
      <TitleContainer>
        <Heading>{title}</Heading>
        {subtitle && <SubtitleHeading>{subtitle}</SubtitleHeading>}
        <DateContainer>{date}</DateContainer>
      </TitleContainer>
    </div>
  )
}

export default function BlogPost({ children }: React.PropsWithChildren) {
  return <BlogPostContainer isCompressed={false} darkened={false}>{children}</BlogPostContainer>
}
