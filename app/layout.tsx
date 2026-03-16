import "../src/global.css"
import type { Metadata } from "next"
import { Roboto, Merriweather } from "next/font/google"
import { GoogleAnalytics } from "../src/components/GoogleAnalytics"

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

const merriweather = Merriweather({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Noah Gilmore - iOS & Web Developer Blog",
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
      className={`dark:bg-darkBackground text-slate-800 dark:text-white ${roboto.variable} ${merriweather.variable}`}
    >
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
