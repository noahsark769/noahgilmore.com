import classNames from 'classnames'
import React from 'react'
import { A, HighlightedA } from '../components/default'
import { formatTweetIntentUrl } from '../lib/twitter'

const Container = ({ children }: any) => (
  <div className="w-full flex flex-row items-center justify-center mt-10 font-['Merriweather'] dark:text-white">
    {children}
  </div>
)

const ButtonStyle = ({ children, margin }: any) => (
  <div
    className={classNames(
      'bg-standardBlue hover:bg-standardBlueHighlight',
      'transition-all duration-200 ease-in-out',
      'w-[100px] p-[10px_20px] text-center',
      'flex flex-col items-center justify-center',
      'rounded-sm',
      { 'mr-5': margin }
    )}
  >
    {children}
  </div>
)

const Button = (props: any) => {
  return (
    <A
      href={props.url}
      target={props.newTab ? '_blank' : null}
      aria-label={props.label}
    >
      <ButtonStyle margin={props.margin}>{props.children}</ButtonStyle>
    </A>
  )
}

export default function EndButtons({ tweetTitle, tweetUrl }: any) {
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
