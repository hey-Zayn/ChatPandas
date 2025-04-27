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



  

  const FAQS = [
    {
      title: "What is landing page optimization?",
      dis: "Landing page optimization involves designing and improving a landing page to increase its effectiveness in converting visitors into leads or customers. This includes enhancing elements such as content, layout, call-to-action buttons, and SEO strategies to improve user experience and drive better results.",
    },
    {
      title: "Why is landing page optimization important for my business?",
      dis: "Optimizing your landing pages helps ensure that they are aligned with your business goals and target audience. It can significantly increase conversion rates, improve search engine rankings, and drive more qualified traffic to your site, leading to better overall business performance.",
    },

    {
      title: "How does landing page optimization affect SEO?",
      dis: "Proper optimization of landing pages includes implementing SEO best practices such as keyword-rich content, meta tags, and proper HTML structure. This helps improve your landing page’s visibility in search engine results, leading to higher rankings and increased organic traffic.",
    },


    {
      title: "How long does it take to see results from landing page optimization?",
      dis: "The timeframe for seeing results can vary depending on several factors, including the competitiveness of your industry, the effectiveness of the optimization strategies, and the existing performance of your landing page. Generally, you can start seeing improvements in traffic and conversion rates within a few weeks to a few months.",
    },

    {
      title: "How long does it take to see results from landing page optimization?",
      dis: "The timeframe for seeing results can vary depending on several factors, including the competitiveness of your industry, the effectiveness of the optimization strategies, and the existing performance of your landing page. Generally, you can start seeing improvements in traffic and conversion rates within a few weeks to a few months.",
    },
  ];

 

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
              Have Questions
            </h1>
           
          </div>
        </div>

        {/* --------------------------------  { Section 2 }  ------------------------------------------ */}



        {/* --------------------------------  { Section 3 }  ------------------------------------------ */}





        <section className="w-full min-h-screen flex max-sm:flex-col justify-center max-sm:gap-4 px-4 py-4 text-white">
          <div className="w-full max-w-4xl px-8 space-y-4">
            <h1 className="text-white text-5xl max-sm:text-2xl">General Questions</h1>
            <p className="text-2xl max-sm:text-base text-white">
              If you have questions, we have answers for you here. In case we don't, please feel  free to reach out to us here 
              <span className="font-semibold text-white"> contact@me.com</span> 
            </p>
          </div>
          <div className="w-full max-w-4xl px-4">
            {FAQS?.map((card, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full space-y-4"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-white text-xl md:text-2xl max-sm:text-base hover:no-underline bg-black/80 px-8  hover:text-pink-800 cursor-pointer mb-4">
                    {card.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-white/90 md:text-lg">
                    {card.dis}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>


        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
