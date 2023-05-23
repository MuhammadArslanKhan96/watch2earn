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
import Card from "../components/Data/Viqidcard";

const VidiqSlide = () => {
  return (
    <section className="my-5  px-20">
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        centeredSlides={false}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <div className=" flex  justify-center gap-x-10  ">
          {Card.map((item, idx) => (
            <>
              <SwiperSlide>
                <div className="flex flex-col justify-center px-16 py-8  bg-gradient-to-t from-[#8031c880] to-[#ff439780]  text-[#FFFFFF]   rounded-[15px]">
                  <div className="flex justify-center">
                    <Image
                      src={item.img}
                      width={100}
                      height={100}
                      alt="fund"
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex justify-center items-center flex-col text-center my-[12px]">
                    <div className="text-[19px]">{item.Name}</div>
                    <div className="text-[14px] text-center rounded-full w-[150px] bg-[#ffffff33] mt-2">
                      {item.Designation}
                    </div>
                  </div>
                  <div className="flex justify-between py-2">
                    <div className="text-[25px] font-bold">
                      {item.Subscriber}
                    </div>
                    <div className="text-[25px] font-bold">{item.Views}</div>
                  </div>
                  <div className="flex justify-between gap-x-8 py-2">
                    <div className="text-[19px] text-[#ffffff82] flex items-center ">
                      <IoIosPeople /> Subcribers
                    </div>
                    <div className="text-[19px] text-[#ffffff82] flex items-center ">
                      <AiOutlineEye /> Views
                    </div>
                  </div>
                  <div className="flex text-[18px] justify-center text-center w-[280px] py-8">
                    {item.Desc}
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default VidiqSlide;
