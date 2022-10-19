import React from "react";
import Image from "next/image";

const CustomImage = props => {
  return (
    <div className="w-full h-full">
      <Image
        layout="fill"
        // width="500px"
        // height="auto"
        alt={props.alt}
        src={
          props.filename.startsWith("/") ? props.filename : `/${props.filename}`
        }
        {...props}
      />
    </div>
  );
};

export default CustomImage;
