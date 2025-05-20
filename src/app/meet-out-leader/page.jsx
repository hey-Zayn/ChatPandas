"use client";

import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BusinessOperations from "@/components/Business-operations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import Link from "next/link";
import ServiceForm from "@/components/ServiceForm";

const page = () => {
  const sectionRef = useRef(null);
  const mainHeading = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(mainHeading.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: mainHeading.current,
          start: "top 60%", // More precise start point
          toggleActions: "play none none none", // More interactive toggle actions
        },
      });
    },
    { scope: sectionRef }
  );



 

  return (
    <>
      <div ref={sectionRef} className="w-full h-full bg-[#191919]">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Meet Out Lead
            </h1>
          </div>
        </div>

        {/* --------------------------------  { Section 2 }  ------------------------------------------ */}

        <section className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                src="/images/sirAwais.jpg"
                className="object-cover object-center rounded w-full h-full"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
              Meet Out CEO 
              </h1>
              <h4 className="max-sm:text-xl text-xl mb-4 font-bold text-white/90">
              10+ Years/Fullstack Web Mentor/Sr. Software Engineer/Hiring Resource/JavaScript/PHP 
              </h4>
              <p className="mb-8 leading-relaxed">
                Hi, I’m Awais Sheikh, a Full-Stack Web Developer and the CEO &
                Founder at Forward Solutions, a USA-based digital tech agency.
                At Forward Solutions, we specialize in delivering innovative
                software development solutions to both national and
                international clients, ensuring high-quality results tailored to
                meet diverse business needs.
                <br />
                <br />
                With over 10+ years of experience in web development, I’ve
                worked with 300+ clients, and have trained nearly 10,000
                students in web technologies.
                <br /> <br />
                As a Full-Stack Web Trainer and Consultant, I’m passionate about
                empowering the next generation of developers with the skills and
                confidence they need to succeed. My expertise spans all major
                web development languages, making me a trusted resource for
                comprehensive software solutions and expert training.
              </p>
              
            </div>
          </div>
        </section>

  

       

      
       
        <ServiceForm/>
     

        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
