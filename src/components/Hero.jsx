"use client"
import React, { useRef, useCallback } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const heroRef = useRef(null);
  const headingRefs = useRef({
    heading1: null,
    heading2: null,
    heading3: null,
    subHeading1: null,
    subHeading2: null,
    subHeading3: null
  });

  // Memoize animation setup to prevent unnecessary recalculations
  const setupAnimations = useCallback(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Create a single timeline for better performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        once: true // Only trigger once for better performance
      }
    });

    // Batch animations for better performance
    const elements = [
      headingRefs.current.heading1,
      headingRefs.current.heading2,
      headingRefs.current.heading3,
      headingRefs.current.subHeading1,
      headingRefs.current.subHeading2,
      headingRefs.current.subHeading3
    ].filter(Boolean); // Filter out any null refs

    // Animate all elements with stagger for better performance
    tl.from(elements, {
      y: -100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
      clearProps: "transform" // Clean up transforms after animation for better performance
    });
  }, []);

  // Use GSAP with dependency on setupAnimations
  useGSAP(() => {
    setupAnimations();
  }, [setupAnimations]);

  return (
    <div ref={heroRef} className='w-full h-screen relative pt-10'>
      <div className="w-full h-screen flex flex-col justify-between relative z-10 py-20">
        <div className="w-full px-20 py-4 max-sm:py-2 max-sm:px-6 flex justify-end max-sm:justify-start gap-0">
          <div className="flex flex-col">
            <div className="overflow-hidden">
              <h3 ref={el => headingRefs.current.heading1 = el} className="text-white text-left uppercase text-3xl max-sm:text-[22px] leading-none">
                Redefining CX
              </h3>
            </div>
            <div className="overflow-hidden">
              <h3 ref={el => headingRefs.current.heading2 = el} className="text-white uppercase text-3xl max-sm:text-[22px] leading-none">
                standards through our
              </h3>
            </div>
            <div className="overflow-hidden">
              <h3 ref={el => headingRefs.current.heading3 = el} className="text-white uppercase font-extrabold text-3xl max-sm:text-[22px] leading-none">
                Top-Tier BPO compANY
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full px-40 max-sm:px-10 py-4 flex justify-start gap-0 max-sm:mt-50">
          <div className="flex flex-col">
            <div className="overflow-hidden">
              <h3 ref={el => headingRefs.current.subHeading1 = el} className="text-white uppercase text-6xl max-md:text-4xl max-sm:text-3xl font-bold leading-none text-right ml-20 max-sm:ml-10">
                Building
              </h3>
            </div>
            <div className="overflow-hidden">
              <h3 ref={el => headingRefs.current.subHeading2 = el} className="text-white uppercase text-6xl max-md:text-4xl max-sm:text-3xl font-bold leading-none">
                Meaningful
              </h3>
            </div>
            <div className="overflow-hidden">
              <h3 ref={el => headingRefs.current.subHeading3 = el} className="text-white uppercase font-bold max-md:text-4xl max-sm:text-3xl text-6xl leading-none text-right ml-20 max-sm:ml-10">
                Connections
              </h3>
            </div>
          </div>
        </div>
      </div>

      <video
        src="/videos/my.mp4"
        className="absolute top-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        fetchPriority="high"
      />
    </div>
  )
}

export default Hero