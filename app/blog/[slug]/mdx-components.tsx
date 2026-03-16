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

export const SyntaxHighlightedCode = ({ className, children }: React.ComponentProps<'code'>) => {
  const isDarkMode = useIsDarkMode({ default: true })
  return (
    <SyntaxHighlighter
      codeTagProps={{ className: "vscode-highlight-code" }}
      customStyle={{ padding: 0, overflowX: "scroll" }}
      style={isDarkMode ? vscDarkPlus : duotoneLight}
      language={className?.replace("language-", "")}
    >
      {String(children)}
    </SyntaxHighlighter>
  )
}

export const MdxH1 = ({ children, is: _is, ...props }: React.ComponentProps<'h1'>) => {
  const id = typeof children === "string" ? slugify(children.toLowerCase()) : slugify(String(children))
  return <Header is="h1" id={id} {...props}>{children}</Header>
}

export const MdxH2 = ({ children, is: _is, ...props }: React.ComponentProps<'h2'>) => {
  const id = typeof children === "string" ? slugify(children.toLowerCase()) : slugify(String(children))
  return <Header is="h2" id={id} {...props}>{children}</Header>
}

export const MdxCode = ({ children, ...props }: React.ComponentProps<'code'>) => {
  if (props.className && typeof children === "string") {
    return <SyntaxHighlightedCode {...props}>{children}</SyntaxHighlightedCode>
  }
  return <code {...props} className="before:content-none after:content-none">{children}</code>
}

export const MdxPre = (props: React.ComponentProps<'pre'>) => {
  const childProps = (props.children as React.ReactElement<{ className?: string }>)?.props
  if (childProps?.className?.includes("language-")) {
    return <>{props.children}</>
  }
  return <pre {...props} />
}

export { Tweet, CaptionedImage, FlowGrid, IOS13SystemColorTable, TrestleBlogPostLink }
