import React from 'react'

export default function MarkdownContent({ children }: any) {
  return (
    <div className="prose dark:prose-dark max-w-none">
      {children}
    </div>
  )
}
