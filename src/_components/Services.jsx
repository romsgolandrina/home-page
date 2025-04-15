import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center py-14 gap-4">
        <h1 className="font-copperplate text-6xl font-semibold capitalize text-black mb-14">
          our services
        </h1>
        <div className="w-[1200px] h-[400px] flex flex-row items-center justify-between gap-2">
          <img
            src="../src/assets/roam-in-color-z3QZ6gjGRt4-unsplash.jpg"
            width={600}
            height={500}
            alt="kitchen"
            className="rounded-lg"
            data-aos="zoom-in"
          />
          <div
            data-aos="fade-left"
            className="flex flex-col items-center px-12 gap-6 font-montserrat text-center"
          >
            <h1 className="text-2xl font-semibold">Real Estate Done Right</h1>
            <p className="text-lg">
              Nervous about your property adventure? Don’t be. Whether you're
              getting ready to buy or sell your residence, looking at investment
              properties, or just curious about the markets, our team ensures
              you get the best experience possible!
            </p>
          </div>
        </div>
        <div className="w-[1200px] h-[400px] flex flex-row items-center justify-between gap-2">
          <div
            data-aos="fade-right"
            className="flex flex-col items-center px-12 gap-6 font-montserrat text-center"
          >
            <h1 className="text-2xl font-semibold">Commercial & Residential</h1>
            <p className="text-lg">
              Large or small, condo or mansion, we can find it and get at the
              price that's right. Fixer-uppers? Luxury? We can help with all of
              it! We live, work, and play in this community. Happy to help you
              find where to put you hard-earned dollars.
            </p>
          </div>
          <img
            src="../src/assets/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg"
            width={600}
            height={500}
            alt="kitchen"
            className="rounded-lg"
            data-aos="zoom-in"
          />
        </div>
        <div className="w-[1200px] h-[400px] flex flex-row items-center justify-between gap-2">
          <img
            src="../src/assets/amina-atar-MA4aW8ZOzLM-unsplash.jpg"
            width={600}
            height={500}
            alt="kitchen"
            className="rounded-lg"
            data-aos="zoom-in"
          />
          <div
            data-aos="fade-left"
            className="flex flex-col items-center px-12 gap-6 font-montserrat text-center"
          >
            <h1 className="text-2xl font-semibold">Rely on Expertise</h1>
            <p className="text-lg">
              If you have questions about affordability, credit, and loan
              options, trust us to connect you with the right people to get the
              answers you need in a timely fashion. We make sure you feel
              confident and educated every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
