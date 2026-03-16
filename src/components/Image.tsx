import React from "react";

const CustomImage = ({ filename, alt, ...props }: { filename: string; alt: string } & Omit<React.ComponentProps<'img'>, 'src' | 'alt'>) => {
  return (
    <div className="w-full">
      <img
        alt={alt}
        src={
          filename.startsWith("/") ? filename : `/${filename}`
        }
        {...props}
      />
    </div>
  );
};

export default CustomImage;
