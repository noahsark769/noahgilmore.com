import React from 'react'
import { HighlightedA } from '../components/default'
import { formatTweetIntentUrl } from '../lib/twitter'

const Container = ({ children }: React.PropsWithChildren) => (
  <div className="w-full flex flex-row items-center justify-center mt-10 font-serif dark:text-white">
    {children}
  </div>
)

export default function EndButtons({ tweetTitle, tweetUrl }: {
  tweetTitle: string
  tweetUrl: string
}) {
  const twitterUrl = formatTweetIntentUrl(
    `Post by @noahsark769: ${tweetTitle} ${tweetUrl}`
  )
  return (
    <Container>
      <HighlightedA href={twitterUrl} target="_blank" className="pr-8">
        Tweet This
      </HighlightedA>
      <HighlightedA href="https://noahgilmore.substack.com/" target="_blank">
        Get New Posts Via Email
      </HighlightedA>
    </Container>
  )
}
