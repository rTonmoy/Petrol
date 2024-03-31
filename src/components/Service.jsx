import React from "react";

const Service = () => {
  return (
    <div id="services">
      <div className="lg:flex items-center flex-wrap">
        <div className="lg:w-[50%] lg:px-[20px] lg:text-start text-center lg:mb-0 mb-6">
          <h2 className="font-pops text-[48px] text-black font-bold">
            Our Services
          </h2>
          <p className="font-pops text-[15px] text-[#6C6C6C] font-medium lg:w-[370px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="lg:w-[50%] bg-[url('../src/assets/ser1.png')] bg-no-repeat bg-center bg-cover py-[100px] mt-4 z-[10] relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-10] lg:mb-0 mb-6">
          <div className="lg:px-[80px] lg:text-start text-center">
            <h3 className="font-pops text-[20px] lg:text-[25px] text-white lg:font-bold font-semibold">
              Modern natural oil and gas refineries.
            </h3>
            <a
              className="font-pops text-[15px] text-white font-semibold px-[25px] py-[10px] bg-[#F40404] mt-3 inline-block"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:w-[50%] bg-[url('../src/assets/ser2.png')] bg-no-repeat bg-center bg-cover py-[100px] z-[10] relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-10] lg:mb-0 mb-6">
          <div className="lg:px-[80px] lg:text-start text-center">
            <h3 className="font-pops lg:text-[25px] text-[20px] text-white lg:font-bold font-semibold">
              Supply of national industries.
            </h3>
            <a
              className="font-pops text-[15px] text-white font-semibold px-[25px] py-[10px] bg-[#F40404] mt-3 inline-block"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:w-[50%] bg-[url('../src/assets/ser3.png')] bg-no-repeat bg-center bg-cover py-[100px]  z-[10] relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-10]">
          <div className="lg:px-[80px] lg:text-start text-center">
            <h3 className="font-pops lg:text-[25px] text-[20px] text-white lg:font-bold font-semibold">
              National fuel distribution and supply..
            </h3>
            <a
              className="font-pops text-[15px] text-white font-semibold px-[25px] py-[10px] bg-[#F40404] mt-3 inline-block"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
