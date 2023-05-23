import { Navigation, Autoplay, EffectCoverflow, Pagination, Scrollbar, A11y } from 'swiper';
import rightImg from "../public/images/rightImg.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {

  return (
    <section className='my-20 w-full px-20'>
     <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <div className='w-full flex justify-center items-center'>

      <SwiperSlide>
        <div  className='flex justify-center items-center h-screen w-full rounded-xl bg-center bg-[#010220] bg-cover custom-img'>
        <h1 className='text-white text-[78px]'>Hello</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div  className='flex justify-center items-center h-screen w-full rounded-xl bg-center bg-[#010220] bg-cover custom-img'>
        <h1 className='text-white text-[78px]'>Hello</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div  className='flex justify-center items-center h-screen w-full rounded-xl bg-center bg-[#010220] bg-cover custom-img'>
        <h1 className='text-white text-[78px]'>Hello</h1>
        </div>
      </SwiperSlide>
      </div>
    </Swiper>
    </section>
  );
};

export default Slider
