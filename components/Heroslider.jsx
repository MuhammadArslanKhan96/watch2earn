import { Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';


const Heroslider = () => {

  return (
    <section className='my-20  px-20'>
     <Swiper
        spaceBetween={5}
        slidesPerView={4}
        centeredSlides={false}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        modules={[ Autoplay]}
        className="mySwiper"
      >
      <div className=' flex  '>

      <SwiperSlide>
                        <Image src="/images/graphicslide.svg" width={200} height={200} alt='fund'/>
      </SwiperSlide>
      <SwiperSlide>
                        <Image src="/images/mobile-app-development.svg" width={200} height={200} alt='fund'/>
      </SwiperSlide>
      <SwiperSlide>
                        <Image src="/images/shop.png" width={200} height={200} alt='fund'/>
      </SwiperSlide>
      </div>
    </Swiper>
    </section>
  );
};

export default Heroslider
