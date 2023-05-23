import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <section
      id="services"
      className="py-40 pb-24 bg-[#e9f1fc] w-full h-screen max-lg:h-[70vh] flex flex-col justify-center  md:services-img "
    >
      <Fade bottom>
        <div className="flex flex-col text-[62px] max-lg:text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5] text-center">
          <div className="mb-[-25px] max-lg:mb-0">
            Your Software Development{" "}
          </div>
          <div className="text-[62px] max-lg:text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5] text-center">
            Outsourcing Partner
          </div>
        </div>

        <div className="flex justify-around text-center py-5 text-xl font-bold opacity-100 max-lg:text-[16px]  mb-4 text-[#0D1296] px-16">
          Accelerate your digital transformation, scale <br />
          development efforts flexibly and efficiently
        </div>

        <div className="flex justify-around text-center">
          <Link href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03">
            <button className="px-8 py-2  w-[145px] border-none text-lg font-bold	bg-[#0d1296] text-white">
              Lets Talk
            </button>
          </Link>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
