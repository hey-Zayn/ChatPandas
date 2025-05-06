"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection2 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const charsRef = useRef([]);
  const tlRef = useRef(null);

  useEffect(() => {
    const createAnimation = () => {
      if (tlRef.current) tlRef.current.kill();
      charsRef.current = []; // Reset chars array

      // Split text manually into spans
      const text = textRef.current.textContent;
      textRef.current.innerHTML = '';
      const chars = text.split('');
      
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.color = '#ffffff50';
        // Preserve spaces
        if (char === ' ') span.innerHTML = '&nbsp;';
        textRef.current.appendChild(span);
        charsRef.current.push(span);
      });

      // Create isolated animation scope
      const ctx = gsap.context(() => {
        tlRef.current = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 0.5,
            markers: false,
            id: "text-section" // Unique ID
          },
        });

        charsRef.current.forEach((char, i) => {
          tlRef.current.to(char, {
            color: '#ffffff',
            duration: 0.1,
          }, i * 0.05);
        });
      }, sectionRef);

      return () => ctx.revert();
    };

    createAnimation();
    const handleResize = () => {
      gsap.delayedCall(0.2, createAnimation);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (tlRef.current) tlRef.current.kill();
      gsap.context(() => {}, sectionRef).revert(); // Cleanup all animations
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-black flex flex-col justify-center items-center"
    >
    
      <h2
        ref={textRef}
        className="wrapper text-white/50 text-4xl md:text-6xl text-center font-bold px-4 md:px-20"
      >
        I'm a passionate developer with expertise in web technologies, dedicated to creating innovative digital solutions that drive business success.
      </h2>
    </div>
  );
};

export default PortfolioSection2;