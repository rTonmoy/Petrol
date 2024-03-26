import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Menu = () => {

    let [show ,setShow] = useState(false)

    let handleMenu = ()=>{
        setShow(!show)
    }

  return (
    <nav className='bg-[#F40404] py-[18px]'>
        <div className="max-w-container mx-auto">
            <div className="flex justify-between">
                <div className="">
                    <img src={logo} alt="logo" />
                </div>
                <div className="">
                    <ul className={` text-center w-full z-50  lg:flex gap-14 pt-[10px] absolute lg:static ${show == true ? 'top-[170px] left-0  bg-[#F40404] ease-in duration-300' : 'top-[170px] left-[-100%] bg-[#F40404] ease-in duration-300' }`}>
                        <li><a className='font-pops text-[15px] text-white font-semibold' href="#">Home</a></li>
                        <li><a className='font-pops text-[15px] text-white font-semibold'  href="#">About</a></li>
                        <li><a className='font-pops text-[15px] text-white font-semibold' href="#">Services</a></li>
                        <li><a className='font-pops text-[15px] text-white font-semibold' href="#">Gallery</a></li>
                        <li><a className='font-pops text-[15px] text-white font-semibold' href="#">Blog</a></li>
                        <li><a className='inline-block lg:inline font-pops text-[15px] text-white font-semibold lg:border-[2px] px-5 py-3' href="#">CONTACT</a></li>
                    </ul>
                </div>

                <div className="lg:hidden relative z-50" onClick={handleMenu}>
                {show == true ? <RxCross2 className='text-white mt-[7px] mr-[12px] font-pops text-[30px]' /> : <FaBars className='text-white mr-[12px]  mt-[7px] font-pops text-[30px]' />}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Menu