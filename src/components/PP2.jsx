"use client";
import React, { useRef, useCallback } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PP2 = () => {
  const section2Ref = useRef(null);
  const section2TextRef = useRef(null);
  const section2ButtonRef = useRef(null);
  
  // Memoize the animation setup to prevent unnecessary recreations
  const setupAnimations = useCallback(() => {
    if (!section2Ref.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Create a single timeline for text and button animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        // Use once: true to prevent re-triggering
        once: true
      }
    });
    
    // Batch animations together
    tl.from([section2TextRef.current, section2ButtonRef.current], {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2
    });

    // Optimize wavy images animation
    const wavyImages = gsap.utils.toArray("#wavy");
    
    // Use a single timeline for all wavy images
    const wavyTl = gsap.timeline();
    
    // Batch process images with reduced calculations
    wavyImages.forEach((img, index) => {
      gsap.fromTo(img, 
        { x: window.innerWidth + (index * -15) }, 
        {
          x: -window.innerWidth - 300,
          ease: "none",
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            // Use invalidateOnRefresh: false to reduce recalculations
            invalidateOnRefresh: false
          }
        }
      );
    });
    
    // Return cleanup function
    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      wavyTl.kill();
      wavyImages.forEach(img => {
        const st = ScrollTrigger.getById(img);
        st && st.kill();
      });
    };
  }, []);
  
  // Use useGSAP with the memoized setup function
  useGSAP(setupAnimations, []);
  
  return (
    <>
      <div 
        ref={section2Ref} 
        className="w-full h-screen max-sm:h-[70vh] relative flex flex-col justify-center items-center bg-black overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Reduced number of gradient spans and simplified animations */}
          <span className="size-[400px] absolute top-[15%] left-[50%] translate-x-[-50%] rounded-full bg-[radial-gradient(circle_at_center,#A63C79_20%,transparent_75%)] blur-[90px] opacity-85"></span>
          <span className="size-[350px] absolute top-[25%] right-[25%] rounded-full bg-[radial-gradient(circle_at_center,#8A2BE2_15%,transparent_75%)] blur-[100px] opacity-75"></span>
          <span className="size-[300px] absolute bottom-[20%] left-[25%] rounded-full bg-[radial-gradient(circle_at_center,#520ADE_10%,transparent_70%)] blur-[70px] opacity-65"></span>
        </div>
        
        <div className="z-10 px-4">
          <h1 
            ref={section2TextRef} 
            className="text-4xl max-sm:text-2xl font-normal text-white/90 text-center"
          >
            As the top BPO agency, we manage <br className="max-sm:hidden" />
            and handle your support tasks <span className="font-bold">so</span>
            <br className="max-sm:hidden" />
            <span className="font-bold"> you can focus on your core business.</span>
          </h1>
        </div>
        
        <button 
          ref={section2ButtonRef} 
          className="text-white/80 border border-white px-4 py-2 font-semibold rounded-md mt-16 mb-30 z-10 cursor-pointer"
        >
          Get in Touch
        </button>
        
        <div className="w-full max-sm:w-[300%] flex justify-center max-sm:justify-center items-center max-sm:items-start absolute top-[75%]">
          {/* Use loading="lazy" for images that are not immediately visible */}
          {[...Array(8)].map((_, index) => (
            <img 
              key={index}
              id="wavy" 
              src="/images/wavy.avif" 
              alt="" 
              style={{ filter: "brightness(0) invert(0)" }} 
              className="w-full"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PP2;