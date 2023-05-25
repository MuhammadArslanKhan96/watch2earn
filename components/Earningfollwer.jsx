import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { FiArrowUp } from "react-icons/fi";

const Earningfollwer = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="p-[24px]  bg-white rounded-lg">
          <div className="flex justify-between gap-x-20">
            <div className="flex flex-col gap-y-4">
              <p className="text-[16px] font-bold text-[#000000]">Follower</p>
              <div className="flex items-center gap-x-2">
                <div className="text-[22px]  text-[#32325D] font-bold my-[8px]">
                  10.897
                </div>
                <div className="flex gap-x-1 bg-[#64fab9] px-[6px] py-1 rounded-full">
                  <div className="text-[#2ca571] text-[14px] font-bold">
                    <FiArrowUp size={20} />
                  </div>
                  <p className="text-[#2ca571] text-[14px]">0.2%</p>
                </div>
              </div>
            </div>
            <div className="text-[14px] font-bold text-[#2e61fb]">
              View Detail
            </div>
          </div>
          <div className="flex gap-x-1 pt-[16px]">
            <p className="text-[15px] font-bold text-[#7b8293]">From 10.672</p>
          </div>
          <hr className="my-[40px] h-0.5 border-t-0 bg-[#d9d9d9] opacity-100 dark:opacity-50" />
          <div className="flex justify-between gap-x-20">
            <div className="flex flex-col gap-y-4">
              <p className="text-[16px] font-bold text-[#000000]">Earnings</p>
              <div className="flex items-center gap-x-2">
                <div className="text-[22px]  text-[#32325D] font-bold my-[8px]">
                  $87.514
                </div>
                <div className="flex gap-x-1 bg-[#fb9191] px-[6px] py-1 rounded-full">
                  <div className="text-[#812525] font-bold text-[14px] ">
                    <BsArrowDownShort size={20} />
                  </div>
                  <p className="text-[#812525] font-bold text-[14px]">0.98%</p>
                </div>
              </div>
            </div>
            <div className="text-[14px] font-bold text-[#2e61fb]">
              View Detail
            </div>
          </div>
          <div className="flex gap-x-1 pt-[16px]">
            <p className="text-[15px] font-bold text-[#7b8293]">From $90.217</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Earningfollwer;
