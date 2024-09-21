import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReactGA from 'react-ga'
import corgi from '../../public/corgi.jpg'
import Nav from '../components/Nav'

const A = (props) => {
  return (
    <Link href={props.href}>
      <a className="text-[#1a3f4b] underline transition-all hover:text-[#47656e] dark:text-[#5a8b9b] dark:hover:text-[#7aa5b3]">
        {props.children}
      </a>
    </Link>
  )
}

const IndexPage = () => {
  React.useEffect(() => {
    ReactGA.initialize('UA-35325391-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div
      className="outerWrapper h-screen dark:text-white"
      style={{ fontFamily: "'Merriweather', times, serif" }}
    >
      <Nav />
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,300&display=swap"
          rel="stylesheet"
        />
        <title>Noah Gilmore</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@noahsark769" />
        <meta property="og:url" content={`https://noahgilmore.com`} />
        <meta property="og:title" content="Noah Gilmore" />
        <meta
          property="og:description"
          content="Noah Gilmore's personal website. Software development (web, iOS)."
        />
        <meta
          name="Description"
          content="Noah Gilmore's personal website. Software development (web, iOS)."
        />
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .twitter-embed > div {
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
          `,
        }}
      />
      <div className="flex flex-row justify-center">
        <div className="flex max-w-4xl flex-col p-8 leading-6 md:p-32 gap-12">
          <div className="grid grid-cols-[128px,1fr] gap-5">
            <div className="w-[128px] md:self-center md:row-span-2">
              <Image
                src={corgi}
                layout="responsive"
                alt="Picture of me with a corgi"
                className="overflow-hidden rounded-full"
              />
            </div>
            <h1
              className="text-3xl font-bold uppercase leading-7 md:leading-8 self-center"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Noah Gilmore
            </h1>
            <p className="mt-2 col-span-2 md:col-span-1">
              I'm Noah, a software developer based in the San Francisco Bay
              Area. I focus mainly on iOS, Apple platform development, and full
              stack web development.
            </p>
          </div>
          <div>
            <ul className="p-0 md:p-8">
              <li className="pb-6">
                <span role="img" aria-label="Writing">
                  ✍️
                </span>{' '}
                You can read technical posts on{' '}
                <A className="underline" href="/blog">
                  my blog
                </A>
              </li>
              <li className="pb-6">
                <span role="img" aria-label="Computer">
                  💻
                </span>{' '}
                I'm writing a macOS editor for Atlassian Confluence which you
                can learn more about{' '}
                <A className="underline" href="https://getfluency.io">
                  here
                </A>
              </li>
              <li className="pb-6">
                <span role="img" aria-label="Phone">
                  📱
                </span>{' '}
                I wrote an app which lets you create transparent app icons
                called{' '}
                <A className="underline" href="https://transparenticons.app">
                  Transparent App Icons
                </A>
              </li>
              <li className="pb-6">
                <span role="img" aria-label="Puzzle">
                  🧩
                </span>{' '}
                I made a puzzle game for iPhone and iPad called{' '}
                <A
                  className="underline"
                  href="https://apps.apple.com/us/app/trestle-the-new-sudoku/id1300230302"
                >
                  Trestle
                </A>
              </li>
              <li className="pb-6">
                <span role="img" aria-label="Art">
                  🎨
                </span>{' '}
                I wrote a CoreImage filter utility app for iOS developers called{' '}
                <A
                  className="underline"
                  href="https://apps.apple.com/us/app/cifilter-io/id1457458557"
                >
                  CIFilter.io
                </A>
              </li>
              <li>
                <span role="img" aria-label="Wave">
                  👋
                </span>{' '}
                Please feel free to reach out on{' '}
                <A className="underline" href="https://twitter.com/noahsark769">
                  Twitter
                </A>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
