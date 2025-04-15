import React from "react";
import pic1 from "../assets/modern-living-room-style.jpg";
import pic2 from "../assets/house-isolated-field.jpg";
import pic3 from "../assets/still-life-keys-new-home.jpg";
import * as motion from "motion/react-client";

const Card = () => {
  const cardDetails = [
    {
      image1: pic1,
      title: "Top Residential Sales Last 5 Years",
      info: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard every day to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    },
    {
      image1: pic2,
      title: "Don't Just List it...",
      info: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    },
    {
      image1: pic3,
      title: "Guide to Buyers",
      info: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    },
  ];
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <ul className="flex flex-row gap-14">
          {cardDetails.map((card) => (
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col w-[440px] h-[450px] cursor-default"
              >
                <img
                  src={card.image1}
                  width={500}
                  height={250}
                  alt="image"
                  className="rounded-t-lg h-[45%] object-cover"
                />
                <div className="h-[55%] flex flex-col items-center py-5 px-8 gap-8 bg-white rounded-b-lg text-center">
                  <h1 className="text-xl font-montserrat font-semibold">
                    {card.title}
                  </h1>
                  <p className="text-md font-montserrat">{card.info}</p>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Card;
