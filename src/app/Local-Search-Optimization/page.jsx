"use client";
import WhyChooseus from "@/components/WhyChooseus";
import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BusinessOperations from "@/components/Business-operations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NotepadText } from "lucide-react";

import { useGSAP } from "@gsap/react";

const SearchEngineOptimization = () => {
  const sectionRef = useRef(null);
  const mainHeading = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
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
       
      }
    });
  }, { scope: sectionRef }); 




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

  

  const SeoCards = [
    {
      title: "SEO Audits",
      dis: "In the fast-paced digital marketplace, visibility is everything. Corecentrix Business Solutions stands at the forefront of SEO excellence, empowering businesses across the USA to dominate search engine rankings",
      act1: "Troubleshooting & Maintenance",
      acdis1:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act2: "Troubleshooting & Maintenance",
      acdis2:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act3: "Troubleshooting & Maintenance",
      acdis3:
        "Quickly resolve technical issues to keep systems running smoothly.",
      vid: "https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F677e54df9f00f216d88f0bf5_Chat%20Pandas%202-transcode.mp4",
    },
    {
      title: "On-Page Technical SEO",

      dis: "In the fast-paced digital marketplace, visibility is everything. Corecentrix Business Solutions stands at the forefront of SEO excellence, empowering businesses across the USA to dominate search engine rankings",
      act1: "Troubleshooting & Maintenance",
      acdis1:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act2: "Troubleshooting & Maintenance",
      acdis2:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act3: "Troubleshooting & Maintenance",
      acdis3:
        "Quickly resolve technical issues to keep systems running smoothly.",
      vid: "https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F677e54df9f00f216d88f0bf5_Chat%20Pandas%202-transcode.mp4",
    },
    {
      title: "Off-Page SEO",
      dis: "In the fast-paced digital marketplace, visibility is everything. Corecentrix Business Solutions stands at the forefront of SEO excellence, empowering businesses across the USA to dominate search engine rankings",
      act1: "Troubleshooting & Maintenance",
      acdis1:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act2: "Troubleshooting & Maintenance",
      acdis2:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act3: "Troubleshooting & Maintenance",
      acdis3:
        "Quickly resolve technical issues to keep systems running smoothly.",
      vid: "https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F677e54df9f00f216d88f0bf5_Chat%20Pandas%202-transcode.mp4",
    },
    {
      title: "Keyword Research",
      dis: "In the fast-paced digital marketplace, visibility is everything. Corecentrix Business Solutions stands at the forefront of SEO excellence, empowering businesses across the USA to dominate search engine rankings",
      act1: "Troubleshooting & Maintenance",
      acdis1:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act2: "Troubleshooting & Maintenance",
      acdis2:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act3: "Troubleshooting & Maintenance",
      acdis3:
        "Quickly resolve technical issues to keep systems running smoothly.",
      vid: "https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F677e54df9f00f216d88f0bf5_Chat%20Pandas%202-transcode.mp4",
    },
    {
      title: "Content Creation & Optimization",
      dis: "In the fast-paced digital marketplace, visibility is everything. Corecentrix Business Solutions stands at the forefront of SEO excellence, empowering businesses across the USA to dominate search engine rankings",
      act1: "Troubleshooting & Maintenance",
      acdis1:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act2: "Troubleshooting & Maintenance",
      acdis2:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act3: "Troubleshooting & Maintenance",
      acdis3:
        "Quickly resolve technical issues to keep systems running smoothly.",
      vid: "https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F677e54df9f00f216d88f0bf5_Chat%20Pandas%202-transcode.mp4",
    },
    {
      title: "Link Building",
      dis: "In the fast-paced digital marketplace, visibility is everything. Corecentrix Business Solutions stands at the forefront of SEO excellence, empowering businesses across the USA to dominate search engine rankings",
      act1: "Troubleshooting & Maintenance",
      acdis1:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act2: "Troubleshooting & Maintenance",
      acdis2:
        "Quickly resolve technical issues to keep systems running smoothly.",
      act3: "Troubleshooting & Maintenance",
      acdis3:
        "Quickly resolve technical issues to keep systems running smoothly.",
      vid: "https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F677e54df9f00f216d88f0bf5_Chat%20Pandas%202-transcode.mp4",
    },
  ];

  const seoServices = [
    {
      img: <NotepadText />,
      title: "SEO Audits",
    },
    {
      img: <NotepadText />,
      title: "SEO Audits",
    },
    {
      img: <NotepadText />,
      title: "SEO Audits",
    },
    {
      img: <NotepadText />,
      title: "SEO Audits",
    },
    {
      img: <NotepadText />,
      title: "SEO Audits",
    },
    {
      img: <NotepadText />,
      title: "SEO Audits",
    },
  ];

  return (
    <>
      <div ref={sectionRef} className="w-full h-full bg-[#191919]">
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1 ref={mainHeading} className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10">
            Local Search Optimization
            </h1>
          </div>
        </div>

        <section className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 md:flex-row flex-col items-center">
            <div  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3956e49d8a96e28ec7e12_111-transcode.mp4"
                className="object-cover object-center rounded w-full h-full"
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Get to the Top Page of Search Engines
                {/* <br className="hidden lg:inline-block" /> */}
                With Targeted Revenue Growth
              </h1>
              <p className="mb-8 leading-relaxed">
                In the fast-paced digital marketplace, visibility is everything.
                Corecentrix Business Solutions stands at the forefront of SEO
                excellence, empowering businesses across the USA to dominate
                search engine rankings and achieve unparalleled revenue growth.
                Our expert SEO strategies are not just about climbing to the top
                page—they're about driving measurable results that translate
                into tangible profits for your business.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                  Connect Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Get to the Top Page of Search Engines:
                {/* <br className="hidden lg:inline-block" /> */}
                With targeted Revenue growth
              </h1>
              <p className="mb-8 leading-relaxed">
                In the fast-paced digital marketplace, visibility is everything.
                Corecentrix Business Solutions stands at the forefront of SEO
                excellence, empowering businesses across the USA to dominate
                search engine rankings and achieve unparalleled revenue growth.
                Our expert SEO strategies are not just about climbing to the top
                page—they’re about driving measurable results that translate
                into tangible profits for your business.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                  Connect Now
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a39584ddade41b9a8d626c_222-transcode.mp4"
                className="object-cover object-center rounded"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>
        </section>

        

        <section className="container mx-auto w-full py-12 px-8 md:px-6">
          <h1 className="text-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold py-20 mb-10 max-sm:py-6  ">
            Our Core SEO Services
          </h1>

          {SeoCards?.map((card, idx) => (
            <div
              className="w-full text-white body-font mb-16 md:mb-24"
              key={idx}
            >
              <div
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 md:gap-12 lg:gap-20 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <video
                    src={card.vid}
                    className="object-cover object-center rounded w-full h-full"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-white">
                    {card.title}
                  </h2>
                  <p className="mb-6 md:mb-8 leading-relaxed">{card.dis}</p>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-5"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl md:text-2xl lg:text-3xl hover:no-underline">
                        {card.act1}
                      </AccordionTrigger>
                      <AccordionContent className="text-base md:text-lg">
                        {card.acdis1}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-xl md:text-2xl lg:text-3xl hover:no-underline">
                        {card.act2}
                      </AccordionTrigger>
                      <AccordionContent className="text-base md:text-lg">
                        {card.acdis2}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-xl md:text-2xl lg:text-3xl hover:no-underline">
                        {card.act3}
                      </AccordionTrigger>
                      <AccordionContent className="text-base md:text-lg">
                        {card.acdis3}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
        </section>

       

        <BusinessOperations />
      </div>
    </>
  );
};

export default SearchEngineOptimization;


