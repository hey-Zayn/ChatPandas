"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useMemo, useCallback } from "react";

const Section6 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const endPosition = useCallback((lastCard, cardSticky) => {
    const lastCardOffset = lastCard.offsetTop;
    const totalStackHeight = 0.6 - cardSticky.length * 30;
    return Math.min(
      lastCardOffset + totalStackHeight,
      document.body.scrollHeight - 200
    );
  }, []);

  useEffect(() => {
    const imgs = document.querySelectorAll(".Scard img");
    const cards = document.querySelectorAll(".Scard");
    const cardSticky = document.querySelectorAll(".card_sticky");
    const stickytitle = document.getElementById("sticky");
    const lastCard = cardSticky[cardSticky.length - 1];

    // Memoize GSAP animations
    const stickyTitleAnimation = gsap.to(stickytitle, {
      scrollTrigger: {
        trigger: stickytitle,
        start: window.innerWidth < 640 ? "top top-=80" : "top top+=100",
        end: endPosition(lastCard, cardSticky),
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
      y: (cardSticky.length - 1) * 30,
      zIndex: cardSticky.length + 1,
    });

    const cardAnimations = Array.from(cardSticky).map((card, index) => 
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top top+=100",
          end: endPosition(lastCard, cardSticky),
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
        y: index === cardSticky.length - 1 ? 0 : index * 30,
        rotation: index === cardSticky.length - 1 ? 0 : (index % 2 === 0 ? -5 : 5),
        zIndex: index + 1,
      })
    );

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    const eventListeners = Array.from(cards).map((card, index) => {
      const img = imgs[index];
      
      const handleMouseEnter = () => {
        gsap.to(img, {
          opacity: 1,
          scale: 1.2,
          rotate: index % 2 === 0 ? 10 : -10,
          y: -20,
          x: -10,
        });
        gsap.to(card, {
          backgroundColor: index % 2 === 0 ? "rgb(24, 4, 181)" : "rgb(222, 31, 98)",
          borderColor: "black",
          color: "white",
          rotate: index % 2 === 0 ? 5 : -5,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(img, { scale: 1, opacity: 0, rotate: 0, x: 0 });
        gsap.to(card, {
          backgroundColor: "rgb(238,228,210)",
          borderColor: "black",
          color: "black",
          rotate: index % 2 === 0 ? 4 : -4,
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return { card, handleMouseEnter, handleMouseLeave };
    });

    return () => {
      stickyTitleAnimation.kill();
      cardAnimations.forEach(anim => anim.kill());
      window.removeEventListener("resize", handleResize);
      eventListeners.forEach(({ card, handleMouseEnter, handleMouseLeave }) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [endPosition]);

  return (
    <div className="pb-[3%] w-full pt-[10%] overflow-hidden bg-[rgb(238,228,210)]">
      <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row lg:flex-row gap-[2%] max-sm:gap-4">
        <div className="w-[30%] h-20 m-[4%] mr-0">
          <h1
            id="sticky"
            className="z-20 p-4 pt-0 pb-0 mt-6 outline-none border-none 
            text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
            font-bold text-black"
          >
            Our Services
          </h1>
        </div>
        <div className="flex flex-col h-full w-[80%] m-[4%] text-black">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="Scard flex-grow-1 card_sticky border-solid border-[1px] bg-[rgb(238,228,210)] border-black rounded-lg m-6 w-[100%] h-full sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] 2xl:w-[95%] z-[1]"
            >
              <div className="flex justify-between">
                <div className="w-full">
                  <h6 className="p-6 pb-1">{`0${num}`}</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                    {[
                      "SEO & Lead Generation",
                      "Paid Marketing Media & CRO",
                      "IT & Development Technology",
                      "Business Servicing",
                      "AI Development"
                    ][num - 1]}
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/headphones.svg"
                    alt="headphones"
                    width={150}
                    height={150}
                    className="-mt-[20%] will-change-transform opacity-0"
                    priority={num === 1} // Prioritize first image
                  />
                </div>
              </div>
              <p className="p-6 pt-5 max-sm:pt-0 pb-3 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
                {[
                  "Get to the Top Page of Search Engines: With targeted Revenue growth.",
                  "Simplify complaint resolution, boost customer support, generate leads, and enhance sales through our live chat assistance.",
                  "Help your clients understand their problems and provide effective solutions.",
                  "Our top tier technical expertise in BPO outsourcing helps you tackle tough problems, improve efficiency and expand customer base.",
                  "Drive business growth by expanding your customer base through targeted strategies that effectively connect you with potential clients, unlocking new opportunities for success."
                ][num - 1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
