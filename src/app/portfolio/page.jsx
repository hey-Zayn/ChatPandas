"use client";

import React, { useRef } from "react";

import BusinessOperations from "@/components/Business-operations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ServiceForm from "@/components/ServiceForm";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectFilterComponent from "@/components/ProjectFilterComponent";

import PortfolioHero from "@/components/PortolioHero";
import PortfolioSection2 from "@/components/PortfolioSection2";
import DesignerIntro from "@/components/DesignerIntro";
import HaloHeroSection from "@/components/HaloHeroSection";
import PortfolioServicesSection from "@/components/PortfolioServicesSection";


import InteractiveTimeline from "@/components/InteractiveTimeline";
import PP2 from "@/components/PP2";
import PPCP from "@/components/PPCP";




const page = () => {
 

  return (
    <>
      <div className="w-full h-full bg-[#191919]">
        <PortfolioHero/>
        <PP2/>
        {/* <PortfolioServicesSection/> */}
        {/* <DesignerIntro/> */}
        {/* <PPCP/> */}
       
        <InteractiveTimeline/>
        <section className="w-full h-full bg-black">
          <div>
            <ProjectFilterComponent/>
          </div>
        </section>
        <HaloHeroSection/>
  
        {/* <PortfolioSection2/> */}
       

       
        
        <ServiceForm />
        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
