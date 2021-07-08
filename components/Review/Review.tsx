import React from "react";
import { TestimonialItem } from "types";
import { Rate } from "antd";
import BasicCard from "components/Cards/BasicCard";
import Image from "next/image";
interface Props extends TestimonialItem {}

const Review = ({ author, quote, imageSrc }: Props) => {
  return (
    <BasicCard>
      <div>
        <div className="flex items-center">
          <Image
            src={imageSrc}
            width={48}
            height={48}
            alt={`${author} review`}
          />
          <div className="flex flex-col ml-4">
            <span className="font-bold">{author}</span>
            <Rate value={5} />
          </div>
        </div>

        <p className="mt-4">{quote}</p>
      </div>
    </BasicCard>
  );
};

export default Review;
