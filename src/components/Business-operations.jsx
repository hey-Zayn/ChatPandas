"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

export default function BusinessOperations() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Add animations to timeline
    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ctaRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2
        },
        "-=0.4"
      );

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center px-4">
      <div className="w-[95%] h-[70vh] relative flex flex-col  items-center bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden py-20">
        <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
        <div className="w-full h-full flex flex-col justify-center gap-4 px-4">
          <h1
            ref={headingRef}
            className="text-white text-center text-6xl max-sm:text-4xl font-medium z-10"
          >
            Ready to Enhance Your <br className="max-sm:hidden"/> <span className="font-bold">Business Operations?</span>
          </h1>
        <div ref={ctaRef} className="w-full text-center"> <Button  className="inline z-10   bg-white text-black font-bold  hover:text-white hover:bg-black">Contact us Today</Button></div>
        </div>
      </div>
    </div>
  );
}
