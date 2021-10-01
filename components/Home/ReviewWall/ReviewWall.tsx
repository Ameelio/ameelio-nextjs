import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import Review from "components/Review";
import { Typography } from "antd";
import AppStoreButtonDuo from "components/Button/AppStoreButtonDuo";
import { REVIEWS } from "utils/constants";

interface Props {}



const ReviewWall = (props: Props) => {
  return (
    <div className="flex flex-col ml-4 mt-16">
      <Typography.Title level={3} className="text-center z-10">
        Recent Reviews
      </Typography.Title>
      <div
        className="grid grid-rows:3 md:grid-rows:2 gap-4 overflow-x-auto grid-flow-column"
        style={{
          gridTemplateColumns: "repeat(18, 400px)",
        }}
      >
        {REVIEWS.map((testimonial) => (
          <Review {...testimonial} key={testimonial.author} />
        ))}
      </div>
      <Typography.Title level={4} className="text-center my-8">
        See all reviews
      </Typography.Title>
      <AppStoreButtonDuo className="self-center" />
    </div>
  );
};

export default ReviewWall;
