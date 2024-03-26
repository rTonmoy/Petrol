import React from 'react'
import logo1 from "../assets/Logo1.png"
import logo2 from "../assets/Logo2.png"
import logo3 from "../assets/Logo3.png"
import logo4 from "../assets/Logo4.png"

const Logo = () => {
  return (
    <div className='max-w-container mx-auto'>
        <div className="flex flex-wrap justify-between lg:py-[50px] py-[20px]">
            <div className="lg:w-[25%] w-1/2">
                <img src={logo1} alt="" />
            </div>
            <div className="lg:w-[25%] w-1/2">
            <img src={logo2} alt="" />
            </div>
            <div className="lg:w-[25%] w-1/2">
            <img src={logo3} alt="" />
            </div>
            <div className="lg:w-[25%] w-1/2">
            <img src={logo4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Logo