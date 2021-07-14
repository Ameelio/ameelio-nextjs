import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import { Row, Col } from "antd";
import { TTestimonialItem } from "types";
import Image from "next/image";

interface Props extends TTestimonialItem {
  // imageWidth: number;
  // imageHeight: number;
  occupation: string;
}

const Testimonial = ({
  imageSrc,
  quote,
  author,
  occupation,
}: // imageWidth,
// imageHeight,
Props) => {
  return (
    <div className="bg-blue-700">
      <PaddedLayout className="bg-blue-700 py-16">
        <Row>
          <Col sm={24} md={12}>
            <div className="flex items-center space-x-4 flex-col md:flex-row">
              <div style={{ height: 66, width: 66}}>
                <Image
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
