import React from 'react';
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Image from "../components/Image";
import ReactGA from 'react-ga';

class IndexPage extends React.Component {
    render() {
        return <div className="outerWrapper h-screen flex flex-col dark-mode:bg-gray-800 dark-mode:text-white"
            style={{fontFamily: "'Merriweather', times, serif"}}>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,300&display=swap" rel="stylesheet" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content="@noahsark769" />
                <meta property="og:url" content={`https://noahgilmore.com`} />
                <meta property="og:title" content="Noah Gilmore" />
                <meta property="og:description" content="Noah Gilmore's personal website. Software development (web, iOS)." />
                <meta name="Description" content="Noah Gilmore's personal website. Software development (web, iOS)." />
            </Helmet>
            <div className="innerWrapper p-16 md:p-32 flex flex-row justify-center">
                <div className="max-w-4xl flex flex-col leading-6">
                    <div className="flex flex-row items-center mb-12">
                        <div className="w-32 md:w-48 max-w-none rounded-full overflow-hidden mr-8">
                            <Image filename="corgi.jpg" alt="Picture of me with a corgi" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="uppercase text-3xl font-bold mb-4 leading-8" style={{fontFamily: "'Roboto', sans-serif"}}>Noah Gilmore</h1>
                            <p className="hidden md:block">Hello! I'm Noah, a software developer based in the San Francisco bay area. I focus mainly on iOS, Apple platform development, and full stack web development.</p>
                        </div>
                    </div>
                    <p className="block md:hidden mb-12">Hello! I'm Noah, a software developer based in the San Francisco bay area. I focus mainly on iOS, Apple platform development, and full stack web development.</p>
                    <div>
                        <ul className="p-0 md:p-8">
                            <li className="pb-6">✍️ You can read technical posts on <a className="dark-mode:text-teal-400 underline text-teal-700" href="/blog">my blog</a></li>
                            <li className="pb-6">💻 I'm writing a macOS editor for Atlassian Confluence which you can learn more about <a className="dark-mode:text-teal-400 underline text-blue-700" href="https://getfluency.io">here</a></li>
                            <li className="pb-6">🧩 I made a puzzle game for iPhone and iPad called <a className="dark-mode:text-teal-400 underline text-indigo-700" href="https://apps.apple.com/us/app/trestle-the-new-sudoku/id1300230302">Trestle</a></li>
                            <li className="pb-6">🎨 I wrote a CoreImage filter utility app for iOS developers called <a className="dark-mode:text-teal-400 underline text-pink-700" href="https://apps.apple.com/us/app/cifilter-io/id1457458557">CIFilter.io</a></li>
                            <li>👋 Please feel free to reach out on <a className="dark-mode:text-teal-400 underline text-red-700" href="https://twitter.com/noahsark769">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        ReactGA.initialize('UA-35325391-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
}

export default IndexPage;
