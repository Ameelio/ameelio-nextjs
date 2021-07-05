import React from "react";
import NextImage, {ImageProps} from "next/image";
import "./Image.module.css";

interface Props {
  src: StaticImageData;
  alt: string;
}

const Image = ({src, alt}: Props) => {
  return (
    // <div className="image-container h-96">
      <NextImage src={src} alt={alt} layout="responsive" className="image" />
    // </div>
  );
};

export default Image;
