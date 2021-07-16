import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import { TTestimonialItem } from "types";
import Image from "next/image";

interface Props extends TTestimonialItem {
  occupation: string;
}

const Testimonial = ({ imageSrc, quote, author, occupation }: Props) => {
  return (
    <div className="bg-blue-700">
      <PaddedLayout className="bg-blue-700 py-16">
        {/* <div className="grid grid:cols-1 md:grid-cols-2"> */}
          <div className="flex flex-col-reverse md:flex-row gap-y-8">

          <div className="flex items-center space-x-4 flex-col md:flex-row flex-1">
            <div style={{ height: 66, width: 66 }}>
              <Image
                className="rounded-full "
                src={imageSrc}
                alt={`${author} image`}
                height="66"
                width="66"
                layout="responsive"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-white font-bold text-center md:text-left">{author}</span>
              <span className="text-gray-500 text-center md:text-left">{occupation}</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-2 flex-1">
            <span className="text-white text-7xl text-center md:text-left">“</span>
            <p className="text-white text-xl text-center md:text-left">{quote}</p>
          </div>
        </div>
      </PaddedLayout>
    </div>
  );
};

export default Testimonial;
