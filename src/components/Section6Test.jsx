"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
const Section6Test = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <div className="w-full h-full flex max-sm:flex-col justify-between  py-10 max-sm:py-5">
        <div className="w-[40%] h-full max-sm:w-full px-20 sticky top-20 max-sm:relative max-sm:mb-30 ">
          <h1 className="text-6xl max-sm:text-4xl text-black font-bold">
            Our <br  className="max-sm:hiddem"/>
            services
          </h1>
        </div>
        <div className="w-[60%] max-sm:w-full px-10">
       
          <div  className="w-full p-4 group rounded-2xl border border-black flex flex-col gap-10 hover:rotate-4 hover:bg-[#510ADD] transition-all duration-300 mb-3 z-[1] sticky top-10 bg-white">
            <div className="flex justify-between">
              <div>
                <h4 className="text-black group-hover:text-white">01</h4>
                <h2 className="text-black group-hover:text-white font-medium text-4xl">
                  Voice Support
                </h2>
              </div>
              <div>
                <Image
                  src="/images/headphones.svg"
                  alt="headphones"
                  width={150}
                  height={150}
                  className="-mt-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
                />
              </div>
            </div>
            <p className="text-black group-hover:text-white">
              Get round-the-clock customer support from the top BPO agency,
              ready to tackle any query, serve your customers, and adapt to new
              challenges.
            </p>
          </div>
         
          <div  className="w-full p-4 group rounded-2xl border border-black flex flex-col gap-10 -rotate-2 hover:-rotate-4 hover:bg-[#E73C5F] transition-all duration-300 mb-3 z-[2] sticky top-15 bg-white">
            <div className="flex justify-between">
              <div>
                <h4 className="text-black group-hover:text-white">01</h4>
                <h2 className="text-black group-hover:text-white font-medium text-4xl">
                  Voice Support
                </h2>
              </div>
              <div>
                <Image
                  src="/images/headphones.svg"
                  alt="headphones"
                  width={150}
                  height={150}
                  className="-mt-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
                />
              </div>
            </div>
            <p className="text-black group-hover:text-white">
              Get round-the-clock customer support from the top BPO agency,
              ready to tackle any query, serve your customers, and adapt to new
              challenges.
            </p>
          </div>
          
          <div  className="w-full p-4 group rounded-2xl border border-black flex flex-col gap-10 hover:rotate-4 hover:bg-[#510ADD] transition-all duration-300 mb-3 z-[3] sticky top-20 bg-white">
            <div className="flex justify-between">
              <div>
                <h4 className="text-black group-hover:text-white">01</h4>
                <h2 className="text-black group-hover:text-white font-medium text-4xl">
                  Voice Support
                </h2>
              </div>
              <div>
                <Image
                  src="/images/headphones.svg"
                  alt="headphones"
                  width={150}
                  height={150}
                  className="-mt-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
                />
              </div>
            </div>
            <p className="text-black group-hover:text-white">
              Get round-the-clock customer support from the top BPO agency,
              ready to tackle any query, serve your customers, and adapt to new
              challenges.
            </p>
          </div>
         
          <div  className="w-full p-4 group rounded-2xl border border-black flex flex-col gap-10 -rotate-2 hover:-rotate-4 hover:bg-[#E73C5F] transition-all duration-300 mb-3 z-[4] sticky top-25 bg-white">
            <div className="flex justify-between">
              <div>
                <h4 className="text-black group-hover:text-white">01</h4>
                <h2 className="text-black group-hover:text-white font-medium text-4xl">
                  Voice Support
                </h2>
              </div>
              <div>
                <Image
                  src="/images/headphones.svg"
                  alt="headphones"
                  width={150}
                  height={150}
                  className="-mt-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
                />
              </div>
            </div>
            <p className="text-black group-hover:text-white">
              Get round-the-clock customer support from the top BPO agency,
              ready to tackle any query, serve your customers, and adapt to new
              challenges.
            </p>
          </div>
          
          <div  className="w-full p-4 group rounded-2xl border border-black flex flex-col gap-10 hover:rotate-4 hover:bg-[#510ADD] transition-all duration-300 mb-3   z-[5] sticky top-30 bg-white">
            <div className="flex justify-between">
              <div>
                <h4 className="text-black group-hover:text-white">01</h4>
                <h2 className="text-black group-hover:text-white font-medium text-4xl">
                  Voice Support
                </h2>
              </div>
              <div>
                <Image
                  src="/images/headphones.svg"
                  alt="headphones"
                  width={150}
                  height={150}
                  className="-mt-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
                />
              </div>
            </div>
            <p className="text-black group-hover:text-white">
              Get round-the-clock customer support from the top BPO agency,
              ready to tackle any query, serve your customers, and adapt to new
              challenges.
            </p>
          </div>
         
          <div  className="w-full p-4 group rounded-2xl border border-black flex flex-col gap-10 -rotate-2 hover:-rotate-4 hover:bg-[#E73C5F] transition-all duration-300 mb-3 z-[6] sticky top-35 bg-white">
            <div className="flex justify-between">
              <div>
                <h4 className="text-black group-hover:text-white">01</h4>
                <h2 className="text-black group-hover:text-white font-medium text-4xl">
                  Voice Support
                </h2>
              </div>
              <div>
                <Image
                  src="/images/headphones.svg"
                  alt="headphones"
                  width={150}
                  height={150}
                  className="-mt-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
                />
              </div>
            </div>
            <p className="text-black group-hover:text-white">
              Get round-the-clock customer support from the top BPO agency,
              ready to tackle any query, serve your customers, and adapt to new
              challenges.
            </p>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Section6Test;
