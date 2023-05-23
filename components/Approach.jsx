import Image from "next/image";
import React from "react";
import { Container } from "reactstrap";
import { ImArrowRight2 } from "react-icons/im";
import Object from "./Data/Objectivedata";
import Approch from "./Data/Approachdata";

const Approach = () => {
  return (
    <section className="bg-[#f8f9fa]  ">
      <Container className="md:px-28 pt-[20px] mx-2">
        <div className="flex flex-col ">
          <div
            className="text-[42px] text-[#212125] text-center font-bold pb-[40px]
            max-lg:text-[24px]"
          >
            OUR{" "}
            <span className="border-b-4 border-b-[#65f9f1] max-lg:text-[24px]">
              {" "}
              APPROACH{" "}
            </span>
          </div>
          <div className="grid grid-cols-3 py-[40px]  max-lg:grid-cols-1">
            {Approch.map((item, idx) => (
              <>
                <div className="flex flex-col ">
                  <div className="flex flex-col p-[30px] max-lg:p-[16px]">
                    <div className="flex items-center ">
                      <div>
                        <Image
                          src={item.img}
                          width={45}
                          height={45}
                          alt="fund"
                        />
                      </div>
                      <div className="text-[28px] text-[#212529] font-bold ml-[10px] max-lg:text-[18px]">
                        {item.title1} <br /> {item.title2}
                      </div>
                    </div>
                    <div className="text-[18px] mb-[10px] pt-[20px] px-[40px]">
                      {item.desc}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Approach;
