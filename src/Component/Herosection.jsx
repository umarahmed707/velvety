import React, { useState } from 'react';
import { ChevronDown, ArrowRight, ArrowLeft, ArrowUp } from 'lucide-react';
import Herosection from '../assets/Velvety2.png'
import rightbg from '../assets/Image.png'

const SLIDES = [
  {
    id: 1,
    title: "Let nature take care of your body and soul",

 
  },
  {
    id: 2,
    title: "Pure organic botanical facial mist",
    
  },
  {
    id: 3,
    title: "Restore your natural radiance",
    
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const activeSlide = SLIDES[currentSlide];

  return (
    <div className="relative w-full h-screen min-h-[680px] bg-black font-serif select-none flex flex-col">
      
      {/* Background Split Screen */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 z-0">
        
        {/* Left Half: Soft Olive/Sage Green */}
        <div className="bg-[#8C9B83] w-full h-full transition-colors duration-700 ease-in-out relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
        </div>

        {/* Right Half: Botanical Foliage Overlay */}
        <div className="relative w-full h-full overflow-hidden hidden md:block">
          <img 
            src={rightbg} 
            alt="Botanical Leaves Background" 
            className="w-[730px] h-[758px] object-cover object-center bg-norepeat filter brightness-90"
          />
          {/* Subtle Dark Vignette & Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8C9B83]/30 via-transparent to-black/40" />
        </div>
      </div>

      {}
      <header className="relative z-20 w-full px-6 sm:px-12 pt-8 flex items-center justify-between text-white">
        
        {/* Top-Left Brand Logo */}
        <div className="flex flex-col cursor-pointer group">
          <h1 className="text-2xl sm:text-3xl font-light tracking-[0.2em] font-serif uppercase text-white drop-shadow-sm">
            VELVETY
          </h1>
          <span className="text-[10px] sm:text-[11px] italic tracking-wider font-light text-white/80 -mt-1 font-sans">
            Facial & skincare
          </span>
        </div>

        {/* Top-Right Navigation Links */}
        <nav className="flex items-center space-x-6 sm:space-x-10 text-xs sm:text-sm font-sans tracking-widest text-white/90 uppercase font-light">
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
            <span>PAGES</span>
            <ChevronDown className="w-3.5 h-3.5 text-white/80" />
          </div>
          <a href="#shop" className="hover:text-white transition-colors">SHOP</a>
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#login" className="hover:text-white transition-colors hidden sm:inline-block">LOGIN</a>
          <button 
            onClick={() => setCartCount(cartCount + 1)} 
            className="hover:text-white transition-colors font-medium cursor-pointer"
          >
            CART ({cartCount})
          </button>
        </nav>
      </header>

      {}
      <main className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between">
        
        {/* Left Side Controls (Vertical Carousel Dots & Arrows) */}
        <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-5 text-white/70 z-30">
          <button 
            onClick={handlePrevSlide} 
            className="p-1 hover:text-white transition-colors cursor-pointer focus:outline-none"
            title="Previous"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          
          <div className="flex flex-col gap-2 items-center">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-1.5 transition-all duration-300 rounded-full ${
                  idx === currentSlide ? 'h-6 text-[102px] bg-white' : 'h-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNextSlide} 
            className="p-1 hover:text-white transition-colors cursor-pointer focus:outline-none"
            title="Next"
          >
            <ArrowRight className="w-4 h-4 rotate-90" />
          </button>
        </div>
<div>
    <img src={Herosection} alt="" className="mt-[-80px]"/>
</div>
        {/* Product Spray Bottle Graphic */}

        {/* Right Side Main Headline & Action CTA */}
        <div className="absolute left-1/2 md:left-[42%] top-1/2 -translate-y-1/2 w-[90%] md:w-[52%] max-w-[650px] -translate-x-1/2 md:translate-x-0 z-30 pointer-events-auto">
          
          {/* Main Headline (Straddling across split layout) */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extralight text-white leading-[1.05] tracking-tight drop-shadow-md">
            {activeSlide.title}
          </h2>

          {}
          <div className="mt-8 sm:mt-12">
            <button 
              onClick={() => setCartCount(cartCount + 1)}
              className="group inline-flex items-center gap-4 bg-[#F5F5F0] hover:bg-white text-gray-900 px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-sans tracking-wide transition-all duration-300 shadow-xl cursor-pointer hover:shadow-2xl hover:translate-x-1"
            >
              <span>Shop now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 transition-transform group-hover:translate-x-1.5" />
            </button>
          </div>

        </div>

      </main>

      {/* Mobile Slider Controls Bottom Bar */}
      <div className="sm:hidden relative z-30 flex items-center justify-between px-6 pb-6 text-white">
        <button 
          onClick={handlePrevSlide} 
          className="p-2 bg-black/20 rounded-full backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-xs font-sans tracking-widest text-white/80">
          0{currentSlide + 1} / 0{SLIDES.length}
        </div>
        <button 
          onClick={handleNextSlide} 
          className="p-2 bg-black/20 rounded-full backdrop-blur-sm"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}