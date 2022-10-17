import React from "react";
import Image from "next/image";

export const ImageProvider = props => {
  return (
    <Image
      alt={props.alt}
      src={
        props.filename.startsWith("/") ? props.filename : `/${props.filename}`
      }
      {...props}
    />
  );
};

const CustomImage = props => (
  <ImageProvider
    {...props}
    noChildImageContent={node => {
      return (
        <img style={{ width: "100%" }} alt={props.alt} src={node.publicURL} />
      );
    }}
    childImagesContent={(node, imageSizes) => {
      return <Img alt={props.alt} sizes={imageSizes} />;
    }}
  />
);
export default CustomImage;
