import React from "react";


const ServicesItem = (props) => {
  const { title, description } = props.item;
  console.log(description);
  return (
    <div className="flex flex-col md:ml-16 md:w-[564px] w-full mx-2">
        <h2 className="text-[#fff] text-[32px] font-medium mb-6">{title}</h2>
        <p className="text-[#FFFFFF] opacity-60 text-lg mb-10">
            {description}
        </p>
        <button className="bg-[#08C1FB] w-[147px] h-[48px] text-lg text-[#000] font-bold">
          Say Hello <span className="animate-waving-hand">👋🏻</span>
        </button>
    </div>
  );
};

export default ServicesItem;
