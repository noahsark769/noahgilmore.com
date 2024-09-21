import Head from 'next/head'
import React from 'react'
import ReactGA from 'react-ga'
import AboutMe from '../components/AboutMe'
import Nav from '../components/Nav'

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
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-4xl flex-col p-8 leading-6 md:p-32">
          <AboutMe />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
