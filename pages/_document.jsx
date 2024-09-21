import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      lang="en"
      className="dark:bg-darkBackground text-slate-800 dark:text-white"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
