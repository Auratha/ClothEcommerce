import Image from "next/image";

const BrowseByCategory = () => {
  return (
    <div className="w-[95%] md:w-3/4 lg:w-1/2 px-4 pt-6 py-4 mx-auto bg-gray-200 rounded-3xl">
      <h1 className="mb-6 text-4xl text-center font-bold">
        Browse By Dress Style
      </h1>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <Image
            key={i}
            src={`/assets/browse/browse${i + 1}.png`}
            alt={`category${i + 1}`}
            width={100}
            height={100}
            unoptimized
            className="w-full mb-6 hover:scale-105 duration-75 ease-in cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
