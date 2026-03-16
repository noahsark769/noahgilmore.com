import React from 'react'
import Image from '../components/Image'

const Wrap = ({ children, ...props }: React.ComponentProps<'div'>) => <div className="my-5 flex justify-center" {...props}>{children}</div>

const Container = ({ max, children }: React.PropsWithChildren<{ max?: number }>) => (
  <div className="flex-1" style={max ? { maxWidth: `${max}px` } : {}}>
    {children}
  </div>
)

const Caption = ({ children }: React.PropsWithChildren) => (
  <div className="mb-8 mt-3 text-center font-['Gentium_Book_Basic',times,serif] text-base italic leading-snug text-gray-500">
    {children}
  </div>
)

export default function CaptionedImage({ max, filename, alt, caption }: {
  max?: number
  filename: string
  alt: string
  caption: string
}) {
  return (
    <Wrap>
      <Container max={max}>
        <Image filename={filename} alt={alt} />
        <Caption>{caption}</Caption>
      </Container>
    </Wrap>
  )
}
