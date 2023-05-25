import React from "react";

const Response = () => {
  return (
    <div
      className="text-[12px] w-[280px] flex-col  rounded-[8px] flex justify-center  bg-[#FFFFFF] 
    py-[20px] px-[40px] "
    >
      <div className="">
        <div className="text-[16px] font-bold pb-[10px]">Latest response</div>
        <div className="text-[16px]  pb-[10px]">
          It&apos;s a great article Bro!Super help Full
        </div>
        <div className="text-[16px]  pb-[10px]">Video title</div>
      </div>
      <hr className="my-[20px] h-0.5 border-t-0 bg-[#d9d9d9] opacity-100 dark:opacity-50" />

      <div>
        <div className="text-[16px]  pb-[10px]">
          It&apos;s a great article Bro!
        </div>
        <div className="text-[16px]  pb-[10px]">Video title</div>
      </div>
      <div className="text-[16px] px-[10px] pt-[20px] font-bold text-[#2e61fb]">
        View All
      </div>
    </div>
  );
};

export default Response;
