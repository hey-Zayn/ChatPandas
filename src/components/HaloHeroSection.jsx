'use client'; // Required for GSAP animations

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HaloHeroSection = () => {
  const containerRef = useRef();
  const haloRef = useRef();
  const contentRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial setup
    gsap.set([haloRef.current, contentRef.current], { opacity: 0, y: 20 });
    gsap.set(textRef.current, { opacity: 0, y: 20 });

    // Animation timeline with ScrollTrigger
    const tl = gsap.timeline({
      defaults: { ease: 'bounce.out'},
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%', 
        end: 'top 20%',   
       
        toggleActions: 'play none none none' 
      }
    });

    // Halo animation
    tl.to(haloRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
    // Text reveal animation
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.5')
    // Content fade in
    .to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.3');
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Large background text */}
      <h1 
        ref={haloRef}
        className="absolute text-[20vw] md:text-[15vw] lg:text-[20vw] font-bold tracking-tighter text-white/5 z-0 pointer-events-none select-none"
      >
        FORWORD
      </h1>
      
      {/* Centered content */}
      <div 
        ref={contentRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <p ref={textRef} className="text-lg md:text-xl lg:text-4xl font-medium text-white">
          We're Forword Sols. We specialize in cutting-edge web development, mobile app solutions, and digital transformation services to propel businesses forward.
        </p>
      </div>
    </section>
  );
};

export default HaloHeroSection;