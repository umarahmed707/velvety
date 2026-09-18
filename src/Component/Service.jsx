import React from 'react'

import img1 from '../assets/Image (1).png'
import arrow from '../assets/Arrow-left.png'

const Service = () => {
  return (
  <div>
    <section className="flex flex-wrap bg-[#F2F6EF] py-16 justify-between gap-20 items-center px-[150px]">
    <img src={img1} alt="" />
    <div>
        <p className="text-[28px] leading-[110%]">Try Our Service</p>
          <h4 className="text-[56px] leading-[120%]">Your skin diagnosis in 3 minutes</h4>
          <p className="text-[20px] leading-[140%]">Say hello to a more radiant, healthier you with personalized skincare that's as unique as you are.</p>
          <button className="flex text-black w-[236.11px] items-center justify-center h-[52px] border-2 border-gray-300 mt-[20px]">
  Start my diagnosis
  <img
    src={arrow}
    className="ml-2 brightness-0 w-[30px]"
    alt="arrow"
  />
</button>
    </div>
    </section>
          <div className="border-b-2 border-gray-200 w-full"></div>

    </div>
  )
}

export default Service