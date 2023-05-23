import Image from "next/image";
import React from "react";
import { Container } from "reactstrap";
import { ImArrowRight2 } from "react-icons/im";
import Object from "./Data/Objectivedata";

const Objectives = () => {
  return (
    <section className="bg-[#f8f9fa]  ">
      <Container className="md:px-28 py-20 mx-2">
        <div className="flex flex-col ">
          <div
            className="text-[42px] text-[#212125] text-center font-bold pb-[40px] 
                    max-lg:text-[24px]"
          >
            SOFTWARE FOR{" "}
            <span className="border-b-4 border-b-[#65f9f1] max-lg:text-[24px]">
              {" "}
              YOUR BUSINESS OBJECTIVES{" "}
            </span>
          </div>
          <div className="text-[24px] text-[#303234] text-center">
            Our client ranges from startups to small, medium, and large
            enterprises. Our <br />
            team of custom software developers works exceptionally well to adapt
            to the varying <br />
            working styles and business needs of our clients.
          </div>
          <div className="flex justify-between items-center py-[40px] max-lg:flex-col">
            {Object.map((item, idx) => (
              <>
                <div className="flex flex-col p-[30px]">
                  <div className="flex items-center ">
                    <div>
                      <Image src={item.img} width={45} height={45} alt="fund" />
                    </div>
                    <div className="text-[18px] text-[#212529] font-bold ml-[10px]">
                      For <br /> {item.title}
                    </div>
                  </div>
                  <div className="text-[16px] mb-[10px] pt-[20px] pl-[20px] pr-[80px]">
                    {item.desc}
                  </div>
                  <div className="flex items-center px-[5px] ">
                    <div>
                      <ImArrowRight2 className="text-[#909090]" />
                    </div>
                    <div className="text-[#66686A] text-[16px] px-[10px]">
                      {item.list1}
                    </div>
                  </div>
                  <div className="flex items-center px-[5px]">
                    <div>
                      <ImArrowRight2 className="text-[#909090]" />
                    </div>
                    <div className="text-[#66686A] text-[16px] px-[10px]">
                      {item.list2}
                    </div>
                  </div>
                  <div className="flex items-center px-[5px]">
                    <div>
                      <ImArrowRight2 className="text-[#909090]" />
                    </div>
                    <div className="text-[#66686A] text-[16px] px-[10px]">
                      {item.list3}
                    </div>
                  </div>
                  <div className="flex items-center px-[5px]">
                    <div>
                      <ImArrowRight2 className="text-[#909090]" />
                    </div>
                    <div className="text-[#66686A] text-[16px] px-[10px]">
                      {item.list4}
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

export default Objectives;
