import React from 'react';
import { Star } from 'lucide-react';
import img1 from '../assets/Velvety1.png'
import img3 from '../assets/Velvety6.png'
import img2 from '../assets/Velvety4.png'
import img4 from '../assets/Vector.png'
import img5 from '../assets/Vector (1).png'
import img6 from '../assets/Shape.png'
import img7 from '../assets/Company03.png'
import img8 from '../assets/Company05.png'
import arrow from '../assets/Arrow-left.png'

const PRODUCTS = [
  {
    id: 1,
    name: "CHICORI",
    price: "$20",
    rating: 4.0,
    fullStars: 4,
    image: img1,
    bgStyle: "square" // Light square background
  },
  {
    id: 2,
    name: "NOTORIOUS",
    price: "$23",
    rating: 5.0,
    fullStars: 5,
    image: img2,
    bgStyle: "oval" // Circle / oval background
  },
  {
    id: 3,
    name: "HOLOCENA",
    price: "$20",
    rating: 5.0,
    fullStars: 5,
    image: img3,
    bgStyle: "square" // Light square background
  }
];

const StarRating = ({ count, ratingText }) => {
  return (
    <div className="flex items-center gap-1 text-gray-800">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((starIndex) => (
          <Star
            key={starIndex}
            className={`w-3.5 h-3.5 ${
              starIndex <= count 
                ? "fill-gray-900 text-gray-900" 
                : "text-gray-300 fill-transparent"
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-sans text-gray-700 ml-1">{ratingText.toFixed(1)}</span>
    </div>
  );
};

export default function App() {
  return (
    <div className="w-full bg-[#EFF2EB] min-h-screen py-16  font-serif select-none">
      
     

      {/* Main Container */}
      <section className="max-w-6xl mx-auto">

        {/* Header Section */}
        {}
        <header className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-[#869580] text-[28px] sm:text-base font-sans tracking-wide">
            Our featured products
          </p>
          <h2 className="font-ivymode text-[56px] sm:text-4xl md:text-5xl text-[#223322] font-light leading-tight tracking-tight">
            Facial and skincare, natural and certified organic
          </h2>
        </header>

        {/* 3 Column Grid with Delicate Divider Borders */}
        {}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-gray-300/70 divide-y md:divide-y-0 md:divide-x divide-gray-300/70">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="p-6 sm:p-8 flex flex-col justify-between group">
              
              {/* Image Graphic Container */}
              {}
              <div className="relative w-full aspect-square flex items-center justify-center mb-8">
                
                {/* Background Styling: Circular vs Light Rectangular */}
                {product.bgStyle === 'oval' ? (
                  <div className="w-full h-full bg-[#E2E8DC] rounded-full flex items-center justify-center p-6 shadow-inner transition-transform duration-500 group-hover:scale-[1.02]">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-[528px] w-[470.63px] object-contain drop-shadow-xl"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-[#E5ECE0] rounded-sm flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-[1.02]">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-[528px] w-[470.63px] object-contain drop-shadow-xl"
                    />
                  </div>
                )}
              </div>

              {/* Product Details & Footer */}
              {}
              <div className="space-y-2">
                <h3 className="font-ivymode text-base sm:text-lg tracking-widest text-[#223322] uppercase font-medium">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between pt-1">
                  <span className="font-sans font-semibold text-gray-900 text-sm sm:text-base">
                    {product.price}
                  </span>
                  
                  <StarRating 
                    count={product.fullStars} 
                    ratingText={product.rating} 
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>


      <section className="flex justify-between px-[100px] items-center py-[100px]">
<div className="w-[100%]">
<p className="text-[28px]">About us</p>
<p className="text-[56px] leading-[100%]">Velvety facial and skincare company</p>
</div>
<div>
<p className="text-[#3C5E39]  text-[20px]">Velvety is an indigenous company that specializes in the manufacture and development of facial and skincare products using the medicinal properties of the traditional First Nations pharmacopoeia, with a concern for sustainable development.
<br />
<br />
The products offered, whose benefits have been scientifically confirmed, are 100% natural and allow you to take care of your body and mind: calming teas, energizing infusions, anti-inflammatory essential oils, anti-age soaps and creams, etc.</p>
</div>
      </section>

      <section className="flex  flex-col flex-wrap px-[50px]">
        <p className="text-[28px]">About us</p>
<div className="flex flex-wrap  justify-between items-center">
        <img src={img4} alt=""  className="h-[88px] w-[192px]" />
        <img src={img6} alt="" className="h-[88px] w-[192px]" />
        <img src={img7} alt=""  className="h-[88px] w-[192px]"/>
        <img src={img5} alt=""  className="h-[88px] w-[192px]"/>
        <img src={img8} alt="" className="h-[88px] w-[192px]" />
        </div>
      </section>


      <section className="h-[128px] w-full bg-[#213721] mt-[100px] px-[50px] flex flex-wrap justify-between items-center">
<h3 className="text-[40px] leading-[120%] text-[#F2F6EF] ">Let's see the processing of our products</h3>
<img src={arrow} alt="" />


      </section>
    </div>
  );
}