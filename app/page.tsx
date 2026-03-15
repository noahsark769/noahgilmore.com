import type { Metadata } from "next"
import AboutMe from "../src/components/AboutMe"
import Nav from "../src/components/Nav"

export const metadata: Metadata = {
  title: "Noah Gilmore",
  description:
    "Noah Gilmore's personal website. Software development (web, iOS).",
  openGraph: {
    url: "https://noahgilmore.com",
    title: "Noah Gilmore",
    description:
      "Noah Gilmore's personal website. Software development (web, iOS).",
  },
  twitter: {
    card: "summary",
    creator: "@noahsark769",
  },
}

export default function HomePage() {
  return (
    <div
      className="outerWrapper h-screen dark:text-white"
      style={{ fontFamily: "'Merriweather', times, serif" }}
    >
      <Nav />
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-4xl flex-col p-8 leading-6 md:p-32">
          <AboutMe />
        </div>
      </div>
    </div>
  )
}
