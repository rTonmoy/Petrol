import React from "react";

const Learn = () => {
  return (
    <div className="bg-[#F0F0F0] lg:py-[80px] py-[40px]">
      <div className="max-w-container mx-auto flex flex-wrap">
        <div className="lg:w-[30%] w-full bg-[#F40404] lg:py-[100px] py-[70px] lg:px-[74px] px-[50px] lg:text-start text-center">
            <h2 className="lg:w-[262px] font-pops lg:text-[36px] text-[28px] text-white font-bold lg:leading-[54px]">Learn more about our company</h2>
        </div>
        <div className="lg:w-[70%] w-full bg-[url('../src/assets/learn.png')] bg-no-repeat bg-cover bg-center py-[100px] text-center">
            <a className="font-pops text-[16px] text-[#F40404] font-semibold bg-[#FFFFFF] hover:bg-[#F40404] hover:text-[#fff] py-[10px] px-[20px] mt-16 inline-block ease-in duration-100" href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Learn;
