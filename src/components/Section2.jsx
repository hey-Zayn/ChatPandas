"use client";
import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section2 = () => {
  
  const section2Ref = useRef(null)
  const section2TextRef = useRef(null)
  const section2ButtonRef = useRef(null)
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none"
      }
    });
    
    tl.from(section2TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    tl.from(section2ButtonRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    const wavyImages = gsap.utils.toArray("#wavy");

    wavyImages.forEach((img, index) => {
      gsap.fromTo(img, {
        x: window.innerWidth + (index * -15)
        //   x: window.innerWidth   
      }, {
        x: -window.innerWidth - 300,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          // markers: false
        }
      });
    });
  }, []);
  return (
    <>
      <div ref={section2Ref} className="w-full h-screen max-sm:h-[70vh] relative flex flex-col justify-center items-center bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
        <span className="size-300 absolute top-[4%] left-[50%]  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
        <div className="z-10 px-4">
          <div className=''>
            <h1 ref={section2TextRef} className="text-4xl max-sm:text-2xl font-normal text-white/90 text-center">
              As the top BPO agency, we manage <br className="max-sm:hidden" />
              and handle your support tasks <span className="font-bold">so</span>
              <br className="max-sm:hidden" />

              <span className="font-bold"> you can focus on your core business.</span>
            </h1>
          </div>
        </div>
        <button ref={section2ButtonRef} className="text-white/80 border border-white px-4 py-2 font-semibold rounded-md mt-16 mb-30 z-10 cursor-pointer">
          Get in Touch
        </button>
        <div className="w-full max-sm:w-[300%] flex justify-center max-sm:justify-center items-center max-sm:items-start absolute top-[75%]">
          <img id="wavy" src="/images/wavy.avif" alt="" style={{ filter: "brightness(0) invert(1)" }} className="w-full " />
          <img id="wavy" src="/images/wavy.avif" alt="" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
        </div>
      </div>
    </>
  )
}

export default Section2