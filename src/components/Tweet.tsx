import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const Wrapper = ({ children }: any) => (
  <div className="w-full flex justify-center">{children}</div>
)

const InnerWrapper = ({ children }: any) => (
  <div className="w-px md:min-w-[500px] min-w-[90%] mx-auto twitter-embed">
    {children}
  </div>
)

export default function Tweet({ tweetId }: any) {
  return (
    <Wrapper>
      <InnerWrapper>
        <TwitterTweetEmbed
          tweetId={tweetId}
        />
      </InnerWrapper>
    </Wrapper>
  )
}
