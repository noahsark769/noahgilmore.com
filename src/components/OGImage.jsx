import React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/siteMetadata";

const ImageHelmet = props => {
  const { siteUrl } = useSiteMetadata();
  return (
    <Helmet>
      <meta property="og:image" content={siteUrl + props.fullImagePath} />
      <meta name="twitter:image" content={siteUrl + props.fullImagePath} />
    </Helmet>
  );
};

export const OGImage = props => {
  const publicUrl = props.filename.startsWith("/")
    ? props.filename
    : `/${props.filename}`;
  return <ImageHelmet fullImagePath={publicUrl} />;
};
