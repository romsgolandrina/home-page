import React from "react";

const SearchListings = () => {
  return (
    <>
      <div className="relative w-full h-full bg-[url('../src/assets/house-isolated-field.jpg')] bg-cover flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 w-full h-full" />
        <div className="absolute translate transform-1/2 flex flex-col items-center gap-14">
          <div className="w-[1200px] h-[330px] bg-white/30 backdrop-blur-md rounded-lg flex flex-row gap-6 py-10 px-8 ">
            <div className="w-full h-full flex flex-col">
              <h1 className="font-copperplate text-4xl text-white capitalize tracking-wide">
                search listings
              </h1>
              <label className="flex flex-col gap-1 font-montserrat capitalize text-lg text-white mt-6">
                location
                <select className="bg-white h-10 focus:outline-1 text-black outline-1 outline-gray-500 rounded-md"></select>
              </label>
              <div className="flex flex-row justify-between mt-6 w-full gap-4">
                <label className="flex flex-col gap-1 font-montserrat capitalize text-lg text-white w-full">
                  Bedrooms
                  <select className="bg-white h-10 focus:outline-1 text-gray-400 outline-1 outline-gray-500 w-full px-2 text-sm rounded-md">
                    <option value="" disabled selected>
                      Any Number
                    </option>
                  </select>
                </label>
                <label className="flex flex-col gap-1 font-montserrat capitalize text-lg text-white w-full">
                  Baths
                  <select className="bg-white h-10 focus:outline-1 text-gray-400 outline-1 outline-gray-500 w-full px-2 text-sm rounded-md">
                    <option value="" disabled selected>
                      Any Number
                    </option>
                  </select>
                </label>
              </div>
            </div>
            <div className="w-full h-full flex flex-col mt-10">
              <label className="flex flex-col gap-1 font-montserrat capitalize text-lg text-white mt-6">
                type
                <select className="bg-white h-10 focus:outline-1 text-black outline-1 outline-gray-500 rounded-md"></select>
              </label>
              <div className="flex flex-row justify-between mt-6 w-full gap-4">
                <label className="flex flex-col gap-1 font-montserrat capitalize text-lg text-white w-full">
                  Min price
                  <input
                    type="text"
                    className="bg-white h-10 focus:outline-1 text-black outline-1 outline-gray-500 w-full px-2 rounded-md"
                  />
                </label>
                <label className="flex flex-col gap-1 font-montserrat capitalize text-lg text-white w-full">
                  Max price
                  <input
                    type="text"
                    className="bg-white h-10 focus:outline-1 text-black outline-1 outline-gray-500 w-full px-2 rounded-md"
                  />
                </label>
              </div>
            </div>
            <div className="w-full h-full flex flex-col mt-10">
              <label className="flex flex-col gap-1 font-montserrat capitalize text-lg text-white w-full mt-6">
                Bedrooms
                <select className="bg-white h-10 focus:outline-1 text-black outline-1 outline-gray-500 w-full rounded-md"></select>
              </label>
              <button className="w-full h-[41px] bg-[#161616] rounded-xl font-montserrat uppercase mt-[55px] font-semibold text-white">
                search now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchListings;
