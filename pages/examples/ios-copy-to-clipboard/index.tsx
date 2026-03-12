import React, { useEffect } from 'react'
import ReactGA from 'react-ga'

function iosCopyToClipboard(el: HTMLInputElement) {
  var oldContentEditable = el.contentEditable,
    oldReadOnly = el.readOnly,
    range = document.createRange()

  el.contentEditable = "true"
  el.readOnly = false
  range.selectNodeContents(el)

  var s = window.getSelection()
  s?.removeAllRanges()
  s?.addRange(range)

  el.setSelectionRange(0, 999999) // A big number, to cover anything that could be inside the element.

  el.contentEditable = oldContentEditable
  el.readOnly = oldReadOnly

  return document.execCommand('copy')
}

const Container = ({ children }: any) => (
  <div className="mx-auto h-screen w-[960px]">{children}</div>
)

function TrackingLink({ href, data, children }: any) {
  const handleOnClick = () => {
    let element = document.createElement('input')
    let linkData = {
      timestamp: Date.now(),
      ...data,
    }
    let json = JSON.stringify(linkData)
    let encoded = btoa(json)
    let toAppend
    if (href.includes('?')) {
      toAppend = '&ed=' + encoded
    } else {
      toAppend = '?ed=' + encoded
    }
    element.value = href + toAppend
    element.style.cssText = 'position: absolute; opacity: 0.0'
    document.body.appendChild(element)
    iosCopyToClipboard(element)
  }

  return (
    <a href={href} onClick={handleOnClick}>
      {children}
    </a>
  )
}

export default function IndexPage() {
  useEffect(() => {
    ReactGA.initialize('UA-35325391-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <Container>
      <TrackingLink
        data={{ referrer: 'pasteboard-blog-post' }}
        href="https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"
      >
        This is the link
      </TrackingLink>
    </Container>
  )
}
