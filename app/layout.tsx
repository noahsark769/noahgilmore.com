import "../src/global.css"
import type { Metadata } from "next"
import { GoogleAnalytics } from "../src/components/GoogleAnalytics"

export const metadata: Metadata = {
  title: "Noah Gilmore",
  description:
    "Noah Gilmore's personal website. Software development (web, iOS).",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="dark:bg-darkBackground text-slate-800 dark:text-white"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GoogleAnalytics />
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
        {children}
      </body>
    </html>
  )
}
