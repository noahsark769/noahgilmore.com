import Image from 'next/image'
import Link from 'next/link'
import corgi from '../../public/corgi.jpg'

const A = (props) => {
  return (
    <Link href={props.href}>
      <a className="text-[#1a3f4b] underline transition-all hover:text-[#47656e] dark:text-[#5a8b9b] dark:hover:text-[#7aa5b3]">
        {props.children}
      </a>
    </Link>
  )
}

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-12">
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
          I'm Noah, a software developer based in the San Francisco Bay Area. I
          focus mainly on iOS, Apple platform development, and full stack web
          development.
        </p>
      </div>
      <div>
        <ul className="p-0 md:p-8">
          <li className="pb-6">
            <span role="img" aria-label="Computer">
              💻
            </span>{' '}
            I co-founded{' '}
            <A className="underline" href="https://replo.app">
              Replo
            </A>
            , a no-code platform for e-commmerce
          </li>
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
            <span role="img" aria-label="Phone">
              📱
            </span>{' '}
            I wrote an app which lets you create transparent app icons called{' '}
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
            <A className="underline" href="https://x.com/noahsark769">
              Twitter / 𝕏
            </A>
          </li>
        </ul>
      </div>
    </div>
  )
}
