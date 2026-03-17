"use client"

import slugify from "slugify"
import Header from "../../../src/components/Header"
import { SyntaxHighlightedCode } from "./syntax-highlighter"

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
