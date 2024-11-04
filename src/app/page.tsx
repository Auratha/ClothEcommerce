import SignUpToGetBonus from "@/components/SignUpToGetBonus";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowProduct from "@/components/ShowProduct";
import HappyReview from "@/components/HappyReview";
import BrowseByCategory from "@/components/BrowseByCategory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-inter">
      <Hero />
      <ShowProduct shopname="New Arrival" />
      <hr className="my-6 w-[90%] mx-auto border-t-[1px] border-gray-400" />
      <ShowProduct shopname="Top Selling" />
      <HappyReview />
      <BrowseByCategory />
    </div>
  );
}
