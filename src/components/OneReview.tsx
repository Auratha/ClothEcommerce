import React from "react";
import Image from "next/image";

const OneReview = ({ rating }: { rating: number }) => {
  if (rating % 1 !== 0) {
    rating = Math.floor(rating);
  }

  return (
    <div className="p-6 min-w-[100%] sm:min-w-[50%]  border-[1px] border-gray-200 rounded-3xl">
      <div className="flex items-center space-x-1">
        <p className="font-inter">Sarah M. </p>
        <Image
          src="/assets/icons/green-check.png"
          alt="greenCheck"
          width={20}
          height={20}
        />
      </div>
      <div className="flex">
        {[...Array(rating)].map((_, index) => (
          <Image
            key={index}
            src="/assets/icons/star.png"
            alt="star"
            width={30}
            height={10}
            className="w-5"
          />
        ))}
      </div>
      <p className="font-satoshi">
        "I'm blown away by the quality and style of the clothes I received from
        Shop.co. From casual wear to elegant dresses, every piece I've bought
        has exceeded my expectations.”
      </p>
    </div>
  );
};

export default OneReview;
