import React from "react";
import { TReviewItem } from "types";
import { Rate, Typography } from "antd";
import BasicCard from "components/Cards/BasicCard";
import Image from "next/image";
interface Props extends TReviewItem {}

const Review = (props: Props) => {
  const { author, quote, imageSrc, date, link } = props;

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
          <span className="text-gray-300 ml-auto self-start">{date}</span>
        </div>

        <Typography.Paragraph className="mt-4" ellipsis={{ rows: 3 }}>
          {quote}
        </Typography.Paragraph>

        <Typography.Link onClick={() => window.open(link, "_blank")}>
          Read review
        </Typography.Link>
      </div>
    </BasicCard>
  );
};

export default Review;
