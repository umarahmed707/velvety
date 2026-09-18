import React from "react";
import { FaStar } from "react-icons/fa"; 
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import img1 from '../assets/Shape_241_.png'
import arrow from '../assets/Arrow-left.png'
import productImg from "../assets/Velvety6.png";
import line from "../assets/Separator.png";
import img2 from "../assets/feedback.png";
import img3 from "../assets/beauty-treatment.png";

const ProductTestimonials = () => {
  return (
    <div>
    <section className="w-full bg-[#F2F6EF] py-10 md:py-12 lg:py-14">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">

          {/* ================= LEFT PRODUCT IMAGE ================= */}
          <div className="w-full md:w-[35%] flex justify-center">
            <div
              className="
                relative
                w-[280px] h-[400px]
                md:w-[300px] md:h-[430px]
                lg:w-[350px] lg:h-[500px]
                rounded-[50%]
                bg-[#e4ece0]
                flex items-center justify-center
              "
            >
              <img
                src={productImg}
                alt="Product"
                className="
                  w-[150px]
                  h-[613px]
                  md:w-[165px]
                  lg:w-[613px]
                  object-contain
                  drop-shadow-[15px_15px_15px_rgba(0,0,0,0.18)]
                "
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="w-full md:w-[65%]">

            {/* Heading */}
            <p className="text-[#91a28c] text-[18px] md:text-[28px] font-light mb-12">
              Product Testimonials
            </p>

            {/* Stars */}
            <div className="flex items-center gap-3 mb-7">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className="text-[#3c6040] text-[25px] md:text-[28px]"
                />
              ))}
            </div>

            {/* Review */}
            <h2
              className="
                text-[#263d2a]
                font-serif
                font-normal
                text-[30px]
                sm:text-[34px]
                md:text-[35px]
                lg:text-[40px]
                leading-[1.08]
                max-w-[680px]
              "
            >
              “I’ve been feeling pretty stressed with my skin lately, so I
              picked up a set of HOLOCENA skincare. Oh my goodness!. It was
              AMAZING. My skin felt so soft and moisturized”
            </h2>

            {/* Customer */}
            <p className="text-[#91a28c] italic text-[15px] md:text-[20px] mt-7">
              - Customer Review
            </p>

            {/* ================= ARROWS ================= */}
            <div className="flex flex-col items-center gap-3 absolute right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2">

              <button
                className="
                  text-[#263d2a]
                  text-[25px]
                  hover:translate-x-1
                  transition-all
                "
              >
                <FiArrowRight />
              </button>

              {/* Dots */}
              <div className="flex flex-col gap-[6px]">
                <span className="w-[4px] h-[4px] bg-[#263d2a] rounded-full"></span>
                <span className="w-[4px] h-[4px] bg-[#263d2a] rounded-full"></span>
                <span className="w-[4px] h-[4px] bg-[#263d2a] rounded-full"></span>
                <span className="w-[4px] h-[4px] bg-[#263d2a] rounded-full"></span>
              </div>

              <button
                className="
                  text-[#263d2a]
                  text-[25px]
                  hover:-translate-x-1
                  transition-all
                "
              >
                <FiArrowLeft />
              </button>

            </div>

          </div>
        </div>
      </div>
          <div className="border-b-2 border-gray-200 w-full mt-10"></div>

      <section className="flex justify-between items-center py-16 px-[100px]">
        <div className="flex flex-col justify-center items-center">
            <img src={img1} alt="" className="w-[61.67px] h-[61.67px] my-10"/>
            <p className="text-[20px] leading-[140%] font-light text-[#899F87] ">Loyalty Program</p>
            <p className="text-[30px] leading-[120%]">For Happy Skin</p>
            <button className="text-black w-[177.11px] flex h-[52px] justify-center items-center mt-3 border-2 border-gray-400 text-16px gap-3">Shop Now <img src={arrow} alt="" className="brightness-0 w-5 h-4 " /></button>
        </div>
        <img src={line} alt="" className="mt-20"/>
             <div className="flex flex-col justify-center items-center">
            <img src={img2} alt="" className="w-[61.67px] h-[61.67px ] my-10"/>
            <p className="text-[20px] leading-[140%] font-light text-[#899F87] ">Organic beauty is shared,</p>
            <p className="text-[30px] leading-[120%]">Sponsor those you love!</p>
            <button className="text-black w-[177.11px] flex h-[52px] justify-center items-center mt-3 border-2 border-gray-400 text-16px gap-3">Shop Now <img src={arrow} alt="" className="brightness-0 w-5 h-4 " /></button>
        </div>
               <img src={line} alt="" className="mt-20"/>

             <div className="flex flex-col justify-center items-center">
            <img src={img3} alt="" className="w-[61.67px] h-[61.67px] my-10"/>
            <p className="text-[20px] leading-[140%] font-light text-[#899F87] ">Treat yourself to good weather</p>
            <p className="text-[30px] leading-[120%]">at Maison Absolution</p>
            <button className="text-black w-[177.11px] flex h-[52px] justify-center items-center mt-3 border-2 border-gray-400 text-16px gap-3">Shop Now <img src={arrow} alt="" className="brightness-0 w-5 h-4 " /></button>
        </div>
      </section>
      
      <section className="h-[214px] w-full bg-[#899F87] mt-[100px] px-[50px] flex flex-wrap justify-between items-center">
<h3 className="text-[56px] leading-[120%] font-light text-[#F2F6EF] ">Subscribe to get 10% off <br /> your first order</h3>
<div className="flex items-center gap-[1px] ">
    <input type="text" name="" id="" placeholder="Drop your email here" className="w-[450px] h-[72px] px-6" /><div className="bg-white h-[72px] w-[87.87px] flex items-center justify-center"><img src={arrow} alt="" className=" brightness-0 h-6 h-6"/></div></div>


      </section>
    </section>
          <div className="border-b-2 border-gray-200 w-full"></div>
          </div>

  );
};

export default ProductTestimonials;