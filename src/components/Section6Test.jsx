
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
const Section6Test = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      const imgs = document.querySelectorAll(".card img");
      const cardsS7 = document.querySelectorAll(".card");
  
      const cardSticky = document.querySelectorAll(".card_sticky");
      const stickytitle = document.getElementById("sticky");
  
      const lastCard = cardSticky[cardSticky.length - 1];
  
      const endPosition = () => {
        const lastCardOffset = lastCard.offsetTop;
  
        const totalStackHeight = 0.6 - cardSticky.length * 30;
  
        return Math.min(
          lastCardOffset + totalStackHeight,
          document.body.scrollHeight - 200
        );
      };
  
      gsap.to(stickytitle, {
        scrollTrigger: {
          trigger: stickytitle,
          start: window.innerWidth < 640 ? "top top-=80" : "top top+=100",
          end: endPosition(),
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
        y: (cardSticky.length - 1) * 30,
        zIndex: cardSticky.length + 1,
      });
  
      cardSticky.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top top+=100",
            end: endPosition(),
            pin: true,
            pinSpacing: false,
            scrub: true,
          },
          y: index === cardSticky.length - 1 ? (index * 0) : (index * 30),
          rotation: index === cardSticky.length - 1 ? 0 : (index % 2 === 0 ? -5 : 5),
          zIndex: index + 1,
        });
      });
  
      window.addEventListener("resize", () => ScrollTrigger.refresh());
      cardsS7.forEach((section7cards, index) => {
        const img = imgs[index];
  
        const handleMouseEnter = () => {
          gsap.to(img, {
            opacity: 1,
            scale: 1.2,
            rotate: index % 2 === 0 ? 10 : -10,
            y: -20,
            x: -10,
          });
          if (section7cards) {
            gsap.to(section7cards, {
              backgroundColor:
                index % 2 === 0 ? "rgb(24, 4, 181)" : "rgb(222, 31, 98)",
              borderColor: "black",
              color: "white",
              rotate: index % 2 === 0 ? 3 : -3,
            });
          }
        };
  
        const handleMouseLeave = () => {
          gsap.to(img, { scale: 1, opacity: 0, rotate: 0, x: 0 });
          if (section7cards) {
            gsap.to(section7cards, {
              backgroundColor: "#E8E0CD",
              borderColor: "black", 
              color: "black",
              rotate: 0
            });
          }
        };
  
        section7cards.addEventListener("mouseenter", handleMouseEnter);
        section7cards.addEventListener("mouseleave", handleMouseLeave);
  
        return () => {
          section7cards.removeEventListener("mouseenter", handleMouseEnter);
          section7cards.removeEventListener("mouseleave", handleMouseLeave);
        };
      });
    }, []);
  return (
    <>
        <div className=" w-full py-20 overflow-hidden bg-[#E8E0CD]">
        <div className=" flex   max-sm:flex-col gap-[2%]">
          <div className="w-[40%] max-sm:w-full  m-[4%] mr-0">
            <h1
              id="sticky"
              className="z-20 px-4  mt-6 outline-none border-none 
              text-6xl max-sm:text-3xl  
              font-bold text-black"
            >
              Our Services
            </h1>
          </div>
          
          
          
          <div className="flex flex-col h-full w-[60%] max-sm:w-full  px-2 py-20   text-black">
            
            
            <div className="card flex-grow-1 card_sticky border-solid border-[1px] bg-[#E8E0CD] border-black rounded-lg m-6 w-[90%]    h-full z-[1]">
              <div className="flex justify-between">
                <div className="w-full">
                  <h6 className="p-6 pb-1">01</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                    VOICE SUPPORT
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/headphones.svg"
                    alt="headphones"
                    width={150}
                    height={150}
                    className="-mt-[20%] will-change-transform opacity-0"
                  />
                </div>
              </div>
              <p className="p-6 max-sm:pt-0 pb-3 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl text-wrap">
                Help your clients understand their problems and provide
                effective solutions. problems and provide effective solutions.
              </p>
            </div>

            <div className="card flex-grow-1 card_sticky border-solid border-[1px] bg-[#E8E0CD] border-black rounded-lg m-6 w-[90%]   h-full z-[2]">
              <div className="flex justify-between">
                <div className="w-[100%]">
                  <h6 className="p-6 pb-1">02</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                    CHAT SUPPORT
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/message.svg"
                    alt="headphones"
                    width={130}
                    height={130}
                    className="mt-[15%] will-change-transform opacity-0"
                  />
                </div>
              </div>
              <p className="p-6 pt-5 max-sm:pt-0 pb-3 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
                Simplify complaint resolution, boost customer support, generate
                leads , and enhance sales through our live chat assistance.
              </p>
            </div>

            <div className="card flex-grow-1 card_sticky border-solid border-[1px] bg-[#E8E0CD] border-black rounded-lg m-6 w-[90%]  h-full z-[3]">
              <div className="flex justify-between">
                <div className="w-[100%]">
                  <h6 className="p-6 pb-1">03</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                    EMAIL & TICKETING
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/sms.svg"
                    alt="headphones"
                    width={100}
                    height={100}
                    className="mt-[15%] ml-[15%] will-change-transform opacity-0"
                  />
                </div>
              </div>
              <p className="p-6 pb-3 pt-0 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
                Help your clients understand their problems and provide
                effective solutions. problems and provide effective solutions.
              </p>
            </div>

            <div className="card flex-grow-1 card_sticky border-solid border-[1px] bg-[#E8E0CD] border-black rounded-lg m-6 w-[90%]  h-full z-[4]">
              <div className="flex justify-between">
                <div className="w-[100%]">
                  <h6 className="p-6 pb-1">04</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                    TECHNICAL SUPPORT
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/gear2.svg"
                    alt="headphones"
                    width={120}
                    height={120}
                    className="mt-[2%] ml-[15%] will-change-transform opacity-0"
                  />
                </div>
              </div>
              <p className="p-6 pb-3 pt-5 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
                Our top tier technical expertise in BPO outsourcing helps you
                tackle tough problems, improve efficiency and expand customer
                base.
              </p>
            </div>

            <div className="card flex-grow-1 card_sticky border-solid border-[1px] bg-[#E8E0CD] border-black rounded-lg m-6 w-[90%] h-full z-[5]">
              <div className="flex justify-between">
                <div className="w-[100%]">
                  <h6 className="p-6 pb-1">05</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                    LEAD GENERATION
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/dollar.avif"
                    alt="headphones"
                    width={100}
                    height={100}
                    className="mt-[1%] ml-[15%] will-change-transform opacity-0"
                  />
                </div>
              </div>
              <p className="p-6 pb-3 pt-0 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
                Drive business growth by expanding your customer base through
                targeted strategies that effectively connect you with
                potentional clients, unloacking new opportunities for success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section6Test