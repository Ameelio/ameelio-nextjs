import React from "react";
import NextImage, { ImageProps } from "next/image";
import "./Image.module.css";
import useDimensions from "react-cool-dimensions";

interface Props {
  src: StaticImageData;
  alt: string;
}

const Image = ({ src, alt }: Props) => {
  const { observe, width } = useDimensions<HTMLDivElement | null>();

  return (
    <div ref={observe}>
      <NextImage
        src={src}
        alt={alt}
        layout="responsive"
        quality={65}
        sizes={width !== undefined ? `${Math.round(width)}px` : "100vw"}
      />
    </div>
  );
};

export default Image;
