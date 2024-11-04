"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const goToCart = () => {
    router.push("/cart"); // Navigate to the /cart page
  };

  return (
    <div className="px-6 md:px-0 py-4 flex items-center justify-between md:justify-around">
      <div className="flex space-x-5 items-center">
        <Image
          src="/assets/icons/menu-bar.png"
          alt="menuIcon"
          width={26}
          height={20}
          className="md:hidden"
        ></Image>
        <h1 className="text-xl lg:text-2xl font-bold font-inter">SHOP.CO</h1>
      </div>
      <div className="md:flex items-center lg:space-x-12 md:space-x-4 font-satoshi hidden">
        <p>Shop</p>
        <p>On Sale</p>
        <p>New Arrivals</p>
        <p>Brands</p>
        <div className="relative">
          <Image
            src="/assets/icons/search.png"
            alt="searchIcon"
            width={20}
            height={20}
            className="absolute top-1/2 -translate-y-1/2 left-3"
          />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full md:px-10 lg:px-28 py-1 bg-[#f0f0f0] rounded-3xl outline-none"
          />
        </div>
      </div>
      <div className="flex space-x-5 items-center">
        <Image
          src="/assets/icons/search.png"
          alt="searchIcon"
          width={20}
          height={20}
          className="lg:hidden"
        ></Image>
        <Image
          src="/assets/icons/shopping-cart.png"
          alt="shoppingCartIcon"
          width={20}
          height={20}
          onClick={goToCart}
        ></Image>
        <Image
          src="/assets/icons/profile.png"
          alt="profileIcon"
          width={20}
          height={20}
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
