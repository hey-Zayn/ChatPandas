"use client";
import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section7 = () => {
    const section7Ref = useRef(null);
    const textRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const card5Ref = useRef(null);
    const card6Ref = useRef(null);
    const mobileCard1S7Ref = useRef(null);
    const mobileCard2S7Ref = useRef(null);
    const mobileCard3S7Ref = useRef(null);
    const mobileCard4S7Ref = useRef(null);
    const mobileCard5S7Ref = useRef(null);
    const mobileCard6S7Ref = useRef(null);
  
    const scrollTriggersRef = useRef([]);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        scrollTriggersRef.current.forEach((st) => st.kill());
        scrollTriggersRef.current = [];
    
        const screenWidth = window.innerWidth;
        const baseX = screenWidth > 1600 ? 1500 : screenWidth > 1200 ? 1200 : 1000;
    
        const masterTl = gsap.timeline();
    
        const masterST = ScrollTrigger.create({
          trigger: section7Ref.current,
          start: "top 40%",
          end: "bottom 30%",
          scrub: 3,
          markers: false,
          toggleActions: "play none none reverse",
          animation: masterTl,
        });
    
        scrollTriggersRef.current.push(masterST);
    
        masterTl.from(
          textRef.current,
          {
            opacity: 0,
            x: 50,
            duration: 4,
          },
          0
        );
    
        const cardRefs = [
          card1Ref,
          card2Ref,
          card3Ref,
          card4Ref,
          card5Ref,
          card6Ref,
        ];
        const rotations = [-25, 25, -25, 25, -25, 25]; // Alternating rotations
    
        cardRefs.forEach((cardRef, index) => {
          if (!cardRef.current) return;
    
          masterTl.from(
            cardRef.current,
            {
              rotationX: -20,
              rotationY: -10,
              rotationZ: rotations[index],
              marginLeft: 200,
              y: -300,
              x: baseX - index * 100,
              duration: 4,
            },
            index * 0.5 + 1
          ); // Staggered start times
        });
    
        masterTl.to({}, { duration: 3 }, cardRefs.length * 0.5 + 3);
    
        cardRefs.forEach((cardRef, index) => {
          if (!cardRef.current) return;
    
          masterTl.to(
            cardRef.current,
            {
              rotationX: -20,
              rotationY: -10,
              rotationZ: rotations[index],
              marginLeft: 200,
              y: 300,
              x: -baseX + index * 100,
              duration: 4,
            },
            cardRefs.length * 0.5 + 6 + index * 1
          ); // Staggered start times for exit
        });
    
        // Mobile animations
        const createMobileAnimationS7 = (mobileCardRef, isEven) => {
          if (!mobileCardRef.current) return null;
    
          const tl = gsap.timeline({
            defaults: {
              duration: 1,
              ease: "power3.out",
            },
          });
    
          const st = ScrollTrigger.create({
            trigger: mobileCardRef.current,
            start: "top 80% ",
            end: "bottom bottom",
            // markers: true,
            toggleActions: "play none none reverse",
            animation: tl.fromTo(
              mobileCardRef.current,
              {
                x: isEven ? -200 : 200,
                y: 100,
                opacity: 0,
                scale: 0.5,
                rotation: isEven ? -30 : 30,
              },
              {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.3)",
              }
            ),
          });
    
          scrollTriggersRef.current.push(st);
          return st;
        };
    
        // Mobile - Animation with staggered timing
        createMobileAnimationS7(mobileCard1S7Ref, false);
        // Even numbered cards come from left
        createMobileAnimationS7(mobileCard2S7Ref, true);
        createMobileAnimationS7(mobileCard3S7Ref, false);
        createMobileAnimationS7(mobileCard4S7Ref, true);
        createMobileAnimationS7(mobileCard5S7Ref, false);
        createMobileAnimationS7(mobileCard6S7Ref, true);
    
        // Clean up on component unmount
        return () => {
          scrollTriggersRef.current.forEach((st) => st.kill());
          scrollTriggersRef.current = [];
        };
      }, []);
  return (
    <>
        <div
        ref={section7Ref}
        className="w-full h-[120vh] py-20 max-sm:hidden overflow-hidden"
      >
        <div className="w-full sticky top-20">
          <h1
            ref={textRef}
            id="section7-text"
            className="text-6xl text-center uppercase font-bold"
          >
            Certifications
          </h1>
        </div>

        <div className="sticky w-full  top-10 px-20 mt-20  ">
          <div className="  flex justify-start items-center  mt-30  ">
            <div ref={card1Ref} id="section7card1" className="card w-90 z-[1]">
              <img
               src="/images/section7card1.svg "
                alt="Certification 1"
                className="w-full h-auto"
              />
            </div>
            <div
              ref={card2Ref}
              id="section7card2"
              className="card w-90 z-[2] -ml-20 transform rotate-x-0 rotate-y-0 -rotate-z-10"
            >
              <img
               src="/images/section7card2.svg"
                alt="Certification 2"
                className="w-full h-auto"
              />
            </div>
            <div
              ref={card3Ref}
              id="section7card3"
              className="card w-90 z-[3] -ml-20 transform rotate-x-0 rotate-y-0 rotate-z-10"
            >
              <img
              src="/images/section7card3.svg"
                alt="Certification 3"
                className="w-full h-auto"
              />
            </div>
            <div
              ref={card4Ref}
              id="section7card4"
              className="card w-90 z-[4] -ml-20"
            >
              <img
               src="/images/sectoin7card4.svg"
                alt="Certification 4"
                className="w-full h-auto"
              />
            </div>
            <div
              ref={card5Ref}
              id="section7card5"
              className="card w-90 z-[5] -ml-20 transform rotate-x-0 rotate-y-0 rotate-z-10"
            >
              <img
                src="/images/section7card5.svg "
                alt="Certification 5"
                className="w-full h-auto"
              />
            </div>
            <div
              ref={card6Ref}
              id="section7card6"
              className="card w-90 z-[6] -ml-20 transform-3d"
            >
              <img
                src="/images/section7card6.svg"
                alt="Certification 6"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full h-full overflow-hidden lg:hidden max-sm:block">
        <div className="h-full w-full py-4 px-4  overflow-hidden ">
          <div className="flex flex-col justify-center gap-6">
            <div className="w-full flex flex-col justify-center mb-8">
              <h2 className="text-center text-3xl">BPO OUTSOURCING?</h2>
              <h2 className="text-center text-3xl font-bold uppercase">
                Let's tackle your <br /> challenges
              </h2>
            </div>
            <div
              ref={mobileCard1S7Ref}
              id="mobileCard1section3"
              className="w-full flex justify-center items-center"
            >
              <div className="card w-80">
                <img
                   src="/images/section7card1.svg"
                  alt="BPO Challenge Card 1"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div
              ref={mobileCard2S7Ref}
              className="w-full flex justify-center items-center"
            >
              <div className="card w-80">
                <img
                   src="/images/section7card2.svg"
                  alt="BPO Challenge Card 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div
              ref={mobileCard3S7Ref}
              className="w-full flex justify-center items-center"
            >
              <div className="card w-80">
                <img
                   src="/images/section7card3.svg"
                  alt="BPO Challenge Card 3"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div
              ref={mobileCard4S7Ref}
              className="w-full flex justify-center items-center"
            >
              <div className="card w-80">
                <img
                 src="/images/sectoin7card4.svg"
                  alt="BPO Challenge Card 4"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div
              ref={mobileCard5S7Ref}
              className="w-full flex justify-center items-center"
            >
              <div className="card w-80">
                <img
                  src="/images/section7card5.svg"
                  alt="BPO Challenge Card 5"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div
              ref={mobileCard6S7Ref}
              className="w-full flex justify-center items-center"
            >
              <div className="card w-80">
                <img
                  src="/images/section7card6.svg"
                  alt="BPO Challenge Card 6"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section7