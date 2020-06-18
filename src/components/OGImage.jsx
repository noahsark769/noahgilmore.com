import React from 'react'
import { ImageProvider } from './Image'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from "../hooks/siteMetadata";

const ImageHelmet = (props) => {
    const { siteUrl } = useSiteMetadata();
    return <Helmet>
        <meta property="og:image" content={siteUrl + props.fullImagePath} />
        <meta name="twitter:image" content={siteUrl + props.fullImagePath} />
    </Helmet>
}

export const OGImage = (props) => {
    return <ImageProvider {...props} noChildImageContent={(node) => {
        return <ImageHelmet fullImagePath={node.publicURL} />
    }} childImagesContent={(node, imageSizes) => {
        return <ImageHelmet fullImagePath={node.publicURL} />
    }}/>
};