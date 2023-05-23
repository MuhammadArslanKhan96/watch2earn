import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const PortfolioItem = (props) => {
  const { color, img, liveUrl, keyword, title, heading } = props.item;

  return (
    <div
      className=" p-3 rounded-[10px] mb-5 w-full px-10 py-[80px] max-md:px-[1rem] max-md:py-[1rem] "
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-center px-4 max-md:flex-col-reverse gap-x-2">
        <Fade left>
          <div className="bg-transparent flex flex-col items-center gap-y-5 max-lg:gap-y-2">
            <h6 className="text-black text-3xl font-bold max-lg:text-[22px]">
              {title}
            </h6>
            <h6 className="text-black text-2xl font-bold max-lg:text-[18px]">
              {heading}
            </h6>
            <div className="bg-[#0d1296] w-fit px-6 py-2 border rounded-[5px] text-white text-lg font-bold max-lg:text-[16px]">
              <Link href={liveUrl}>Explore Project</Link>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="bg-transparent rounded-xl animation">
            <Image
              alt="portfolio-img"
              src={img}
              width="600"
              height="450"
              className="rounded-[8px]"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default PortfolioItem;
