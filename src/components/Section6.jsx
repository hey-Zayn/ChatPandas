"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef, useCallback } from "react";

// Data constants for better maintainability
const SERVICES_DATA = [
  {
    id: 1,
    title: "SEO & Lead Generation",
    description: "Get to the Top Page of Search Engines: With targeted Revenue growth."
  },
  {
    id: 2,
    title: "Paid Marketing Media & CRO",
    description: "Simplify complaint resolution, boost customer support, generate leads, and enhance sales through our live chat assistance."
  },
  {
    id: 3,
    title: "IT & Development Technology",
    description: "Help your clients understand their problems and provide effective solutions."
  },
  {
    id: 4,
    title: "Business Servicing",
    description: "Our top tier technical expertise in BPO outsourcing helps you tackle tough problems, improve efficiency and expand customer base."
  },
  {
    id: 5,
    title: "AI Development",
    description: "Drive business growth by expanding your customer base through targeted strategies that effectively connect you with potential clients, unlocking new opportunities for success."
  }
];

const Section6 = () => {
  const cardRefs = useRef([]);
  const imgRefs = useRef([]);
  const stickyTitleRef = useRef(null);
  const scrollTriggers = useRef([]);

  // Register GSAP plugin once
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const endPosition = useCallback((lastCard) => {
    if (!lastCard) return 0;
    const lastCardOffset = lastCard.offsetTop;
    const totalStackHeight = 0.6 - 5 * 30; // 5 cards * 30px
    return Math.min(
      lastCardOffset + totalStackHeight,
      document.body.scrollHeight - 200
    );
  }, []);

  // Setup animations
  useEffect(() => {
    const lastCard = cardRefs.current[cardRefs.current.length - 1];
    if (!lastCard || !stickyTitleRef.current) return;

    // Sticky title animation
    const stickyAnim = gsap.to(stickyTitleRef.current, {
      scrollTrigger: {
        trigger: stickyTitleRef.current,
        start: window.innerWidth < 640 ? "top top-=80" : "top top+=100",
        end: endPosition(lastCard),
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
      y: 120, // (5 - 1) * 30
      zIndex: 6,
    });

    // Card animations
    const cardAnims = cardRefs.current.map((card, index) => 
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top top+=100",
          end: endPosition(lastCard),
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
        y: index === 4 ? 0 : index * 30,
        rotation: index === 4 ? 0 : (index % 2 === 0 ? -5 : 5),
        zIndex: index + 1,
      })
    );

    // Mouse interactions
    const mouseHandlers = cardRefs.current.map((card, index) => {
      const img = imgRefs.current[index];
      
      const handleMouseEnter = () => {
        gsap.to(img, {
          opacity: 1,
          scale: 1.2,
          rotate: index % 2 === 0 ? 10 : -10,
          y: -20,
          x: -10,
          duration: 0.3
        });
        gsap.to(card, {
          backgroundColor: index % 2 === 0 ? "rgb(24, 4, 181)" : "rgb(222, 31, 98)",
          borderColor: "black",
          color: "white",
          rotate: index % 2 === 0 ? 5 : -5,
          duration: 0.3
        });
      };

      const handleMouseLeave = () => {
        gsap.to(img, { 
          scale: 1, 
          opacity: 0, 
          rotate: 0, 
          x: 0,
          duration: 0.3 
        });
        gsap.to(card, {
          backgroundColor: "rgb(238,228,210)",
          borderColor: "black",
          color: "black",
          rotate: index % 2 === 0 ? 4 : -4,
          duration: 0.3
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return { handleMouseEnter, handleMouseLeave };
    });

    // Cleanup
    return () => {
      stickyAnim.kill();
      cardAnims.forEach(anim => anim.kill());
      mouseHandlers.forEach(({ handleMouseEnter, handleMouseLeave }, index) => {
        const card = cardRefs.current[index];
        card?.removeEventListener("mouseenter", handleMouseEnter);
        card?.removeEventListener("mouseleave", handleMouseLeave);
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [endPosition]);

  return (
    <div className="pb-[3%] w-full pt-[10%] overflow-hidden bg-[rgb(238,228,210)]">
      <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row lg:flex-row gap-[2%] max-sm:gap-4">
        <div className="w-[30%] h-20 m-[4%] mr-0">
          <h1
            ref={stickyTitleRef}
            className="z-20 p-4 pt-0 pb-0 mt-6 outline-none border-none 
            text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
            font-bold text-black"
          >
            Our Services
          </h1>
        </div>
        <div className="flex flex-col h-full w-[80%] m-[4%] text-black">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardRefs.current[index] = el}
              className="Scard flex-grow-1 card_sticky border-solid border-[1px] bg-[rgb(238,228,210)] border-black rounded-lg m-6 w-[100%] h-full sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] 2xl:w-[95%] z-[1]"
            >
              <div className="flex justify-between">
                <div className="w-full">
                  <h6 className="p-6 pb-1">{`0${service.id}`}</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                    {service.title}
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    ref={el => imgRefs.current[index] = el}
                    src="/images/headphones.svg"
                    alt="headphones"
                    width={150}
                    height={150}
                    className="-mt-[20%] will-change-transform opacity-0"
                    priority={index === 0}
                  />
                </div>
              </div>
              <p className="p-6 pt-5 max-sm:pt-0 pb-3 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
