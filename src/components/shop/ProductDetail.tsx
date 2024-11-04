import React from "react";
import Image from "next/image";

const ProductDetail = () => {
  let rating = 4;

  return (
    <div className="px-14 mt-6 font-satoshi">
      <h1 className="text-gray-500">
        Home {">"} Shop {">"} Men {">"} T-shirt
      </h1>
      <div className="mt-6 flex">
        <div className="w-1/2 pr-8 h-[450px] grid grid-cols-3 grid-rows-3 gap-y-4">
          <Image
            src="/assets/img/t-shirt1.png"
            alt="product1"
            width={100}
            height={100}
            unoptimized
            className="w-full h-full row-start-1 object-contain drop-shadow-lg"
          />
          <Image
            src="/assets/img/t-shirt2.png"
            alt="product1"
            width={100}
            height={100}
            unoptimized
            className="w-full h-full row-start-2 object-contain drop-shadow-lg"
          />
          <Image
            src="/assets/img/t-shirt3.png"
            alt="product1"
            width={100}
            height={100}
            unoptimized
            className="w-full h-full row-start-3 object-contain drop-shadow-lg"
          />
          <Image
            src="/assets/img/t-shirt1.png"
            alt="product1"
            width={100}
            height={100}
            unoptimized
            className="col-start-2 col-end-4 row-start-1 row-end-4 col-span-2 row-span-2 w-full h-full drop-shadow-lg"
          />
        </div>
        <div className="w-1/2">
          <h1 className="font-bold font-inter text-4xl uppercase">
            One life graphic tshirt
          </h1>
          <div className="my-1 flex">
            {Array.from({ length: rating }, (_, i) => (
              <Image
                key={i}
                src="/assets/icons/star.png"
                alt="star"
                width={30}
                height={10}
                className="w-5 h-auto object-contain"
              />
            ))}
            <p className="ml-2 text-lg">4/5</p>
          </div>
          <div className="flex items-center space-x-3 ">
            <p className="text-2xl font-bold">$260</p>
            <p className="text-2xl line-through text-gray-400">$300</p>
            <div className="px-2 text-sm text-red-400 bg-red-200 rounded-3xl">
              -40%
            </div>
          </div>
          <p className="mt-3 text-gray-500">
            This is a long text. This is a long text. This is a long text. This
            is a long text. This is a long text. This is a long text.
          </p>

          <p className="mt-5 text-gray-500">Choose Size</p>
          <div className="mt-4 ml-2 flex items-center space-x-4">
            <p className="p-2 px-4 bg-[#f0f0f0] rounded-3xl shadow-xl cursor-pointer">
              Small
            </p>
            <p className="p-2 px-4 bg-[#f0f0f0] rounded-3xl shadow-xl cursor-pointer">
              Medium
            </p>
            <p className="p-2 px-4 bg-[#f0f0f0] rounded-3xl shadow-xl cursor-pointer">
              Large
            </p>
            <p className="p-2 px-4 bg-[#f0f0f0] rounded-3xl shadow-xl cursor-pointer">
              X Large
            </p>
          </div>

          <div className="mt-16 flex items-center space-x-5">
            <div className="w-[20%] py-2 flex justify-center items-center space-x-8 bg-[#f0f0f0] rounded-3xl">
              <p className="text-xl cursor-pointer">-</p>
              <p className="text-xl ">1</p>
              <p className="text-xl cursor-pointer">+</p>
            </div>
            <button className="w-[70%] py-4 bg-black text-white font-bold rounded-3xl">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
