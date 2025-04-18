"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";
import NavbarContent from "./NavbarContent";

const AqibNav = () => {
    const [isVisible, setIsVisible] = useState(false);
    const circleRef = useRef(null);
    const menuBtnRef = useRef(null);
    const ulRef = useRef(null);

    const responsiveWidth = useRef("15%");
    const responsiveHeight = useRef("46%");
    const responsiveScale = useRef(2);

    const openMenu = () => {
        setIsVisible(true);
    };

    useEffect(() => {
        const winwidth = window.innerWidth;

        if (winwidth < 640) {
            responsiveWidth.current = "95%";
            responsiveHeight.current = "92%";
            responsiveScale.current = 1;
        } else if (winwidth < 768) {
            responsiveWidth.current = "70%";
            responsiveHeight.current = "70%";
            responsiveScale.current = 1;
        } else if (winwidth < 1024) {
            responsiveWidth.current = "50%";
            responsiveHeight.current = "50%";
            responsiveScale.current = 1;
        } else {
            responsiveWidth.current = "15%";
            responsiveHeight.current = "46%";
            responsiveScale.current = 2;
        }

        const tl = gsap.timeline();

        tl.from("h3", {
            y: -30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.in",
        });
    }, []);

    const closeMenu = () => {
        if (ulRef.current) {
            gsap.to(ulRef.current.children, {
                opacity: 0,
                scale: 0.8,
                duration: 0.2,
                ease: "power3.in",
            });
        }

        gsap.to(".close", {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: "power2.in",
        });

        gsap.to(circleRef.current, {
            scale: 0,
            borderRadius: "50%",
            width: responsiveWidth.current,
            height: responsiveHeight.current,
            opacity: 0,
            duration: 0.6,
            zIndex: 100,
            ease: "power2.inOut",
            onComplete: () => setIsVisible(false),
        });
    };

    useLayoutEffect(() => {
        if (isVisible) {
            gsap.set([circleRef.current, ulRef.current?.children, ".close"], {
                opacity: 0,
                scale: 0.8,
                zIndex: 50,
            });

            gsap.to(circleRef.current, {
                scale: responsiveScale.current,
                borderRadius: "10px",
                width: responsiveWidth.current,
                height: responsiveHeight.current,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            });

            if (ulRef.current) {
                gsap.to(ulRef.current.children, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    zIndex: 100,
                    ease: "power2.out",
                });
            }

            gsap.to(".close", {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.out",
                delay: 0.3,
            });
        }
    }, [isVisible]);

    return (
        <div>
            <div className="w-full top-0 left-0 absolute flex justify-between items-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 text-white z-50">
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src="/images/660e8ed8eb1804501de1d733_Group 1.svg"
                            alt="Logo"
                            className="w-[120px] sm:w-[150px] md:w-[180px]"
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-10">
                    <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-[#E73C5F] border-none rounded-md hidden sm:block">
                        <Link href={`/Contact`}>Book a Demo</Link>
                    </button>

                    <button
                        ref={menuBtnRef}
                        className="px-4 py-4 bg-[#E8E0CD] text-md font-bold text-black border-none ouline-none rounded-full cursor-pointer relative z-30"
                        onClick={openMenu}
                    >
                        <Menu className="text-black" size={25} />
                    </button>

                    <div
                        ref={circleRef}
                        className="fixed top-[2%] right-[2%] max-sm:top-[0.5%] bg-[#E8E0CD] z-1000 transform scale-0 origin-top-right opacity-0"
                    ></div>

                    {isVisible && (
                        <div className="fixed top-0 right-0 w-full h-full flex justify-end items-start z-200 p-10 text-white pointer-events-auto">
                            <div className="relative w-[100%] sm:w-[28%] md:w-[28%] lg:w-[28%] xl:w-[28%] 2xl:w-[28%] z-100">
                                <button
                                    className="ml-[86.7%] -mt-[8.5%] max-sm:-mt-[8%] max-sm:-mr-[6%] md:-mt-4 md:mr-2 lg:-mt-2 lg:mr-2 xl:-mt-2 xl:mr-2 2xl:-mt-2 2xl:mr-2 float-end px-4 py-4 text-md font-bold text-white bg-[#111111] border-none cursor-pointer outline-none rounded-full close"
                                    onClick={closeMenu}
                                >
                                    <X size={25} />
                                </button>
                                <NavbarContent ulRef={ulRef} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AqibNav;