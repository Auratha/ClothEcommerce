import React from "react";
import Image from "next/image";
import OneReview from "./OneReview";

const HappyReview = () => {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">OUR HAPPY CUSTOMERS</h1>
        <div className="flex space-x-3">
          <Image
            src="/assets/icons/arrow-left.png"
            alt="leftArrow"
            width={40}
            height={20}
            className="w-5 cursor-pointer"
          />
          <Image
            src="/assets/icons/arrow-right.png"
            alt="rightArrow"
            width={40}
            height={20}
            className="w-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="my-10 flex flex-nowrap gap-5 overflow-x-auto">
        <OneReview rating={4} />
        <OneReview rating={3} />
        <OneReview rating={5} />
        <OneReview rating={2} />
      </div>
    </div>
  );
};

export default HappyReview;
