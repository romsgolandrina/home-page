import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Founder = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-[60%] h-[600px] flex flex-row justify-between items-center rounded-lg">
        <div className="w-1/2">
          <img
            src="../src/assets/marci-metzger.png"
            width={450}
            height={450}
            alt="avatar"
            className="bg-[#161616] rounded-full"
          />
        </div>
        <div data-aos="fade-up" className="w-1/2 flex flex-col gap-12">
          <h1 className="text-6xl font-copperplate font-semibold">
            Marci Metzger
          </h1>
          <h1 className="text-lg font-montserrat">
            Marci was a REALTOR, then licensed Broker, in Washington State. Now,
            she is enjoying the sunshine, and helping clients in Southern
            Nevada. Having helped buyers and sellers in many markets since 1995,
            she is a wealth of knowledge.
          </h1>
          <h1 className="text-lg font-montserrat underline">206-919-6886</h1>
        </div>
      </div>
    </>
  );
};

export default Founder;
