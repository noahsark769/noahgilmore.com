import React from 'react'
import Image from '../components/Image'

const Wrap = (props) => <div className="my-5 flex justify-center" {...props} />

const Container = ({ max, children }) => (
  <div className="flex-1" style={max ? { maxWidth: `${max}px` } : {}}>
    {children}
  </div>
)

const Caption = ({ children }) => (
  <div className="mb-8 mt-3 text-center font-['Gentium_Book_Basic',_times,_serif] text-base italic leading-snug text-gray-500">
    {children}
  </div>
)

export default class CaptionedImage extends React.Component {
  render() {
    return (
      <Wrap>
        <Container max={this.props.max}>
          <Image filename={this.props.filename} alt={this.props.alt} />
          <Caption>{this.props.caption}</Caption>
        </Container>
      </Wrap>
    )
  }
}
