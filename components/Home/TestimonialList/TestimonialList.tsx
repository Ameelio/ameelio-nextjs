import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import Review from "components/Review";
import { TestimonialItem } from "types";
import { Typography } from "antd";
import AppStoreButtonDuo from "components/Button/AppStoreButtonDuo";

interface Props {}

const TESTIMONIALS: TestimonialItem[] = [
  {
    imageSrc:
      "https://play-lh.googleusercontent.com/a/AATXAJwMfrduA5De_a3JmdOaItOc9Qtzcs5D3QVrjCeP=w96-h96-n-rw-mo",
    author: "Jahu J",
    quote:
      "This is the BESSSSST app ever they are very timely and these cards have truly blessed my loved one and has kept us connected through this hard separation. Thank you Ammelio staff for being passionate and caring about families staying connected!!! God bless you all!",
  },
  {
    imageSrc:
      "https://play-lh.googleusercontent.com/a-/AOh14GjnEDB_caQbqZSZQCg6PmPCQurdgOM5uVk_pZap-A=w96-h96-n-rw",
    author: "Meg strietelmeier",
    quote:
      "I Absolutely Love This App And Just Really appreciate it Really . Free photo postcards for your love ones on the inside This App Should get all the credit you are amazing and Thank You. Being that I' just had to spend some time in there the joy and smiles that I witnessed were everything to all of us So thank you again .",
  },
  {
    imageSrc:
      "https://play-lh.googleusercontent.com/a/AATXAJw2faeLsZxf9qDLEtCqsSspTjrI2SgSTEXtPy5g=w96-h96-n-rw-mo",
    author: "John Smith",
    quote:
      "Very awesome of someone to think of this I'm able to let my loved one know that I'm thinking of them even when times are tight at home thank you all very much more people ought to think like this company has they're already locked up no need to punish them more by not being able to talk to them thank you Ameelio edited after reading other reviews I have no issues with any error codes has worked flawlessly for me I've sent two picture postcards a week for 2 months and have had no negative results",
  },
];

const TestimonialList = (props: Props) => {
  return (
    <PaddedLayout>
      <Typography.Title level={3} className="text-center">Newest Reviews</Typography.Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((testimonial) => (
          <Review {...testimonial} key={testimonial.author} />
        ))}
      </div>
      <Typography.Title level={4} className="text-center my-8">See all reviews</Typography.Title>
      <AppStoreButtonDuo className="self-center" />
    </PaddedLayout>
  );
};

export default TestimonialList;
