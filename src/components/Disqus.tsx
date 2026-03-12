import React, { useEffect } from 'react'

export default function Disqus() {
  useEffect(() => {
    ;(function () {
      var d = document,
        s = d.createElement('script')
      s.src = '//noahgilmore-com.disqus.com/embed.js'
      s.setAttribute('data-timestamp', String(+new Date()))
      ;(d.head || d.body).appendChild(s)
    })()
  }, [])

  return (
    <div className="mt-10">
      <div id="disqus_thread"></div>
    </div>
  )
}
