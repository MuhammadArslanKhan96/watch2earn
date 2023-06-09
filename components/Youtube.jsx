import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";
import Image from "next/image";
import You from "./Data/youtubedata";

const Youtube = () => {
  return (
    <section className="my-5 xs:px-10 lg:px-20">
      <div className=" flex  justify-center xs:flex-col lg:flex-row lg:gap-x-10 xs:gap-y-5 ">
        {You.map((item, idx) => (
          <>
            <div className="flex flex-col justify-center xs:py-4  lg:py-2  bg-white  text-[#4C4C4C]   rounded-[5px]">
              <div className="flex justify-center">
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt="fund"
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-center items-center flex-col text-center mt-[24px]  pb-[10px]">
                <div className="xs:text-[14px] lg:text-[20px] text-[#707070] font-bold text-center ">
                  {item.Name}
                </div>
              </div>
              <div className="flex xs:text-[12px] lg:text-[18px] justify-center text-center px-[20px] w-[300px] xs:pb-[20px] lg:pb-[50px]   ">
                {item.Desc}
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Youtube;
