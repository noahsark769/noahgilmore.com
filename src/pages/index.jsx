import React from "react";
import { Helmet } from "react-helmet";
import Image from "next/image";
import ReactGA from "react-ga";
import { BlogGlobalStyle } from "../components/default";
import Nav from "../components/Nav";
import corgi from "../../public/corgi.jpg";
import Link from "next/link";

const A = props => {
  return (
    <Link href={props.href}>
      <a className="text-[#1a3f4b] hover:text-[#47656e] transition-all underline">
        {props.children}
      </a>
    </Link>
  );
};

const IndexPage = () => {
  React.useEffect(() => {
    ReactGA.initialize("UA-35325391-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div
      className="outerWrapper h-screen dark:text-white"
      style={{ fontFamily: "'Merriweather', times, serif" }}
    >
      <Nav />
      <BlogGlobalStyle />
      <Helmet>
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
      </Helmet>
      <div className="flex flex-row justify-center">
        <div className="max-w-4xl flex flex-col leading-6 p-8 md:p-32">
          <div className="flex flex-row items-center mb-12">
            <div className="w-32 md:w-48 max-w-none rounded-full overflow-hidden mr-8">
              <Image
                src={corgi}
                layout="responsive"
                alt="Picture of me with a corgi"
                className="w-32 md:w-48 max-w-none rounded-full overflow-hidden mr-8"
              />
            </div>
            <div className="flex flex-col">
              <h1
                className="uppercase text-3xl font-bold mb-4 leading-8"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Noah Gilmore
              </h1>
              <p className="hidden md:block">
                I'm Noah, a software developer based in the San Francisco Bay
                Area. I focus mainly on iOS, Apple platform development, and
                full stack web development.
              </p>
            </div>
          </div>
          <p className="block md:hidden mb-12">
            Hello! I'm Noah, a software developer based in the San Francisco
            bay area. I focus mainly on iOS, Apple platform development, and
            full stack web development.
          </p>
          <div>
            <ul className="p-0 md:p-8">
              <li className="pb-6">
                <span role="img" aria-label="Writing">
                  ✍️
                </span>{" "}
                You can read technical posts on{" "}
                <A className="underline" href="/blog">
                  my blog
                </A>
              </li>
              <li className="pb-6">
                <span role="img" aria-label="Computer">
                  💻
                </span>{" "}
                I'm writing a macOS editor for Atlassian Confluence which you
                can learn more about{" "}
                <A className="underline" href="https://getfluency.io">
                  here
                </A>
              </li>
              <li className="pb-6">
                <span role="img" aria-label="Phone">
                  📱
                </span>{" "}
                I wrote an app which lets you create transparent app icons
                called{" "}
                <A className="underline" href="https://transparenticons.app">
                  Transparent App Icons
                </A>
              </li>
              <li className="pb-6">
                <span role="img" aria-label="Puzzle">
                  🧩
                </span>{" "}
                I made a puzzle game for iPhone and iPad called{" "}
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
                </span>{" "}
                I wrote a CoreImage filter utility app for iOS developers
                called{" "}
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
                </span>{" "}
                Please feel free to reach out on{" "}
                <A
                  className="underline"
                  href="https://twitter.com/noahsark769"
                >
                  Twitter
                </A>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
