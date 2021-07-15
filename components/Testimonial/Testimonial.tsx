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
        <div className="grid grid:cols-1 md:grid-cols-2">
          <div className="flex items-center space-x-4 flex-col md:flex-row">
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
              <span className="text-white font-bold">{author}</span>
              <span className="text-gray-500">{occupation}</span>
            </div>
          </div>
          <div className="flex gap-x-2">
            <span className="text-white text-7xl">“</span>
            <p className="text-white text-xl">{quote}</p>
          </div>
        </div>
      </PaddedLayout>
    </div>
  );
};

export default Testimonial;
