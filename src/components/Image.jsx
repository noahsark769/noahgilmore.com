import React from "react";

const CustomImage = props => {
  return (
    <div className="w-full">
      <img
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
