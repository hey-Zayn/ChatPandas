"use client";
import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Scene from "./Scene";

const Section3D = () => {
    gsap.registerPlugin(ScrollTrigger);
    const mainRef = useRef(null);
    const sceneRef = useRef(null);
    const modelRef = useRef(null)
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            setProgress(Math.min(self.progress, 1));
          },
        },
      })
      .to(sceneRef.current,{
        ease:"none",
        x:'25vw',
        y:"100vh",
        onUpdate: () => {
          const animate = (t = 0) => {
            requestAnimationFrame(animate);
            // Add more complex animation logic here
            const rotationSpeed = 0.001;
            modelRef.current.rotation.y = t * rotationSpeed;
            // const scaleFactor = 2 + Math.sin(t * 0.001) * 1;
            // modelRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
          };
          animate();
        },
      })
      .to(sceneRef.current,{
        ease:"none",
        x:'-25vw',
        y:"200vh",
        
      })
      .to(sceneRef.current,{
        ease:"none",
        x:'0vw',
        y:"300vh",
      });

      return () => tl.kill(); // Cleanup animation
    }, []);

  return (
    <>
      <div ref={mainRef} className="w-full h-full overflow-hidden bg-[#30087D] max-sm:hidden lg:block">
        
        <section className="relative w-full  h-screen ">
          <div className="absolute top-[50%] w-full  text-center z-10">
            <h1 className="text-8xl text-white  font-bold">
            Bridging  <br />
            Cultural Gaps
            </h1>
            <h3 className='text-white text-2xl'>As the top BPO agency, we bridge cultural <br /> gaps, making every interaction feel native.</h3>
          </div>
          <div ref={sceneRef} className="w-full h-full">
            <Canvas style={{ width: '100%', height: '100%' }}>
              <Scene progress={progress} modelRef={modelRef}/>
            </Canvas>
          </div>
         
        </section>
        
        <section className=" relative flex justify-center items-center  h-screen">
          <div className=" absolute top-[40%] h-screen w-full z-10  px-10">
            <h1 className="text-8xl text-white text-left font-bold">
            Bridging  <br />
            Cultural Gaps
            </h1>
            <h3 className='text-white text-2xl'>As the top BPO agency, we bridge cultural <br /> gaps, making every interaction feel native.</h3>
          </div>
        </section>

        <section className=" relative flex justify-center items-center  h-screen">
          <div className=" absolute top-[40%] w-full h-screen   z-10  px-10">
            <h1 className="text-8xl text-white text-right font-bold">
            Bridging  <br />
            Cultural Gaps
            </h1>
            <h3 className='text-white text-right text-2xl'>As the top BPO agency, we bridge cultural <br /> gaps, making every interaction feel native.</h3>
          </div>
        </section>
        
        <section className=" w-full  relative flex justify-center items-center  h-[110vh]">
        <div className="absolute top-[30%] w-full h-full text-center z-10">
            <h1 className="text-8xl text-white  font-bold">
            Bridging  <br />
            Cultural Gaps
            </h1>
            <h3 className='text-white text-2xl'>As the top BPO agency, we bridge cultural <br /> gaps, making every interaction feel native.</h3>
          </div>
        </section>
      </div>
      
      <div  className="w-full h-full overflow-hidden bg-[#30087D] max-sm:block lg:hidden">
        
        <section className="relative w-full  h-[60vh]   ">
          <div className=" absolute top-[50%] w-full  text-center z-10">
            <h1 className="text-8xl max-sm:text-3xl  text-white  font-bold">
            Bridging  <br className='max-sm:hidden'/>
            Cultural Gaps
            </h1>
            <h3 className='text-white text-2xl max-sm:text-xl'>As the top BPO agency, we bridge cultural <br className='max-sm:hidden'/> gaps, making every interaction feel native.</h3>
          </div>
          
         
        </section>
        
        <section className=" relative flex justify-center items-center  h-[60vh] ">
          <div className=" absolute top-[40%] h-[60vh]  w-full z-10  px-10">
            <h1 className="text-8xl max-sm:text-3xl text-white text-left font-bold">
            Bridging  <br className='max-sm:hidden'/>
            Cultural Gaps
            </h1>
            <h3 className='text-white text-2xl max-sm:text-xl'>As the top BPO agency, we bridge cultural  <br className='max-sm:hidden'/>gaps, making every interaction feel native.</h3>
          </div>
        </section>

        <section className=" relative flex justify-center items-center  h-[60vh] ">
          <div className=" absolute top-[40%] w-full h-[60vh]   z-10  px-10">
            <h1 className="text-8xl max-sm:text-3xl text-white text-right font-bold">
            Bridging   <br className='max-sm:hidden'/>
            Cultural Gaps
            </h1>
            <h3 className='text-white text-right text-2xl max-sm:text-xl'>As the top BPO agency, we bridge cultural <br className='max-sm:hidden'/> gaps, making every interaction feel native.</h3>
          </div>
        </section>
        
        <section className=" w-full  relative flex justify-center items-center  h-[60vh] ">
        <div className="absolute top-[30%] w-full h-full text-center z-10">
            <h1 className="text-8xl max-sm:text-3xl text-white  font-bold">
            Bridging   <br className='max-sm:hidden'/>
            Cultural Gaps
            </h1>
            <h3 className='text-white text-2xl max-sm:text-xl'>As the top BPO agency, we bridge cultural  <br className='max-sm:hidden'/> gaps, making every interaction feel native.</h3>
          </div>
        </section>
      </div>

     
    </>
  )
}

export default Section3D