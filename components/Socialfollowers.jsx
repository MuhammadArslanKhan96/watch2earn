import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { HiOutlineChartPie } from "react-icons/hi";
import { GoCheck } from "react-icons/go";
import { FaInbox } from "react-icons/fa";

const Socialfollowers = () => {
  return (
    <>
      <div className="flex flex-col gap-y-6">
        <div className="p-[24px]  bg-white rounded-lg">
          <div className="flex justify-between gap-x-40">
            <div className="flex flex-col">
              <p className="text-[13px] font-bold text-[#8898AA]">FOLLOWERS</p>
              <p className="text-[20px] text-[#32325D]">2,356</p>
            </div>
            <div className="rounded-full flex justify-center items-center bg-gradient-to-r from-[#fb6340] to-[#fbb140]  h-[50px] w-[50px]">
              <div className="text-white ">
                <HiOutlineChartPie size={20} color="white" fill="white" />
              </div>
            </div>
          </div>
          <div className="flex gap-x-1 pt-[16px]">
            <div className="text-[#2DCE89] text-[14px] font-bold">
              <FiArrowUp size={20} />
            </div>
            <p className="text-[#2DCE89] text-[14px]">3.48%</p>
            <p className="text-[14px] text-[#525f7f] font-medium px-4">
              Since last month
            </p>
          </div>
        </div>
        <div className="p-[24px]  bg-white rounded-lg">
          <div className="flex justify-between gap-x-40">
            <div className="flex flex-col">
              <p className="text-[13px] font-bold text-[#8898AA]">LIKES</p>
              <p className="text-[20px] text-[#32325D]">10,442</p>
            </div>
            <div className="rounded-full flex justify-center items-center bg-gradient-to-r from-[#2dce89] to-[#2dcecc]  h-[50px] w-[50px]">
              <div className="text-white ">
                <GoCheck size={30} color="white" fill="white" />
              </div>
            </div>
          </div>
          <div className="flex gap-x-1 pt-[16px]">
            <div className="text-[#2DCE89] text-[14px] font-bold">
              <FiArrowUp size={20} />
            </div>
            <p className="text-[#2DCE89] text-[14px]">30%</p>
            <p className="text-[14px] text-[#525f7f] font-medium px-4">
              Since last month
            </p>
          </div>
        </div>
        <div className="p-[24px]  bg-white rounded-lg">
          <div className="flex justify-between gap-x-40">
            <div className="flex flex-col">
              <p className="text-[13px] font-bold text-[#8898AA]">MESSAGES</p>
              <p className="text-[20px] text-[#32325D]">140</p>
            </div>
            <div className="rounded-full flex justify-center items-center bg-[#fb6340]  h-[50px] w-[50px]">
              <div className="text-white ">
                <FaInbox size={30} color="white" fill="white" />
              </div>
            </div>
          </div>
          <div className="flex gap-x-1 pt-[16px]">
            <div className="text-[#2DCE89] text-[14px] font-bold">
              <FiArrowUp size={20} />
            </div>
            <p className="text-[#2DCE89] text-[14px]">5.8%</p>
            <p className="text-[14px] text-[#525f7f] font-medium px-4">
              Since last month
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socialfollowers;
