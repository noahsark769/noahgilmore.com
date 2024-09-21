import Head from 'next/head'
import React from 'react'
import { useSiteMetadata } from '../hooks/siteMetadata'

const ImageHead = (props) => {
  const { siteUrl } = useSiteMetadata()
  return (
    <Head>
      <meta property="og:image" content={siteUrl + props.fullImagePath} />
      <meta name="twitter:image" content={siteUrl + props.fullImagePath} />
    </Head>
  )
}

export const OGImage = (props) => {
  const publicUrl = props.filename.startsWith('/')
    ? props.filename
    : `/${props.filename}`
  return <ImageHead fullImagePath={publicUrl} />
}
