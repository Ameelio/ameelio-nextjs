import React from "react";
import { TTestimonialItem } from "types";
import { Rate, Typography } from "antd";
import BasicCard from "components/Cards/BasicCard";
import Image from "next/image";
import Paragraph from "antd/lib/skeleton/Paragraph";
interface Props extends TTestimonialItem {}

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

        <Typography.Paragraph className="mt-4" ellipsis={{ rows: 3 }}>
          {quote}
        </Typography.Paragraph>
      </div>
    </BasicCard>
  );
};

export default Review;
