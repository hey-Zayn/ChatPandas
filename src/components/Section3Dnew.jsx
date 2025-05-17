import React, { useState, useRef, useEffect, useMemo, lazy, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Lazy load heavy components
const Scene = lazy(() => import("./Scene"));

// Extracted reusable component for sections
const ContentSection = React.memo(({ align = "center", topPosition = "50%" }) => (
  <div className={`absolute top-[${topPosition}] w-full z-10 px-10 pt-30 ${
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
  }`}>
    <h1 className="text-8xl text-white font-bold">
      Bridging <br />
      Cultural Gaps
    </h1>
    <h3 className="text-white text-2xl">
      As the top BPO agency, we bridge cultural <br /> 
      gaps, making every interaction feel native.
    </h3>
  </div>
));

const Section3Dnew = () => {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const modelRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [animationId, setAnimationId] = useState(null);
  
  // Lazy load GSAP plugins
  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      gsap.registerPlugin(module.ScrollTrigger);
    });
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [animationId]);
  
  // Optimized scroll animations with throttling
  useEffect(() => {
    if (!mainRef.current || !sceneRef.current) return;

    let rafId;
    let lastCall = 0;
    const throttle = (func, limit) => {
      return function() {
        const now = Date.now();
        if (now - lastCall >= limit) {
          lastCall = now;
          func.apply(this, arguments);
        }
      };
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
              const newProgress = Math.min(self.progress, 1);
              if (Math.abs(newProgress - progress) > 0.01) {
                setProgress(newProgress);
              }
            },
          },
        });

        const startModelAnimation = () => {
          let lastTime = 0;
          const animate = (time = 0) => {
            const id = requestAnimationFrame(animate);
            setAnimationId(id);
            
            if (modelRef.current) {
              const delta = time - lastTime;
              if (delta > 16) {
                // modelRef.current.rotation.y += 0.0005 * delta;
                lastTime = time;
              }
            }
          };
          const id = requestAnimationFrame(animate);
          setAnimationId(id);
        };

        tl.to(sceneRef.current, {
          ease: "none",
          x: '25vw',
          y: "100vh",
          onStart: startModelAnimation,
        })
        .to(sceneRef.current, {
          ease: "none",
          x: '-25vw',
          y: "200vh",
        })
        .to(sceneRef.current, {
          ease: "none",
          x: '0vw',
          y: "300vh",
        });

        rafId = null;
      });
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const sections = useMemo(() => (
    <>
      <section className="relative w-full h-screen"> {/* Increased height for better model visibility */}
        <ContentSection />
        <div ref={sceneRef} className="w-full h-full">
          <Suspense fallback={<div className="w-full h-full bg-gray-800" />}>
            <Canvas
              style={{ width: '100%', height: '100%' }}
              frameloop="demand"
              performance={{ min: 0.5 }}
              camera={{ position: [0, 0, 20], fov: 45 }} 
            >
              <Scene progress={progress} modelRef={modelRef} scale={[1, 1, 1]} /> 
            </Canvas>
          </Suspense>
        </div>
      </section>
      
      <section className="relative flex justify-center items-center h-screen">
        <ContentSection align="left" topPosition="40%" />
      </section>

      <section className="relative flex justify-center items-center h-screen">
        <ContentSection align="right" topPosition="40%" />
      </section>
      
      <section className="w-full relative flex justify-center items-center h-[110vh]">
        <ContentSection topPosition="30%" />
      </section>
    </>
  ), [progress]);

  return (
    <div ref={mainRef} className="w-full h-full overflow-hidden bg-[#30087D]">
      {sections}
    </div>
  );
};

export default React.memo(Section3Dnew);