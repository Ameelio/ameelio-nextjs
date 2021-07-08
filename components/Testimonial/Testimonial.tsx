import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import { Row, Col } from "antd";
import { TestimonialItem } from "types";
import Image from "next/image";

interface Props extends TestimonialItem {
  imageWidth: number;
  imageHeight: number;
  occupation: string;
}

const Testimonial = ({
  imageSrc,
  quote,
  author,
  occupation,
  imageWidth,
  imageHeight,
}: Props) => {
  console.log(imageWidth);
  console.log(imageHeight);
  return (
    <div className="bg-blue-700">
      <PaddedLayout className="bg-blue-700 py-16">
        <Row>
          <Col sm={24} md={12}>
            <div className="flex md:flex-row flex-col flex-items-center">
              <div className="flex-grow-0">
                <Image
                  width={imageWidth}
                  height={imageHeight}
                  className="rounded-full "
                  src={imageSrc}
                  alt={`${author} image`}
                  layout="responsive"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold">{author}</span>
                <span className="text-gray-500">{occupation}</span>
              </div>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <p className="text-white text-xl">{quote}</p>
          </Col>
        </Row>
      </PaddedLayout>
    </div>
  );
};

export default Testimonial;
