import React from 'react'
import { Helmet } from 'react-helmet'

export const BlogPostContainer = ({ children, isCompressed, darkened }) => {
  return (
    <div
      className={`
      py-[60px] mx-auto w-[90%]
      ${isCompressed ? 'sm:max-w-[700px]' : 'sm:max-w-[1600px]'} sm:mx-auto
      max-sm:w-full max-sm:py-5
      ${darkened ? 'max-sm:bg-[#f6f6f6] max-sm:dark:bg-inherit' : ''}
    `}
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
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <TitleContainer>
        <Heading>{props.title}</Heading>
        {props.subtitle && <SubtitleHeading>{props.subtitle}</SubtitleHeading>}
        <DateContainer>{props.date}</DateContainer>
      </TitleContainer>
    </div>
  )
}

export default class BlogPost extends React.Component {
  render() {
    return (
      <BlogPostContainer>
        <div>{this.props.children}</div>
      </BlogPostContainer>
    )
  }
}
