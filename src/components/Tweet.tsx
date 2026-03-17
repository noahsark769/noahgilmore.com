import { Tweet as ReactTweet } from 'react-tweet'

export default function Tweet({ tweetId }: { tweetId: string }) {
  return (
    <div
      className="w-full flex justify-center"
      style={{
        '--tweet-font-family': 'var(--font-roboto), Helvetica Neue, Helvetica, sans-serif',
        '--tweet-body-font-size': '18px',
      } as React.CSSProperties}
    >
      <div className="w-px md:min-w-[500px] min-w-[90%] mx-auto">
        <ReactTweet id={tweetId} />
      </div>
    </div>
  )
}
