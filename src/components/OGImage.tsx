import Head from 'next/head'
import React from 'react'
import { useSiteMetadata } from '../hooks/siteMetadata'

const ImageHead = ({ fullImagePath }: { fullImagePath: string }) => {
  const { siteUrl } = useSiteMetadata()
  return (
    <Head>
      <meta property="og:image" content={siteUrl + fullImagePath} />
      <meta name="twitter:image" content={siteUrl + fullImagePath} />
    </Head>
  )
}

export const OGImage = ({ filename }: { filename: string }) => {
  const publicUrl = filename.startsWith('/')
    ? filename
    : `/${filename}`
  return <ImageHead fullImagePath={publicUrl} />
}
