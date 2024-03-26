import React from 'react'

const Read = () => {
  return (
    <div className='bg-[#F0F0F0] py-[80px]'>
        <div className="max-w-container mx-auto">
            <div className="flex flex-wrap justify-between">
                <div className="lg:w-[31%] w-full bg-[url('../src/assets/read1.png')] bg-no-repeat bg-center bg-cover z-[10] relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-10] lg:py-[70px] py-[55px] px-[35px] lg:px-[45px] lg:text-start text-center lg:mb-0 mb-6">
                    <h4 className='lg:w-[230px] font-pops text-[22px] text-white font-bold leading-[30px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                    <a href="#" className='py-[8px] px-[18px] bg-[#FFFFFF80] font-pops text-[12px] text-white font-semibold mt-6 lg:mt-12 inline-block'>Read more</a>
                </div>
                <div className="lg:w-[31%] w-full bg-[url('../src/assets/read2.png')] bg-no-repeat bg-center bg-cover z-[10] relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-10] lg:py-[70px] py-[55px] lg:px-[45px] px-[35px] lg:text-start text-center lg:mb-0 mb-6">
                    <h4 className='lg:w-[230px] font-pops text-[22px] text-white font-bold leading-[30px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                    <a href="#" className='py-[8px] px-[18px] bg-[#FFFFFF80] font-pops text-[12px] text-white font-semibold mt-12 inline-block'>Read more</a>
                </div>
                <div className="lg:w-[31%] w-full bg-[url('../src/assets/read3.png')] bg-no-repeat bg-center bg-cover z-[10] relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-10] py-[70px] px-[45px] lg:text-start text-center">
                    <h4 className='lg:w-[230px] font-pops text-[22px] text-white font-bold leading-[30px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                    <a href="#" className='py-[8px] px-[18px] bg-[#FFFFFF80] font-pops text-[12px] text-white font-semibold mt-12 inline-block'>Read more</a>
                </div>
            </div>
            <div className="text-end">
                <p className='font-pops text-[15px] text-black font-bold mt-4'>MORE FROM THE BLOG </p>
            </div>
        </div>
    </div>
  )
}

export default Read