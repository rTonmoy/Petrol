import React from 'react'
import gal1 from "../assets/gal1.png"
import gal2 from "../assets/gal2.png"
import gal3 from "../assets/gal3.png"
import gal4 from "../assets/gal4.png"

const Gallery = () => {
  return (
    <div className='flex flex-wrap justify-between'>
       <div className="lg:w-[24%] sm:w-[49%] py-2">
        <img src={gal1} className='w-full' alt="" />
       </div>
       <div className="lg:w-[24%] sm:w-[49%] py-2">
        <img src={gal2} className='w-full' alt="" />
       </div>
       <div className="lg:w-[24%] sm:w-[49%] py-2">
        <img src={gal3} className='w-full' alt="" />
       </div>
       <div className="lg:w-[24%] sm:w-[49%] py-2">
        <img src={gal4} className='w-full' alt="" />
       </div>
    </div>
  )
}

export default Gallery