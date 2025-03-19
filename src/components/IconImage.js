import React from "react";
import Image from "next/image";

const IconImage = ({ src, alt, className, ImgHeight = 12, ImgWidth = 12 }) => {
  return (
    <Image
      src={src} // This must be an absolute path or an imported image
      alt={alt || "icon"}
      width={ImgWidth}
      height={ImgHeight}
    />
  );
};

export default IconImage;
