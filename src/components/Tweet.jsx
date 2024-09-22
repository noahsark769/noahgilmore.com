import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const Wrapper = ({ children }) => (
  <div className="w-full flex justify-center">{children}</div>
)

const InnerWrapper = ({ children }) => (
  <div className="w-[1px] md:min-w-[500px] min-w-[90%] mx-auto twitter-embed">
    {children}
  </div>
)

export default class Tweet extends React.Component {
  render() {
    return (
      <Wrapper>
        <InnerWrapper>
          <TwitterTweetEmbed
            style={{ width: '100%' }}
            tweetId={this.props.tweetId}
          />
        </InnerWrapper>
      </Wrapper>
    )
  }
}
