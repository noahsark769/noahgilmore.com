import React from 'react'
import Image from '../components/Image'

const Wrap = (props: any) => <div className="my-5 flex justify-center" {...props} />

const Container = ({ max, children }: any) => (
  <div className="flex-1" style={max ? { maxWidth: `${max}px` } : {}}>
    {children}
  </div>
)

const Caption = ({ children }: any) => (
  <div className="mb-8 mt-3 text-center font-['Gentium_Book_Basic',times,serif] text-base italic leading-snug text-gray-500">
    {children}
  </div>
)

export default function CaptionedImage({ max, filename, alt, caption }: any) {
  return (
    <Wrap>
      <Container max={max}>
        <Image filename={filename} alt={alt} />
        <Caption>{caption}</Caption>
      </Container>
    </Wrap>
  )
}
