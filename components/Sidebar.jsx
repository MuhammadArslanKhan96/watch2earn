import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className=" bg-[#0b2a5d] sticky overflow-y-auto bottom-0">
      <div className="flex flex-col px-[40px] py-[20px] gap-y-24">
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-center">
            <div className="rounded-full   p-2 flex  items-center bg-gradient-to-r from-[#fff200]  to-[#5100ff]">
              <Image
                src="/images/avt4.jpg"
                width={100}
                height={100}
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col text-center">
            <p className="text-[22px] text-white font-bold">Name</p>
            <p className="text-[22px] text-white font-bold">SurName</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-7 items-center pb-[40px]">
          <Link
            href="/Userprofile"
            className="text-[16px] text-white cursor-pointer"
          >
            USER PROFILE
          </Link>
          <div className="h-[1px] w-full text-transparent bg-blue-400 rounded-full">
            m
          </div>
          <Link
            href="/Userdashboard"
            className="text-[16px] text-white rounded-full py-2 cursor-pointer px-8 bg-gradient-to-r from-[#fff200] via-[#ff5100] to-[#5100ff] "
          >
            DASHBOARD
          </Link>
          <div className="h-[1px] w-full text-transparent bg-blue-400 rounded-full">
            m
          </div>
          <Link
            href="/Analytics"
            className="text-[16px] text-white cursor-pointer"
          >
            Analytics
          </Link>
          <div className="h-[1px] w-full text-transparent bg-blue-400 rounded-full">
            m
          </div>
          <Link
            href="/Earning"
            className="text-[16px] text-white cursor-pointer"
          >
            Earning
          </Link>
          <div className="h-[1px] w-full text-transparent bg-blue-400 rounded-full">
            m
          </div>
          <Link
            href="/Videos"
            className="text-[16px] text-white cursor-pointer"
          >
            Videos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
