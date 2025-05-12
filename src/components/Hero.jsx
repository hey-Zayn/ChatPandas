"use client"
import React, { useRef, useCallback } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once at module level
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const headingRefs = useRef({});
  
  // Memoized animation setup with reduced complexity
  const setupAnimations = useCallback(() => {
    const elements = [
      'heading1', 'heading2', 'heading3',
      'subHeading1', 'subHeading2', 'subHeading3'
    ].map(key => headingRefs.current[key]).filter(Boolean);

    if (!elements.length) return;

    gsap.from(elements, {
      y: -100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        once: true
      },
      clearProps: "transform"
    });
  }, []);

  // Optimized GSAP hook usage
  useGSAP(setupAnimations, { scope: heroRef });

  // Memoized ref setter function
  const setHeadingRef = useCallback((key) => (el) => {
    headingRefs.current[key] = el;
  }, []);

  return (
    <div ref={heroRef} className='w-full h-screen relative pt-10'>
      <div className="w-full h-screen flex flex-col justify-between relative z-10 py-20">
        <div className="w-full px-20 py-4 max-sm:py-2 max-sm:px-6 flex justify-end max-sm:justify-start gap-0">
          <div className="flex flex-col">
            {['heading1', 'heading2', 'heading3'].map((key, i) => (
              <div key={i} className="overflow-hidden">
                <h3 
                  ref={setHeadingRef(key)}
                  className="text-white text-left uppercase text-3xl max-sm:text-[22px] leading-none"
                >
                  {[
                    'Redefining CX',
                    'standards through our',
                    'Top-Tier BPO compANY'
                  ][i]}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full px-40 max-sm:px-10 py-4 flex justify-start gap-0 max-sm:mt-50">
          <div className="flex flex-col">
            {['subHeading1', 'subHeading2', 'subHeading3'].map((key, i) => (
              <div key={i} className="overflow-hidden">
                <h3 
                  ref={setHeadingRef(key)}
                  className={`text-white uppercase font-bold text-6xl max-md:text-4xl max-sm:text-3xl leading-none ${
                    i % 2 === 0 ? 'text-right ml-20 max-sm:ml-10' : ''
                  }`}
                >
                  {['Building', 'Meaningful', 'Connections'][i]}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optimized video element */}
      <video
        src="/videos/my.mp4"
        className="absolute top-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        fetchPriority="high"
        aria-label="Background video"
        // Add these for better performance
        disablePictureInPicture
        disableRemotePlayback
      />
    </div>
  )
}

export default React.memo(Hero);