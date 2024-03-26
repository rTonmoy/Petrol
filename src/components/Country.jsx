import React from 'react'

const Country = () => {
  return (
    <div className="max-w-container mx-auto py-[40px] lg:py-[60px] text-center lg:text-start">
      <div className="lg:flex items-center">
        <div className="lg:w-1/4">
          <h2 className='font-pops lg:text-[42px] text-[35px] text-black font-semibold lg:font-bold lg:w-[280px] lg:leading-[60px] leading-[45px]'>The biggest supplier on the country</h2>
        </div>
        <div className="lg:w-3/4">
            <p className='lg:mt-[0px] mt-[20px] lg:pl-[120px] lg:pr-[300px] font-pops font-normal text-[14px] text-[#6C6C6C]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
        </div>
      </div>
    </div>
  );
}

export default Country
