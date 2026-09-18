import React from 'react'
import aboutimg from '../assets/PNG file 1.png'
import img1 from '../assets/Organic.png'
import img2 from '../assets/skin 1.png'
import img3 from '../assets/serum 3.png'

const About = () => {
  return (
    <div className="flex justify-between bg-[#F2F6EF] ">

        <div className="flex flex-col items-center   justify-center gap-15 ">
            <h2 className="text-[56px] text-[#213721] leading-[120%] mt-10">Inspired by traditional <br /> knowledge and nature</h2>
            <img src={aboutimg} alt="" />
        </div>
        <div className="h-[589px] w-[755px] flex flex-col justify-between gap-[20px] px-[50px] py-[70px] bg-[#E4ECE0]">
<div className="flex justify-center items-center gap-6">
<img src={img1} alt="" className="w-[74px] h-[74px]" />
<div className="flex flex-col">
    <p className="text-[26px]">100% Organic</p>
    <p className="text-[20px] leading-[100%]">We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms.</p>
</div>
</div>
<div className="flex justify-center items-center gap-6">
<img src={img2} alt="" className="w-[74px] h-[74px]" />
<div className="flex flex-col">
    <p className="text-[26px]">100% Organic</p>
    <p className="text-[20px] leading-[100%]">We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms.</p>
</div>
</div>
<div className="flex justify-center items-center gap-6">
<img src={img3} alt="" className="w-[74px] h-[74px]" />
<div className="flex flex-col">
    <p className="text-[26px]">100% Organic</p>
    <p className="text-[20px] leading-[100%]">We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms.</p>
</div>
</div>
        </div>
    </div>
  )
}

export default About