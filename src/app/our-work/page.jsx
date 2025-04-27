"use client";

import React, { useRef } from "react";

import BusinessOperations from "@/components/Business-operations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import Link from "next/link";
import WordPressProjects from "@/components/WordPressProjects";
import MernProjects from "@/components/MernProjects";
import OtherCMS from "@/components/OtherCMS";
import MobileProjects from "@/components/MobileProjects";
import MeanProjects from "@/components/MeanProjects";
import UIUXProjects from "@/components/UIUXProjects";

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
              Our Work
            </h1>
          </div>
        </div>

      

        {/* --------------------------------  { Section 3 }  ------------------------------------------ */}
        <section className="w-full h-full">
          <div className="w-full h-full py-20 max-sm:py-10 px-10">
            <div className="w-full flex justify-center  items-center mb-6">
              <h2 className="text-white/90 text-md max-sm:text-sm text-center px-4 py-1 rounded-full border-2 border-transparent bg-clip-padding bg-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-blue-800">
                WordPress Projects
              </h2>
            </div>
            <h1 className="text-white text-5xl max-sm:text-xl text-center ">
              WordPress Wonders: Fast, Sleek & Uniquely Yours.
            </h1>
          </div>

          <div className="">
            <WordPressProjects />
          </div>
        </section>


        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Your Business Statistics Turn
                {/* <br className="hidden lg:inline-block" /> */}
                Your Decisions to Profit
              </h1>
              <p className="mb-8 leading-relaxed">
                Harness the power of data to drive your business forward. At Corecentrix Business Solutions, we transform your business statistics into actionable insights that fuel profitable decisions. By leveraging advanced analytics, we uncover trends, identify opportunities, and provide a clear roadmap to success.

                Whether it’s optimizing your marketing strategies, enhancing customer engagement, or streamlining operations, our data-driven approach ensures that every decision you make is backed by solid evidence and poised to maximize profitability. Let your business statistics be the catalyst for growth, turning informed decisions into substantial profits.
              </p>
             
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

        <section className="w-full h-full">
          <div className="w-full h-full  py-20 max-sm:py-10  px-10">
            <div className="w-full flex justify-center  items-center mb-6">
              <h2 className="text-white/90 text-md max-sm:text-sm text-center px-4 py-1 rounded-full border-2 border-transparent bg-clip-padding bg-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-blue-800">
                Mern Projects
              </h2>
            </div>
            <h1 className="text-white text-5xl max-sm:text-xl text-center ">
              MERN Mastery: Scalable, Cutting-Edge & Lightning-Fast.
            </h1>
          </div>

          <div className="">
            <MernProjects />
          </div>
        </section>



        <section className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
              WordPress Wonders: Fast, Sleek & Uniquely Yours.
              </h1>
              <p className="mb-8 leading-relaxed">
              At Forward Sols, we build high-impact WordPress websites designed to drive growth. Whether you need a corporate website, an engaging blog, or a full-featured eCommerce store, our expert team delivers custom solutions with pixel-perfect designs, optimized performance, and seamless functionality.
              </p>
              <div className="flex justify-center ">
                <Link href={`/Contact`}>
                  {" "}
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Connect Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        <section className="w-full h-full">
          <div className="w-full h-full  py-20 max-sm:py-10  px-10">
            <div className="w-full flex justify-center  items-center mb-6">
              <h2 className="text-white/90 text-md max-sm:text-sm text-center px-4 py-1 rounded-full border-2 border-transparent bg-clip-padding bg-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-blue-800">
                Other CMS Projects
              </h2>
            </div>
            <h1 className="text-white text-5xl max-sm:text-xl text-center ">
              MERN Mastery: Scalable, Cutting-Edge & Lightning-Fast.
            </h1>
          </div>

          <div className="">
            <OtherCMS/>
          </div>
        </section>
       
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Your Business Statistics Turn
                {/* <br className="hidden lg:inline-block" /> */}
                Your Decisions to Profit
              </h1>
              <p className="mb-8 leading-relaxed">
                Harness the power of data to drive your business forward. At Corecentrix Business Solutions, we transform your business statistics into actionable insights that fuel profitable decisions. By leveraging advanced analytics, we uncover trends, identify opportunities, and provide a clear roadmap to success.

                Whether it’s optimizing your marketing strategies, enhancing customer engagement, or streamlining operations, our data-driven approach ensures that every decision you make is backed by solid evidence and poised to maximize profitability. Let your business statistics be the catalyst for growth, turning informed decisions into substantial profits.
              </p>
             
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


        <section className="w-full h-full">
          <div className="w-full h-full  py-20 max-sm:py-10  px-10">
            <div className="w-full flex justify-center  items-center mb-6">
              <h2 className="text-white/90 text-md max-sm:text-sm text-center px-4 py-1 rounded-full border-2 border-transparent bg-clip-padding bg-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-blue-800">
              Mobile APP Projects
              </h2>
            </div>
            <h1 className="text-white text-5xl max-sm:text-xl text-center ">
              MERN Mastery: Scalable, Cutting-Edge & Lightning-Fast.
            </h1>
          </div>

          <div className="">
            <MobileProjects/>
          </div>
        </section>
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
              WordPress Wonders: Fast, Sleek & Uniquely Yours.
              </h1>
              <p className="mb-8 leading-relaxed">
              At Forward Sols, we build high-impact WordPress websites designed to drive growth. Whether you need a corporate website, an engaging blog, or a full-featured eCommerce store, our expert team delivers custom solutions with pixel-perfect designs, optimized performance, and seamless functionality.
              </p>
              <div className="flex justify-center ">
                <Link href={`/Contact`}>
                  {" "}
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Connect Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-full">
          <div className="w-full h-full  py-20 max-sm:py-10  px-10">
            <div className="w-full flex justify-center  items-center mb-6">
              <h2 className="text-white/90 text-md max-sm:text-sm text-center px-4 py-1 rounded-full border-2 border-transparent bg-clip-padding bg-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-blue-800">
                 Mean Projects
              </h2>
            </div>
            <h1 className="text-white text-5xl max-sm:text-xl text-center ">
              MEAN Mastery: Scalable, Cutting-Edge & Lightning-Fast.
            </h1>
          </div>

          <div className="">
            <UIUXProjects/>
          </div>
        </section>
       
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Your Business Statistics Turn
                {/* <br className="hidden lg:inline-block" /> */}
                Your Decisions to Profit
              </h1>
              <p className="mb-8 leading-relaxed">
                Harness the power of data to drive your business forward. At Corecentrix Business Solutions, we transform your business statistics into actionable insights that fuel profitable decisions. By leveraging advanced analytics, we uncover trends, identify opportunities, and provide a clear roadmap to success.

                Whether it’s optimizing your marketing strategies, enhancing customer engagement, or streamlining operations, our data-driven approach ensures that every decision you make is backed by solid evidence and poised to maximize profitability. Let your business statistics be the catalyst for growth, turning informed decisions into substantial profits.
              </p>
             
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
       

        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
