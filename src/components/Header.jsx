import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className='py-[12px] bg-hbg'>
            <div className='max-w-container mx-auto'>
        <div className="lg:flex">
        <div className="sm:w-full lg:w-1/5">
            <div className="flex items-center lg:justify-start justify-center relative after:absolute after:top-0 after:right-[20px] after:content-[''] after:h-5 after:w-[1px] lg:after:bg-[#5C6A92] after:bg-none">
               <CiMail className='text-white' />
               <p className='font-pops text-[13px] text-white'>mail@yourcompany.com</p>
            </div>
        </div>
        <div className="sm:w-full lg:w-1/5 lg:py-[0px] py-[6px]">
            <div className="flex items-center lg:justify-start justify-center">
                <IoCallOutline className='text-white' />
                <p className='font-pops text-[13px] text-white'>+896 120 5889 (Toll free)</p>
            </div>
        </div>
        <div className="sm:w-full lg:w-4/5">
            <div className="flex justify-center lg:justify-end gap-x-6">
            <FaFacebookF className='text-white'/>
            <FaTwitter className='text-white'/>
            <FaLinkedin className='text-white'/>
            <FaInstagram className='text-white'/>
            </div>
        </div>
        </div>
    </div>
    </header>
  )
}

export default Header