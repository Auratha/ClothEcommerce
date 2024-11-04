import React from "react";
import OneReview from "../OneReview";

const ProductReview = () => {
  return (
    <div className="px-16 mt-10 font-satoshi">
      <div className="flex justify-between items-center">
        <h6 className=" font-bold text-xl">
          All Reviews <span className="text-lg text-gray-400">(300)</span>
        </h6>
        <div className="flex space-x-3 items-center">
          <button className="px-6 py-2 flex items-center bg-[#f0f0f0] rounded-3xl">
            Latest{" "}
            <img src="/assets/icons/arrow_down.svg" className="w-5 ml-2" />
          </button>
          <button className="px-10 py-2 bg-black text-white rounded-3xl">
            Write a Review
          </button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6">
        <OneReview rating={5} />
        <OneReview rating={4} />
        <OneReview rating={3} />
        <OneReview rating={2} />
        <OneReview rating={1} />
        <OneReview rating={5} />
      </div>
      <div className="mt-5 flex justify-center">
        <button className="w-[25%] py-3 my-4 bg-[#f0f0f0] text-black rounded-3xl drop-shadow-xl">
          More Reviews
        </button>
      </div>
    </div>
  );
};

export default ProductReview;
