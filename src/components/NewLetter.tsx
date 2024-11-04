const NewLetter = () => {
  return (
    <div className="w-[95%] md:flex md:items-center  mt-10 mx-auto p-6 md:px-10 bg-black rounded-3xl">
      <h1 className="md:w-[60%] mb-6 uppercase text-4xl text-white text-center md:text-left font-bold font-inter">
        Stay upto date about our latest offers
      </h1>
      <div className="w-[95%] md:w-[30%] mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          name="email"
          className="font-satoshi w-full p-2 px-10 mb-2 rounded-3xl text-center"
        />
        <button className="bg-white text-black font-satoshi font-bold w-full py-2  rounded-3xl">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};

export default NewLetter;
