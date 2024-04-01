import React from "react";
import logo6 from "../assets/Logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    // <footer id='contact' className='bg-[#1F1F1F] lg:py-[80px] py-[40px] '>
    //     <div className='max-w-container mx-auto '>
    //         <div className="flex flex-wrap justify-between lg:text-start text-center">
    //             <div className="lg:w-[40%] w-1/3">
    //                 <img  src={logo6} alt="" />
    //                  <ul className=''>
    //                     <li><a className='flex items-center font-pops text-[13px] text-white lg:mt-6 mt-2 font-normal ' href="#"><CiMail className='text-white lg:mr-[7px]' />mailcompany.com</a></li>
    //                     <li><a className='flex items-center font-pops text-[13px] text-white mt-2 font-normal' href="#"> <IoCallOutline className='text-white mr-[7px]' />+896 120 5889 (Toll free)</a></li>
    //                     <li><a className='flex items-center font-pops text-[13px] text-white mt-2 font-normal' href="#"><CiLocationOn className='text-white mr-[7px]'/> 101 Baker Street, New York, USA, 12345</a></li>
    //                 </ul>
    //         <div className="flex  gap-x-2 pt-[32px] ">
    //             <div className="flex items-center text-white w-[25px] h-[25px] rounded-[50%] bg-[#F40404]">
    //             <FaFacebookF className='text-white pl-[6px]'/>
    //             </div>
    //             <div className="flex items-center text-white w-[25px] h-[25px] rounded-[50%] bg-[#F40404]">
    //             <FaTwitter className='text-white  pl-[6px]'/>
    //             </div>
    //             <div className="flex items-center  text-white w-[25px] h-[25px] rounded-[50%] bg-[#F40404]">
    //             <FaInstagram className='text-white  pl-[6px]'/>
    //             </div>
    //             <div className="flex items-center  text-white w-[25px] h-[25px] rounded-[50%] bg-[#F40404]">
    //             <FaLinkedin className='text-white pl-[6px]'/>
    //             </div>
    //         </div>
    //             </div>
    //             <div className="lg:w-[20%] w-1/3  text-center lg:text-start">
    //                 <h3 className='font-pops text-[16px] text-white font-bold lg:mt-6 '>Company</h3>
    //                 <ul>
    //                     <li><a className='font-pops text-[14px] text-white font-light py-[7px] inline-block' href="#">Home</a></li>
    //                     <li><a className='font-pops text-[14px] text-white font-light py-[7px] inline-block' href="#">About</a></li>
    //                     <li><a className='font-pops text-[14px] text-white font-light py-[7px] inline-block' href="#">Services</a></li>
    //                     <li><a className='font-pops text-[14px] text-white font-light py-[7px] inline-block' href="#">Gallery</a></li>
    //                 </ul>
    //             </div>
    //             <div className="lg:w-[20%] w-1/3  text-center lg:text-start">
    //             <h3 className='font-pops text-[16px] text-white font-bold lg:mt-6'>Others</h3>
    //                 <ul>
    //                     <li><a className='font-pops text-[14px] text-white font-light py-[7px] inline-block' href="#">Blog</a></li>
    //                     <li><a className='font-pops text-[14px] text-white font-light py-[7px] inline-block' href="#">Contacts</a></li>
    //                     <li><a className='font-pops text-[14px] text-white font-light py-[7px] inline-block' href="#">Terms & Conditions</a></li>
    //                     <li><a className='font-pops text-[14px] text-white font-light py-[7px] inline-block' href="#">Privacy Policy</a></li>
    //                 </ul>
    //             </div>
    //             <div className="lg:w-[20%] w-full  text-center lg:text-start">
    //             <h3 className='font-pops text-[16px] text-white font-bold mt-6'>Certificate</h3>
    //             <img className='inline-block mt-4 pr-[10px]' src={logo7} alt="" />
    //             <img className='inline-block mt-4' src={logo8} alt="" />
    //             </div>
    //         </div>
    //     </div>
    // </footer>

    <footer id="contact" className="bg-[#1F1F1F]">
      <div class="max-w-container mx-auto w-full  p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="#" class="flex items-center">
              <img src={logo6} alt="FlowBite Logo" />
            </a>
            <ul className="">
              <li>
                <a
                  className="flex items-center font-pops text-[13px] text-white lg:mt-6 mt-2 font-normal "
                  href="#"
                >
                  <CiMail className="text-white lg:mr-[7px]" />
                  mailcompany.com
                </a>
              </li>
              <li>
                <a
                  className="flex items-center font-pops text-[13px] text-white mt-2 font-normal"
                  href="#"
                >
                  {" "}
                  <IoCallOutline className="text-white mr-[7px]" />
                  +896 120 5889 (Toll free)
                </a>
              </li>
              <li>
                <a
                  className="flex items-center font-pops text-[13px] text-white mt-2 font-normal"
                  href="#"
                >
                  <CiLocationOn className="text-white mr-[7px]" /> 101 Baker
                  Street, New York, USA, 12345
                </a>
              </li>
            </ul>
            <div className="flex  gap-x-2 pt-[32px] ">
              <div className="flex items-center text-white w-[25px] h-[25px] rounded-[50%] bg-[#F40404]">
                <FaFacebookF className="text-white pl-[6px]" />
              </div>
              <div className="flex items-center text-white w-[25px] h-[25px] rounded-[50%] bg-[#F40404]">
                <FaTwitter className="text-white  pl-[6px]" />
              </div>
              <div className="flex items-center  text-white w-[25px] h-[25px] rounded-[50%] bg-[#F40404]">
                <FaInstagram className="text-white  pl-[6px]" />
              </div>
              <div className="flex items-center  text-white w-[25px] h-[25px] rounded-[50%] bg-[#F40404]">
                <FaLinkedin className="text-white pl-[6px]" />
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Home
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    About
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Services
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Others
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-2">
                  <a href="#" class="hover:underline ">
                    Blog
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline ">
                    Contact
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline ">
                    Terms & Conditions
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline ">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Certificate
              </h2>
              <img
                className="inline-block lg:mt-4 pr-[10px]"
                src={logo7}
                alt=""
              />
              <img className="inline-block mt-4" src={logo8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
