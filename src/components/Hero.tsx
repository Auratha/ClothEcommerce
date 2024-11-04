import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="md:flex lg:flex md:items-center">
        <div className="w-full md:w-3/5 lg:w-3/5 lg:px-20 px-6 py-5 lg:py-8">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Clothes That Matches Your Style
          </h2>
          <p className="font-satoshi text-gray-500 sm:text-xl md:text-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-full sm:w-[30%] py-3 my-4 bg-black text-white font-satoshi rounded-3xl">
            Shop Now
          </button>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-5 font-satoshi">
            <div className="text-center">
              <p className="font-bold text-2xl sm:text-3xl md:text-2xl">200+</p>
              <p className="text-gray-500 sm:text-lg md:text-md">
                International Brands
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl sm:text-3xl md:text-2xl ">
                2000+
              </p>
              <p className="text-gray-500 sm:text-lg md:text-md">
                High-Quality Products
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1 text-center">
              <p className="font-bold text-2xl sm:text-3xl md:text-2xl">
                30000+
              </p>
              <p className="text-gray-500 sm:text-lg md:text-md">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 lg:w-2/5 lg:mt-6">
          <Image
            src="/assets/img/twohuman.png"
            alt="twohuman"
            width={100}
            height={100}
            unoptimized
            className="w-full h-auto md:h-[500px] object-contain md:rounded-[50%]"
          />
        </div>
      </div>
      <div className="px-4 py-6 md:mt-4 bg-black w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
        <Image
          src="/assets/brand/brand1.png"
          alt="brand"
          width={200}
          height={10}
          unoptimized
        />
        <Image
          src="/assets/brand/brand2.png"
          alt="brand"
          width={100}
          height={30}
          unoptimized
        />
        <Image
          src="/assets/brand/brand3.png"
          alt="brand"
          width={150}
          height={40}
          unoptimized
        />
        <Image
          src="/assets/brand/brand4.png"
          alt="brand"
          width={150}
          height={30}
          unoptimized
        />
        <Image
          src="/assets/brand/brand5.png"
          alt="brand"
          width={150}
          height={30}
          unoptimized
        />
      </div>
    </div>
  );
};

export default Hero;
