import React from 'react'
import img1 from '../assets/Velvety6.png'
const ProductCard = () => {
   

  return (
    <div className="border-2 border-gray-200">
<img src={img1} alt="" className="bg-[#E4ECE0] w-[305px] h-[320px]" />
<div className="bg-[#f3f7f0] p-[20px]">
    <p className="text-[22px] leading-[140%]">CLASSWING</p>
    <p className="text-[22px] leading-[140%] font-bold">$20</p>
    <div>*********</div>
   </div>
    </div>
  )
}

export default ProductCard