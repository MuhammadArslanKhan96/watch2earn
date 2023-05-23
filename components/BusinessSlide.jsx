import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BsArrowRight } from "react-icons/bs";

const BusinessSlide = () => {
  return (
    <section className="my-20  px-20">
      <div className=" flex  justify-center gap-x-10  ">
        <div className="items-center border border-athens-gray text-[#000000] hover:scale-125 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px]  py-5">
          <div className="text-[22px] font-bold pb-5 px-5 pt-5">
            Blockchain <br />
            Supplychain
          </div>
          <div className="text-[16px] pb-5 px-5">
            Develop, deploy <br /> and manage supply <br />
            chain solutions with <br /> complete transparency.
          </div>
          <div className="px-5 text-[#a5a4a4f5] text-[20px] hover:text-[#FFFFFF]">
            <BsArrowRight />
          </div>
        </div>
        <div className="items-center border border-athens-gray text-[#000000] hover:scale-125 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px]  py-5">
          <div className="text-[22px] font-bold pb-5 px-5 pt-5">
            Enterprise <br />
            Blockchain
          </div>
          <div className="text-[16px] pb-5 px-5">
            Secure control over <br /> your assets with <br />
            blockchain-optimized <br /> processes and <br />
            transparent operations.
          </div>
          <div className="px-5 text-[#a5a4a4f5] text-[20px] hover:text-[#FFFFFF]">
            <BsArrowRight />
          </div>
        </div>
        <div className="items-center  border border-athens-gray text-[#000000] hover:scale-125 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px]  py-5">
          <div className="text-[22px] font-bold pb-5 px-5 pt-5">
            Smart contract
            <br />
            development
          </div>
          <div className="text-[16px] pb-5 px-5">
            Build secure and <br /> reliable crypto wallets <br />
            compatible with <br /> multiple <br />
            cryptocurrencies.
          </div>
          <div className="px-5 text-[#a5a4a4f5] text-[20px] hover:text-[#FFFFFF]">
            <BsArrowRight />
          </div>
        </div>
        <div className="items-center  border border-athens-gray text-[#000000] hover:scale-125 hover:bg-[#0D1296] hover:text-[#FFFFFF] rounded-[5px]  py-5">
          <div className="text-[22px] font-bold pb-5 px-5 pt-5">
            BLockchain <br />
            Decentralization
          </div>
          <div className="text-[16px] pb-5 px-5">
            Ensure strict security <br /> with a decentralized <br />
            setup laid out by <br /> experts for every <br />
            niche.
          </div>
          <div className="px-5 text-[#a5a4a4f5] text-[20px] hover:text-[#FFFFFF]">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSlide;
