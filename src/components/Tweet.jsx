import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const Wrapper = ({ children }) => (
  <div className="w-full flex justify-center">{children}</div>
)

const InnerWrapper = ({ children }) => (
  <div className="w-[1px] min-w-[500px] sm:min-w-[90%]">{children}</div>
)

export default class Tweet extends React.Component {
  render() {
    return (
      <Wrapper>
        <InnerWrapper>
          <TwitterTweetEmbed tweetId={this.props.tweetId} />
        </InnerWrapper>
      </Wrapper>
    )
  }
}
