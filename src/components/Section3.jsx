"use client";
import React, { useRef, useCallback } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section3 = () => {
    const section3Ref = useRef(null);
    const textRefs = useRef({
        text1: null,
        text2: null
    });
    
    // Use arrays instead of individual refs for better management
    const desktopCardRefs = useRef([]);
    const mobileCardRefs = useRef([]);
    const scrollTriggersRef = useRef([]);

    // Memoize animation setup to prevent unnecessary recalculations
    const setupAnimations = useCallback(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        // Clean up any existing ScrollTriggers
        scrollTriggersRef.current.forEach((st) => st.kill());
        scrollTriggersRef.current = [];

        // Text animation - use a single timeline for better performance
        const textTl = gsap.timeline({
            scrollTrigger: {
                trigger: section3Ref.current,
                start: "top 80%",
                end: "bottom bottom",
                toggleActions: "play none none none",
                once: true // Only trigger once for better performance
            }
        });
        
        // Batch text animations
        textTl.from([textRefs.current.text1, textRefs.current.text2], {
            y: -50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.15,
            ease: "power2.out",
            clearProps: "transform" // Clean up transforms after animation
        });

        // Desktop card animations - batch similar animations
        const createCardAnimations = (cards, rotations) => {
            cards.forEach((card, index) => {
                if (!card) return;
                
                const rotation = rotations[index % rotations.length];
                const st = ScrollTrigger.create({
                    trigger: card,
                    start: "top 60%",
                    scrub: 1.5, // Reduced scrub time for better performance
                    toggleActions: "play none none reverse",
                    animation: gsap.fromTo(
                        card,
                        {
                            rotationX: -25,
                            rotationY: -10,
                            rotationZ: rotation,
                            translateY: 100,
                        },
                        {
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: -rotation,
                            translateY: 50,
                            duration: 0.8, // Reduced duration
                            ease: "power2.out", // Simpler ease function
                        }
                    ),
                });
                scrollTriggersRef.current.push(st);
            });
        };

        // Mobile card animations - batch similar animations
        const createMobileAnimations = (cards) => {
            cards.forEach((card, index) => {
                if (!card) return;
                
                const isEven = index % 2 === 0;
                const st = ScrollTrigger.create({
                    trigger: card,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                    once: true, // Only trigger once for better performance
                    animation: gsap.fromTo(
                        card,
                        {
                            x: isEven ? -150 : 150, // Reduced distance
                            y: 80, // Reduced distance
                            opacity: 0,
                            scale: 0.7, // Less extreme scale
                            rotation: isEven ? -20 : 20, // Less extreme rotation
                        },
                        {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            rotation: 0,
                            duration: 1.2, // Reduced duration
                            ease: "back.out(1.5)", // Simpler ease function
                        }
                    ),
                });
                scrollTriggersRef.current.push(st);
            });
        };

        // Apply animations in batches
        createCardAnimations(desktopCardRefs.current, [-15, 15]);
        createMobileAnimations(mobileCardRefs.current);

        // Clean up on component unmount
        return () => {
            scrollTriggersRef.current.forEach((st) => st.kill());
            scrollTriggersRef.current = [];
        };
    }, []);

    // Use GSAP with dependency on setupAnimations
    useGSAP(() => {
        setupAnimations();
    }, [setupAnimations]);

    return (
        <>
            <div
                ref={section3Ref}
                className="h-full w-full py-[100px] px-[70px] max-sm:hidden lg:block"
            >
                <div className="px-2">
                    <div className="sticky top-[40%] flex flex-col justify-center z-20">
                        <h2 ref={el => textRefs.current.text1 = el} className="text-center text-6xl">BPO OUTSOURCING?</h2>
                        <h2 ref={el => textRefs.current.text2 = el} className="text-center text-6xl font-bold uppercase">
                            Let's tackle your challenges
                        </h2>
                    </div>

                    {/* Cards - Using array refs */}
                    {[1, 2, 3, 4, 5, 6].map((num, index) => (
                        <div
                            key={`card-${num}`}
                            ref={el => desktopCardRefs.current[index] = el}
                            id={`card${num}`}
                            className={`w-full flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center ${index === 0 ? 'mt-60' : index % 2 === 0 ? 'mt-30' : ''} transform rotate-x-0 rotate-y-0 ${index % 2 === 0 ? 'rotate-z-25' : '-rotate-z-15'} ${index === 5 ? 'mb-40' : ''}`}
                        >
                            <div className="card w-80">
                                <img
                                    src={`/images/WP${num}.avif`}
                                    alt={`BPO Challenge Card ${num}`}
                                    className="w-full h-auto"
                                    loading={index < 2 ? "eager" : "lazy"}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Mobile view */}
            <div className="w-full h-full overflow-hidden lg:hidden md:hidden max-sm:block">
                <div className="h-full w-full py-4 px-4 overflow-hidden">
                    <div className="flex flex-col justify-center gap-6">
                        <div className="w-full flex flex-col justify-center mb-8">
                            <h2 className="text-center text-3xl">BPO OUTSOURCING?</h2>
                            <h2 className="text-center text-3xl font-bold uppercase">
                                Let's tackle your <br /> challenges
                            </h2>
                        </div>
                        
                        {/* Mobile cards - Using array refs */}
                        {[1, 2, 3, 4, 5, 6].map((num, index) => (
                            <div
                                key={`mobile-card-${num}`}
                                ref={el => mobileCardRefs.current[index] = el}
                                id={index === 0 ? "mobileCard1section3" : undefined}
                                className="w-full flex justify-center items-center"
                            >
                                <div className="card w-80">
                                    <img
                                        src={`/images/WP${num}.avif`}
                                        alt="Portfolio Projects"
                                        className="w-full h-auto"
                                        loading={index < 2 ? "eager" : "lazy"}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3