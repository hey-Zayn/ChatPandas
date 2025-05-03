"use client";

import React, { useRef } from "react";

import BusinessOperations from "@/components/Business-operations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import ServiceForm from "@/components/ServiceForm";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectFilterComponent from "@/components/ProjectFilterComponent";
import ServiceComparison from "@/components/ServiceComparison";

const page = () => {
  const sectionRef = useRef(null);
  const herotextRef = useRef(null);
  const subtextRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const herotl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse",
        // scrub: true
      },
    });
    herotl.from(herotextRef.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "power4.out",
    })
    herotl.from(subtextRef.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "power4.out",
    })
  }, []);




  return (
    <>
      <div ref={sectionRef} className="w-full h-full bg-[#191919]">

        <div className="w-full h-full">
          <div className="w-full h-full relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden" >
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>

            <div className="flex flex-col mt-50 mb-15 z-10 px-4">
                <h2 ref={herotextRef} className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3">Showcasing our <br className="hidden sm:block"/>
                inspiring works</h2>
                <p ref={subtextRef} className="text-white text-base sm:text-lg md:text-xl text-center">Explore our creative works and success stories.</p>
            </div>
            <div>
              <HeroCarousel/>
            </div>
          </div>
        </div>


        <section className="w-full h-full">
          <div>
            <ProjectFilterComponent/>
          </div>
        </section>
        <ServiceComparison/> 
        

        <ServiceForm />
        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
