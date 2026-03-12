import Head from 'next/head'
import React from 'react'
import { useSiteMetadata } from '../hooks/siteMetadata'

const ImageHead = (props: any) => {
  const { siteUrl } = useSiteMetadata()
  return (
    <Head>
      <meta property="og:image" content={siteUrl + props.fullImagePath} />
      <meta name="twitter:image" content={siteUrl + props.fullImagePath} />
    </Head>
  )
}

export const OGImage = (props: any) => {
  const publicUrl = props.filename.startsWith('/')
    ? props.filename
    : `/${props.filename}`
  return <ImageHead fullImagePath={publicUrl} />
}
