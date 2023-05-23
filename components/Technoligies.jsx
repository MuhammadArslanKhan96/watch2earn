import Image from "next/image";
import React, { useState } from "react";
import Tech from "./Data/Techdata";
import { Container } from "reactstrap";

const Technoligies = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-[#ffffff] ">
      <Container className="md:px-28 py-20 mx-2">
        <div className="flex justify-center max-lg:flex-wrap">
          <div className="flex flex-col justify-center px-10 pt-[20px] ">
            {/* heading */}
            <div className="flex justify-center max-lg:flex-wrap">
              <p className="text-[42px] font-bold text-center py-5 max-lg:text-[24px]">
                Technologies we work with
              </p>
            </div>
            {/* selector */}
            <div className="flex justify-between gap-x-10 py-5 px-10 max-lg:px-[0rem] max-lg:flex-wrap max-lg:justify-start">
              {Tech.length
                ? Tech.map((item, idx) => (
                    <div
                      className={
                        "text-[20px] max-lg:text-[16px] font-semibold opacity-50 hover:text-transparent bg-clip-text  hover:bg-[#0D1296] hover:border-b-2 hover:border-b-[#0D1296] cursor-pointer " +
                        (selected === idx
                          ? "bg-[#0D1296] border-b-2 border-b-[#0D1296] "
                          : "")
                      }
                      key={idx}
                      onClick={() => setSelected(idx)}
                    >
                      {item.btnText || item.title}
                    </div>
                  ))
                : null}
            </div>
            {/* services */}
            <div className="flex justify-evenly max-lg:flex-wrap">
              <div className="text-[24px] flex gap-x-10 py-5 max-lg:text-[16px] max-lg:flex-wrap">
                {Tech[selected]?.icons?.split(",").map((text, idx) => (
                  <div key={idx}>
                    <div className="text-center text-[20px] py-5 max-lg:flex-wrap">
                      <Image
                        src={Tech[selected]?.iconimg?.split(",")[idx]}
                        width={40}
                        height={40}
                        alt="fund"
                      />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Technoligies;
