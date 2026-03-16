import type { Metadata } from "next"
import AboutMe from "../src/components/AboutMe"
import Nav from "../src/components/Nav"

export const metadata: Metadata = {
  title: "Noah Gilmore - iOS & Web Developer Blog",
  description:
    "Noah Gilmore's personal website. Software development (web, iOS).",
  alternates: {
    canonical: "https://noahgilmore.com",
  },
  openGraph: {
    url: "https://noahgilmore.com",
    title: "Noah Gilmore - iOS & Web Developer Blog",
    description:
      "Noah Gilmore's personal website. Software development (web, iOS).",
  },
  twitter: {
    card: "summary",
    creator: "@noahsark769",
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noah Gilmore",
  url: "https://noahgilmore.com",
  jobTitle: "Software Developer",
  description:
    "Software developer based in the San Francisco Bay Area, focusing on full stack web and iOS development.",
  sameAs: [
    "https://x.com/noahsark769",
    "https://github.com/noahsark769",
  ],
}

export default function HomePage() {
  return (
    <div
      className="outerWrapper h-screen dark:text-white"
      style={{ fontFamily: "var(--font-merriweather), times, serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-4xl flex-col p-8 leading-6 md:p-32">
          <AboutMe />
        </div>
      </div>
    </div>
  )
}
