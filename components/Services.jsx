/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { BiCodeBlock } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import servicesData from "../components/Data/servicesData";
import Transition from "../components/Transition";

const Services = () => {
  const [slider, setSlider] = useState("Blockchain Development");
  const [data, setData] = useState();

  useEffect(() => {
    if (slider === "Blockchain Development") {
      const sliderData = servicesData.filter(
        (item) => item.category === slider
      );

      setData(sliderData);
    }

    if (slider === "Web Development") {
      const sliderData = servicesData.filter(
        (item) => item.category === slider
      );

      setData(sliderData);
    }
    if (slider === "UI UX Design") {
      const sliderData = servicesData.filter(
        (item) => item.category === slider
      );

      setData(sliderData);
    }
    if (slider === "Mobile Application") {
      const sliderData = servicesData.filter(
        (item) => item.category === slider
      );

      setData(sliderData);
    }
  }, [slider]);
  console.log(data);

  return (
    <section
      id="services"
      className="py-16 pb-24 bg-gradient-to-r from-[#aa31c8] to-[#0E9AC5] w-full h-full flex flex-col justify-center  md:services-img "
    >
      <Transition>
        <h4 className="text-white text-center mx-2 mb-4">OUR SERVICES</h4>
        <h2 className="text-white md:text-5xl text-center text-3xl mx-2 font-bold mb-14">
          SEE WHAT WE CAN DO FOR YOU
        </h2>
        <div
          className="flex justify-around px-16 flex-wrap 
    max-md:gap-y-8 max-md:px-[2rem] max-md:justify-between"
        >
          <div
            className="flex flex-col justify-center  items-center gap-y-4  cursor-pointer"
            // onClick={() => window.location.replace("/webdevelop")}
          >
            <BiCodeBlock className="text-white text-[50px] max-md:text-[50px]" />
            <div className="text-white text-center font-semibold text-[22px] max-md:text-[18px]">
              SaaS <br /> Development
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-y-4  cursor-pointer "
            // onClick={() => window.location.replace("/Blockchain")}
          >
            <BsCurrencyBitcoin className="text-white text-[50px] max-md:text-[50px]" />
            <div className="text-white text-center font-semibold text-[22px] max-md:text-[18px]">
              Blockchain <br /> Services
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4  cursor-pointer">
            <CiMobile4 className="text-white text-[50px] max-md:text-[50px]" />

            <h4 className="text-white text-center font-semibold text-[22px] max-md:text-[18px]">
              App <br /> Development
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4  cursor-pointer">
            <HiOutlineShoppingBag className="text-white text-[50px] max-md:text-[50px]" />
            <div className="text-white text-center font-semibold text-[22px] max-md:text-[18px]">
              E-commerce <br /> Solutions
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4  cursor-pointer">
            <FaFigma className="text-white text-[50px] max-md:text-[50px]" />
            <div className="text-white text-center font-semibold text-[22px] max-md:text-[18px]">
              UI / UX <br /> Design
            </div>
          </div>
        </div>
      </Transition>
    </section>
  );
};

export default Services;
