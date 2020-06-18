import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const ImageProvider = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              publicURL
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath === props.filename;
      });

      if (!image) { 
        return null;
      }

      const childImageSharp = image.node.childImageSharp;
      if (!childImageSharp) {
        console.log(`Returning no child image with ${image.node}`);
        return props.noChildImageContent(image.node);
      }
      const imageSizes = image.node.childImageSharp.sizes;
      console.log(`Returning child image with ${image.node}, ${imageSizes}`);
      return props.childImagesContent(image.node, imageSizes);
    }}
  />
)

const Image = (props) => (
  <ImageProvider {...props} noChildImageContent={(node) => {
    return <img style={{width: "100%"}} alt={props.alt} src={node.publicURL} />
  }} childImagesContent={(node, imageSizes) => {
    return <Img
      alt={props.alt}
      sizes={imageSizes}
    />
  }}/>
)
export default Image;
