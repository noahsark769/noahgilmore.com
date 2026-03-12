declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.jpg' {
  const src: import('next/image').StaticImageData
  export default src
}

declare module '*.png' {
  const src: import('next/image').StaticImageData
  export default src
}
