import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[url("../src/assets/banner.png")] bg-no-repeat bg-cover bg-center  py-[30px] lg:py-[200px] z-[10] relative after:absolute after:top-0 after:left-0 after:content-[""] after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-10]'>
        <div className="max-w-container mx-auto text-center lg:text-start">
            <h2 className='font-pops lg:text-[55px] text-white font-semibold  lg:font-bold px-[50px] lg:px-[0px] lg:w-[800px] lg:leading-[75px] '>We exist since 1975 on the oil and gas industry.</h2>
            <a href="#" className='lg:py-[13px] py-[8px] px-[20px] lg:px-[32px]  bg-[#F40404] font-pops lg:text-[15px] text-[13px] text-white lg:font-semibold mt-[30px] inline-block'>LEARN MORE</a>
        </div>
    </div>
  )
}

export default Banner