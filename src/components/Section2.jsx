"use client";
import React, { useRef, useCallback, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section2 = () => {
  const section2Ref = useRef(null);
  const section2TextRef = useRef(null);
  const section2ButtonRef = useRef(null);
  const animationCtx = useRef(null);
  const wavyImagesRef = useRef([]);

  // Store wavy image references
  const setWavyImageRef = (index) => (el) => {
    wavyImagesRef.current[index] = el;
  };

  const setupAnimations = useCallback(() => {
    if (!section2Ref.current) return;

    // Clear previous animations
    if (animationCtx.current) {
      animationCtx.current.revert();
    }

    animationCtx.current = gsap.context(() => {
      // Main content animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          once: true
        }
      });

      tl.from([section2TextRef.current, section2ButtonRef.current], {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "transform"
      });

      // Wavy images animation
      if (wavyImagesRef.current.length > 0) {
        ScrollTrigger.create({
          trigger: section2Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const startX = window.innerWidth;
            const endX = -window.innerWidth - 300;
            const totalDistance = startX - endX;
            
            wavyImagesRef.current.forEach((img, index) => {
              if (img) {
                const offset = index * -15;
                const x = startX + offset - (progress * totalDistance);
                gsap.set(img, { x });
              }
            });
          }
        });
      }
    }, section2Ref);

    return () => {
      if (animationCtx.current) {
        animationCtx.current.revert();
      }
    };
  }, []);

  // Initialize animations
  useGSAP(setupAnimations, { scope: section2Ref });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationCtx.current) {
        animationCtx.current.revert();
      }
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={section2Ref} className="w-full h-screen max-sm:h-[70vh] relative flex flex-col justify-center items-center bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
      <span className="size-300 absolute top-[4%] left-[50%] rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
      <div className="z-10 px-4">
        <div>
          <h1 ref={section2TextRef} className="text-4xl max-sm:text-2xl font-normal text-white/90 text-center">
            As the top BPO agency, we manage <br className="max-sm:hidden" />
            and handle your support tasks <span className="font-bold">so</span>
            <br className="max-sm:hidden" />
            <span className="font-bold"> you can focus on your core business.</span>
          </h1>
        </div>
      </div>
      <button ref={section2ButtonRef} className="text-white/80 border border-white px-4 py-2 font-semibold rounded-md mt-16 mb-30 z-10 cursor-pointer hover:bg-white/10 transition-colors duration-300">
        Get in Touch
      </button>
      <div className="w-full max-sm:w-[300%] flex justify-center max-sm:justify-center items-center max-sm:items-start absolute top-[75%]">
        {[...Array(8)].map((_, index) => (
          <img 
            key={index}
            ref={setWavyImageRef(index)}
            src="/images/wavy.avif" 
            alt="" 
            loading="lazy" 
            className="w-full" 
            style={{ 
              filter: "brightness(0) invert(1)",
              willChange: "transform" // Optimize for animation
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;