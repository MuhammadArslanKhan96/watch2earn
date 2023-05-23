import React, { useState, useEffect } from "react";
import { Container, Col } from "reactstrap";
import Transition from "../components/Transition";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../components/Data/portfolioData";

const Portfolio = () => {
  const [filter, setFilter] = useState("React Projects");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "React Projects") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Blockchain Projects") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = {
    color: "#FFFFF",
    // width: '320px',
    fontSize: "14px",
    marginBottom: "80px",
  };

  return (
    <section id="projects" className="bg-[#f3f6fc]">
      <Container className="md:px-28  mx-2">
        <Transition>
          <Col>
            <div className="flex justify-center text-center px-32 pt-10 md:flex md:w-full flex-col">
              <p className="md:text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE3CEE] to-[#0E9AC5] text-center">
                Case Study
              </p>
              <p className="text-[16px] font-bold text-[#0D1296]  pt-[10px]">
                See How We Deliver Client&apos;s Idea Into Excellent Result!
              </p>
            </div>
            <div
              className="flex flex-col my-10 px-24 gap-x-10 pb-28 md:flex md:w-full  text-center mb-5
        max-lg:my-[1rem] max-lg:px-[1rem] max-lg:py-[1rem] "
            >
              {data?.map((item) => (
                <Col lg="4" md="4" sm="6" key={item.id}>
                  <PortfolioItem item={item} />
                </Col>
              ))}
            </div>
          </Col>
        </Transition>
      </Container>
    </section>
  );
};

export default Portfolio;
