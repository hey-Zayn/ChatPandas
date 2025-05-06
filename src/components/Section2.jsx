"use client";
import React, { useRef, useCallback } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section2 = () => {
  const section2Ref = useRef(null);
  const section2TextRef = useRef(null);
  const section2ButtonRef = useRef(null);
  
  // Memoize animation setup to prevent unnecessary recalculations
  const setupAnimations = useCallback(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Create a single timeline for better performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        once: true // Only trigger once for better performance
      }
    });
    
    // Batch animations for better performance
    tl.from([section2TextRef.current, section2ButtonRef.current], {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out",
      clearProps: "transform" // Clean up transforms after animation
    });

    // Optimize wavy images animation
    const wavyImages = document.querySelectorAll("#wavy");
    
    // Use a single ScrollTrigger for all images
    ScrollTrigger.create({
      trigger: section2Ref.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        // Calculate position based on scroll progress
        const progress = self.progress;
        const startX = window.innerWidth;
        const endX = -window.innerWidth - 300;
        const totalDistance = startX - endX;
        
        // Apply transform directly for better performance
        wavyImages.forEach((img, index) => {
          const offset = index * -15;
          const x = startX + offset - (progress * totalDistance);
          img.style.transform = `translateX(${x}px)`;
        });
      }
    });
  }, []);

  // Use GSAP with dependency on setupAnimations
  useGSAP(() => {
    setupAnimations();
  }, [setupAnimations]);

  return (
    <>
      <div ref={section2Ref} className="w-full h-screen max-sm:h-[70vh] relative flex flex-col justify-center items-center bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
        <span className="size-300 absolute top-[4%] left-[50%] rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
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
          {/* Preload images with loading="lazy" for better performance */}
          <img id="wavy" src="/images/wavy.avif" alt="" loading="lazy" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" loading="lazy" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" loading="lazy" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" loading="lazy" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" loading="lazy" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" loading="lazy" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" loading="lazy" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
          <img id="wavy" src="/images/wavy.avif" alt="" loading="lazy" style={{ filter: "brightness(0) invert(1)" }} className="w-full" />
        </div>
      </div>
    </>
  )
}

export default Section2