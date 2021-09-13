import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  classname?: string;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const BackgroundImage = ({ src, classname, alt }: Props) => {
  const [width, setWidth] = useState<number>();
  const [height, setheight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
    //   <div className={`absolute z-0 ${classname}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
        />
    //   </div>
    );
  }

  return <div></div>;
};

export default BackgroundImage;
