import React from "react";
import NextImage, {ImageProps} from "next/image";
import "./Image.module.css";

interface Props {
  src: StaticImageData;
  alt: string;
}

const Image = ({src, alt}: Props) => {
  return (
    <div className="image-container">
      <NextImage src={src} alt={alt} layout="fill" className="image" />
    </div>
  );
};

export default Image;
