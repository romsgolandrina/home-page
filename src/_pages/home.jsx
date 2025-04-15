import React, { useEffect, useState } from "react";
import NavBar from "../_components/NavBar";
import pic1 from "../assets/analog-landscape-city-with-buildings.jpg";
import pic2 from "../assets/bottom-view-modern-buildings.jpg";
import pic3 from "../assets/big-city.jpg";
import Founder from "../_components/Founder";
import Card from "../_components/Card";
import SearchListings from "../_components/SearchListings";
import Services from "../_components/Services";

const Home = () => {
  const images = [pic1, pic2, pic3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen pt-4 flex flex-col items-center scroll-smooth">
        <NavBar />
        <div className="relative w-[95%] h-[800px] rounded-lg mt-4">
          {/* Background Image Container */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-400 rounded-lg ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 w-full h-full rounded-lg" />
          {/* Content */}
          <div className="absolute z-20 bottom-32 left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center gap-6">
            <h1 className="font-montserrat text-white font-normal text-2xl uppercase">
              marci metzger - the ridge realty group
            </h1>
            <h1 className="font-copperplate text-white font-semibold text-8xl capitalization">
              Pahrump Realtor
            </h1>
            <button className="w-38 h-14 rounded-4xl bg-white font-montserrat uppercase font-normal text-base cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.6)]">
              Call now
            </button>
          </div>
        </div>
        <div className="w-full h-[650px] flex items-center justify-center">
          <Founder />
        </div>
        <div className="w-full h-[750px] bg-[#161616] flex flex-col items-center pt-16 mt-10">
          <h1 className="text-6xl font-montserrat text-white uppercase font-semibold ">
            get it sold
          </h1>
          <Card />
        </div>
        <div className="h-[500px] w-full">
          <SearchListings />
        </div>
        <div className="w-full h-[1500px]">
          <Services />
        </div>
      </div>
    </>
  );
};

export default Home;
