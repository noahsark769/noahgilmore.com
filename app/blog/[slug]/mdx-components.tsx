"use client"

import slugify from "slugify"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  vscDarkPlus,
  duotoneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism"
import useIsDarkMode from "../../../src/hooks/useIsDarkMode"
import Header from "../../../src/components/Header"
import Tweet from "../../../src/components/Tweet"
import CaptionedImage from "../../../src/components/CaptionedImage"
import FlowGrid from "../../../src/components/FlowGrid"
import IOS13SystemColorTable from "../../../src/components/IOS13SystemColorTable"
import TrestleBlogPostLink from "../../../src/components/DataLink"

export const SyntaxHighlightedCode = (props: React.ComponentProps<'code'>) => {
  const isDarkMode = useIsDarkMode({ default: true })
  return (
    <SyntaxHighlighter
      codeTagProps={{ className: "vscode-highlight-code" }}
      customStyle={{ padding: 0, overflowX: "scroll" }}
      style={isDarkMode ? vscDarkPlus : duotoneLight}
      language={props.className?.replace("language-", "")}
      {...props}
    />
  )
}

export const MdxH1 = (props: React.ComponentProps<'h1'>) => (
  <Header
    is="h1"
    id={slugify(String(props.children))}
    {...{
      ...props,
      ...(typeof props.children === "string"
        ? { id: slugify(props.children.toLowerCase()) }
        : {}),
    }}
  />
)

export const MdxH2 = (props: React.ComponentProps<'h2'>) => (
  <Header
    is="h2"
    id={slugify(String(props.children))}
    {...{
      ...props,
      ...(typeof props.children === "string"
        ? { id: slugify(props.children.toLowerCase()) }
        : {}),
    }}
  />
)

export const MdxCode = (props: React.ComponentProps<'code'>) => {
  if (props.className && typeof props.children === "string") {
    return <SyntaxHighlightedCode {...props} />
  }
  return <code {...props} />
}

export const MdxPre = (props: React.ComponentProps<'pre'>) => {
  const childProps = (props.children as React.ReactElement<{ className?: string }>)?.props
  if (childProps?.className?.includes("language-")) {
    return <>{props.children}</>
  }
  return <pre {...props} />
}

export { Tweet, CaptionedImage, FlowGrid, IOS13SystemColorTable, TrestleBlogPostLink }
