import React from 'react'
import ProductCard from './ProductCard';

const SkinProduct = () => {
  return (
        <div>
    <section className="flex bg-[#F2F6EF] py-20 gap-20">
        <div className="flex flex-col px-[50px] w-[100%] ">
<p className="text-[28px] ">All Products</p>
<h1 className="text-[56px] leading-[100%]">Mild skincare & facial <br /> routine</h1>
        </div>
        <div className="flex flex-wrap gap-10">
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
        </div>
            </section>
          <div className="border-b-2 border-gray-200 w-full"></div>

            </div>
  )
}

export default SkinProduct