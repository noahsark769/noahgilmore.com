import React from 'react'

export default function MarkdownContent({ children }: React.PropsWithChildren) {
  return (
    <div className="prose dark:prose-dark max-w-none">
      {children}
    </div>
  )
}
