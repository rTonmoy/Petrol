import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[#F40404] py-[40px] border-b-[2px] border-[#FFB800]">
        <div className="max-w-container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
            <div className="lg:w-[80%] w-full lg:text-start text-center ">
                <h2 className='font-pops text-[32px] text-white font-bold'>Want to join as member branch in your area?</h2>
            </div>
            <div className="lg:w-[20%] w-full lg:text-end text-center mt-4">
                <a className='font-pops text-[15px] text-white font-semibold py-[8px] px-[20px] border border-white-500' href="#">CONTACT</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact