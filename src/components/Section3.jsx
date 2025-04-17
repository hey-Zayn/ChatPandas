"use client";
import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section3 = () => {
    const section3Ref = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const card5Ref = useRef(null);
    const card6Ref = useRef(null);
    const mobileCard1Ref = useRef(null);
    const mobileCard2Ref = useRef(null);
    const mobileCard3Ref = useRef(null);
    const mobileCard4Ref = useRef(null);
    const mobileCard5Ref = useRef(null);
    const mobileCard6Ref = useRef(null);

    const TextRef = useRef(null);
    const Text2Ref = useRef(null);

    // Store all ScrollTrigger instances created by this component
    const scrollTriggersRef = useRef([]);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Clear only this component's ScrollTrigger instances
        scrollTriggersRef.current.forEach((st) => st.kill());
        scrollTriggersRef.current = [];

        const texttl = gsap.timeline({
            scrollTrigger: {
                trigger: section3Ref.current,
                start: "top 80%",
                end: "bottom bottom",
                toggleActions: "play none none none"
            }
        })
        texttl.from(TextRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        })
        texttl.from(Text2Ref.current, {
            y: -100,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        })

        // Function to create and store ScrollTrigger instances
        const createCardAnimation = (cardRef, rotation) => {
            if (!cardRef.current) return null;

            const tl = gsap.timeline({
                defaults: {
                    duration: 1,
                    ease: "power3.out",
                },
            });

            const st = ScrollTrigger.create({
                trigger: cardRef.current,
                start: "top 60%",
                // end: "top 20%",
                scrub: 2,
                // markers:true,
                toggleActions: "play none none reverse",
                animation: tl.fromTo(
                    cardRef.current,
                    {
                        rotationX: -25,
                        rotationY: -10,
                        rotationZ: rotation,
                        translateY: 100,
                        // opacity: 0.5,
                    },
                    {
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: -rotation,
                        translateY: 50,
                        // opacity: 1,
                    }
                ),
            });

            // Store the ScrollTrigger instance
            scrollTriggersRef.current.push(st);
            return st;
        };
        // Create animations for each card with alternating rotations
        createCardAnimation(card1Ref, -15);
        createCardAnimation(card2Ref, 15);
        createCardAnimation(card3Ref, -15);
        createCardAnimation(card4Ref, 15);
        createCardAnimation(card5Ref, -15);
        createCardAnimation(card6Ref, 15);


        const createMobileAnimation = (mobileCardRef, isEven) => {
            if (!mobileCardRef.current) return null;

            const tl = gsap.timeline({
                defaults: {
                    duration: 1,
                    ease: "power3.out",
                },
            });

            const st = ScrollTrigger.create({
                trigger: mobileCardRef.current,
                start: "top 60%",
                //   end: "bottom 20%",
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
        createMobileAnimation(mobileCard1Ref, false);
        // Even numbered cards come from left
        createMobileAnimation(mobileCard2Ref, true);
        createMobileAnimation(mobileCard3Ref, false);
        createMobileAnimation(mobileCard4Ref, true);
        createMobileAnimation(mobileCard5Ref, false);
        createMobileAnimation(mobileCard6Ref, true);

        // Clean up on component unmount
        return () => {
            scrollTriggersRef.current.forEach((st) => st.kill());
            scrollTriggersRef.current = [];
        };
    }, []);
    return (
        <>
            <div
                ref={section3Ref}
                className="h-full w-full py-[100px] px-[70px] max-sm:hidden lg:block"
            >
                <div className="px-2">
                    <div className="sticky top-[40%] flex flex-col justify-center z-20">
                        <h2 ref={TextRef} className="text-center text-6xl">BPO OUTSOURCING?</h2>
                        <h2 ref={Text2Ref} className="text-center text-6xl font-bold uppercase">
                            Let's tackle your challenges
                        </h2>
                    </div>

                    {/* Cards */}
                    <div
                        ref={card1Ref}
                        id="card1"
                        className="w-full flex justify-end items-center mt-60 transform rotate-x-0 rotate-y-0 rotate-z-25"
                    >
                        <div className="card w-80">
                            <img
                                src="/images/card1.svg "
                                alt="BPO Challenge Card 1"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div
                        ref={card2Ref}
                        id="card2"
                        className="w-full flex justify-start items-center transform rotate-x-0 rotate-y-0 -rotate-z-15"
                    >
                        <div className="card w-80">
                            <img
                                src="/images/card2.svg "
                                alt="BPO Challenge Card 2"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div
                        ref={card3Ref}
                        id="card3"
                        className="w-full flex justify-end items-center mt-30 transform rotate-x-0 rotate-y-0 rotate-z-15"
                    >
                        <div className="card w-80">
                            <img
                                src="/images/card3.svg "
                                alt="BPO Challenge Card 3"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div
                        ref={card4Ref}
                        id="card4"
                        className="w-full flex justify-start items-center transform rotate-x-0 rotate-y-0 -rotate-z-15"
                    >
                        <div className="card w-80">
                            <img
                                src="/images/card4.svg "
                                alt="BPO Challenge Card 4"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div
                        ref={card5Ref}
                        id="card5"
                        className="w-full flex justify-end items-center mt-30 transform rotate-x-0 rotate-y-0 rotate-z-15"
                    >
                        <div className="card w-80">
                            <img
                                src="/images/card6.svg "
                                alt="BPO Challenge Card 5"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div
                        ref={card6Ref}
                        id="card6"
                        className="w-full flex justify-start items-center transform rotate-x-0 rotate-y-0 -rotate-z-15 mb-40"
                    >
                        <div className="card w-80">
                            <img
                                src="/images/card1.svg "
                                alt="BPO Challenge Card 6"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile view */}
            <div className="w-full h-full overflow-hidden lg:hidden md:hidden max-sm:block">
                <div className="h-full w-full py-4 px-4  overflow-hidden">
                    <div className="flex flex-col justify-center gap-6">
                        <div className="w-full flex flex-col justify-center mb-8">
                            <h2 className="text-center text-3xl">BPO OUTSOURCING?</h2>
                            <h2 className="text-center text-3xl font-bold uppercase">
                                Let's tackle your <br /> challenges
                            </h2>
                        </div>
                        <div
                            ref={mobileCard1Ref}
                            id="mobileCard1section3"
                            className="w-full flex justify-center items-center"
                        >
                            <div className="card w-80">
                                <img
                                    src="/images/card1.svg "
                                    alt="BPO Challenge Card 1"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div
                            ref={mobileCard2Ref}
                            className="w-full flex justify-center items-center"
                        >
                            <div className="card w-80">
                                <img
                                    src="/images/card2.svg "
                                    alt="BPO Challenge Card 2"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div
                            ref={mobileCard3Ref}
                            className="w-full flex justify-center items-center"
                        >
                            <div className="card w-80">
                                <img
                                    src="/images/card3.svg "
                                    alt="BPO Challenge Card 3"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div
                            ref={mobileCard4Ref}
                            className="w-full flex justify-center items-center"
                        >
                            <div className="card w-80">
                                <img
                                    src="/images/card4.svg "
                                    alt="BPO Challenge Card 4"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div
                            ref={mobileCard5Ref}
                            className="w-full flex justify-center items-center"
                        >
                            <div className="card w-80">
                                <img
                                    src="/images/card5.svg "
                                    alt="BPO Challenge Card 5"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div
                            ref={mobileCard6Ref}
                            className="w-full flex justify-center items-center"
                        >
                            <div className="card w-80">
                                <img
                                    src="/images/card6.svg "
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

export default Section3