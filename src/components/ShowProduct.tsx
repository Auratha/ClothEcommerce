import React from "react";
import Image from "next/image";

const ShowProduct = ({ shopname }: { shopname: string }) => {
  return (
    <div className="p-6">
      <h3 className="text-3xl text-center">{shopname}</h3>
      <div className="mt-6  lg:w-[90%] lg:mx-auto flex flex-nowrap gap-x-10 font-satoshi overflow-x-scroll lg:overflow-x-hidden">
        <div className=" min-w-[16rem] flex-shrink-0">
          <Image
            src="/assets/img/top.png"
            alt="product1"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-3xl"
          />
          <p className="mt-2 font-bold text-2xl">Tshirt with tape</p>
          <div className="flex">
            <Image
              src="/assets/icons/star.png"
              alt="star"
              width={30}
              height={10}
            />
            <p className="ml-2 text-lg">4.5</p>
          </div>
          <p className="mt-1 text-xl font-bold">200$</p>
        </div>
        <div className=" min-w-[16rem] flex-shrink-0">
          <Image
            src="/assets/img/top.png"
            alt="product1"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-3xl"
          />
          <p className="mt-2 font-bold text-2xl">Tshirt with tape</p>
          <div className="flex">
            <Image
              src="/assets/icons/star.png"
              alt="star"
              width={30}
              height={10}
            />
            <p className="ml-2 text-lg">4.5</p>
          </div>
          <p className="mt-1 text-xl font-bold">200$</p>
        </div>
        <div className=" min-w-[16rem] flex-shrink-0">
          <Image
            src="/assets/img/top.png"
            alt="product1"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-3xl"
          />
          <p className="mt-2 font-bold text-2xl">Tshirt with tape</p>
          <div className="flex">
            <Image
              src="/assets/icons/star.png"
              alt="star"
              width={30}
              height={10}
            />
            <p className="ml-2 text-lg">4.5</p>
          </div>
          <p className="mt-1 text-xl font-bold">200$</p>
        </div>
        <div className=" min-w-[16rem] flex-shrink-0">
          <Image
            src="/assets/img/top.png"
            alt="product1"
            layout="responsive"
            width={100}
            height={100}
            className="rounded-3xl"
          />
          <p className="mt-2 font-bold text-2xl">Tshirt with tape</p>
          <div className="flex">
            <Image
              src="/assets/icons/star.png"
              alt="star"
              width={30}
              height={10}
            />
            <p className="ml-2 text-lg">4.5</p>
          </div>
          <p className="mt-1 text-xl font-bold">200$</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="w-[90%] sm:w-[40%] md:w-[30%] lg:w-[20%] py-3 border-2 border-gray-300 rounded-3xl">
          View All
        </button>
      </div>
    </div>
  );
};

export default ShowProduct;
