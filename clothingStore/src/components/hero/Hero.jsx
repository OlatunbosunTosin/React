import React, { use, useState } from "react";
import {Link} from "react-router";


const Hero = () => {
   return (
    <section className="bg-[#F2F0F1] w-full min-h-[calc(100vh-136px)] flex flex-col md:flex-row items-center px-4 sm:px-10 lg:px-24 py-10 md:py-0 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-start space-y-6 md:space-y-8 max-w-[600px] z-10">        
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-none uppercase">               
                FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Browse through our diverse range of meticlously crafted garments,
                designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="w-full sm:w-auto bg-black text-white px-14 py-4 rounded-full font-medium text-base hover:bg-gray-800 transition-colors">
                Shop Now
            </button>

            <div className="flex flex-wrap gap-8 pt-4 w-full justify-center sm:justify-start">
                <div>
                    <img
                    src="/icons/200PLUS.svg" />
            
                </div>
                <div className="border-l border-gray-300 pl-8">
                    <img
                    src="/icons/2000PLUS.svg" />
                </div>
                <div className="border-l border-gray-300 pl-8">
                    <img
                    src="/icons/30000PLUS.svg" />
                </div>
            </div>
        </div>
        
        <div className="flex-1 w-full h-full relative mt-10 md:mt-0 flex justify-center items-end self-end">
            <img 
            src="/bgImg/Home-Screen-bg.jpg" 
            className="w-full max-w-[500px] md:max-w-none lg:max-w-[650px] object-contain object-bottom" 
            alt="Models wearing Shop.co clothing" 
            />
        
            <img src="/icons/small-diamond.svg" className="absolute top-1/3 left-10 w-8 h-8 md:w-14 md:h-14 animate-pulse" alt="sparkle" />
            <img src="/icons/small-diamond.svg" className="absolute top-10 right-4 w-14 h-14 md:w-20 md:h-20 animate-pulse" alt="sparkle" />
        </div>
    </section>
   )
}

export default Hero;