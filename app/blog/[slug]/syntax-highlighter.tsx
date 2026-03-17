"use client"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  vscDarkPlus,
  duotoneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism"
import useIsDarkMode from "../../../src/hooks/useIsDarkMode"

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
