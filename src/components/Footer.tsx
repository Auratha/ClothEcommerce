import NewLetter from "./NewLetter";
import Image from "next/image";

type DataTitle = string[][];

const dataTitle: DataTitle = [
  ["COMPANY", "About", "Features", "Works", "Career"],
  [
    "HELP",
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ],
  ["FAQ", "Account", "Manage Deliveries", "Orders", "Payment"],
  [
    "RESOURCES",
    "Free eBook",
    "Development Tutorial",
    "How to Blog",
    "Youtube Playlist",
  ],
];

const Footer = () => {
  return (
    <div>
      <NewLetter />
      <div className="p-6 font-inter">
        <div className="lg:flex lg:justify-evenly lg:items-center">
          <div className="lg:w-[40%]">
            <h1 className="text-4xl font-bold">SHOP.CO</h1>
            <p className="my-2 font-satoshi text-lg">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-6">
              <Image
                src="/assets/icons/twitter.png"
                alt="twitter"
                width={40}
                height={20}
                unoptimized
              />
              <Image
                src="/assets/icons/facebook.png"
                alt="facebook"
                width={40}
                height={10}
                unoptimized
              />
              <Image
                src="/assets/icons/insta.png"
                alt="instagram"
                width={40}
                height={20}
                unoptimized
              />
            </div>
          </div>
          <div className="mt-6 font-satoshi grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dataTitle.map((item, index) => {
              return (
                <div className="space-y-2" key={index}>
                  <h6 className="font-bold font-inter tracking-[4px]">
                    {item[0]}
                  </h6>
                  <p className="cursor-pointer">{item[1]}</p>
                  <p className="cursor-pointer">{item[2]}</p>
                  <p className="cursor-pointer">{item[3]}</p>
                  <p className="cursor-pointer">{item[4]}</p>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="my-4 border-t-[1px] border-gray-400" />
        <p className="font-satoshi text-center">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <Image
          src="/assets/img/payment.png"
          alt="payment"
          width={100}
          height={10}
          quality={100}
          unoptimized
          className=" w-2/4 sm:w-1/4 mx-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
