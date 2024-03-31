import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ScrollspyNav from "react-scrollspy-nav"

const Menu = () => {

    let [show ,setShow] = useState(false)

    let handleMenu = ()=>{
        setShow(!show)
    }

  return (
    <nav className='bg-[#F40404]  fixed top-0 left-0 w-full z-50'>
        <div className="max-w-container mx-auto">
            <div className="flex justify-between">
                <div className="py-[18px]">
                    <img  src={logo} alt="logo" />
                </div>
                <div className="">
                    <ScrollspyNav 
                                        scrollTargetIds={["section_1", "about", "services", "gallery", "blog", "contact"]}
                                        offset={100}
                                        activeNavClass="is-active"
                                        scrollDuration="1000"
                                        headerBackground="true">
                    <ul className={` text-center w-full z-50  lg:flex  pt-[10px] absolute lg:static ${show == true ? 'top-[81px] left-0  bg-[#F40404] ease-in duration-300' : 'top-[81px] left-[-100%] bg-[#F40404] ease-in duration-300' }`}>
                        <li><a className='font-pops text-[15px] text-white font-semibold lg:py-[18px] inline-block px-[28px]' href="/">Home</a></li>
                        <li><a className='font-pops text-[15px] text-white font-semibold lg:py-[18px] inline-block px-[28px]'  href="#about">About</a></li>
                        <li><a className='font-pops text-[15px] text-white font-semibold lg:py-[18px] inline-block px-[28px]' href="#services">Services</a></li>
                        <li><a className='font-pops text-[15px] text-white font-semibold lg:py-[18px] inline-block px-[28px]' href="#gallery">Gallery</a></li>
                        <li><a className='font-pops text-[15px] text-white font-semibold lg:py-[18px] inline-block px-[28px] mr-[20px]' href="#blog">Blog</a></li>
                        <li className='mt-[16px]'><a className='inline-block lg:inline font-pops text-[15px] text-white font-semibold lg:border-[2px] px-5 lg:py-3 py-5' href="#contact">CONTACT</a></li>
                    </ul>
                    </ScrollspyNav>
                </div>

                <div className="lg:hidden relative z-50 py-[18px]" onClick={handleMenu}>
                {show == true ? <RxCross2 className='text-white mt-[7px] mr-[12px] font-pops text-[30px]' /> : <FaBars className='text-white mr-[12px]  mt-[7px] font-pops text-[30px]' />}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Menu