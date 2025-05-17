"use client";
import React, { useRef, useCallback, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';

// Lazy load components
const LazyImage = dynamic(() => import('next/image'), { 
  ssr: false,
  loading: () => <div className="w-full h-auto bg-gray-200 animate-pulse" />
});

// Create a custom Suspense boundary component
const CustomSuspense = ({ children }) => (
  <React.Suspense fallback={<div className="w-full h-auto bg-gray-200 animate-pulse" />}>
    {children}
  </React.Suspense>
);

const Section7 = () => {
  // Refs
  const section7Ref = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);
  const mobileCardRefs = useRef([]);
  const scrollTriggersRef = useRef([]);

  // Memoized constants
  const rotations = useMemo(() => [-15, 15, -15, 15, -15, 15], []);
  const cardCount = 6;

  // Optimized mobile animation creation
  const createMobileAnimationS7 = useCallback((gsap, ScrollTrigger, mobileCardRef, isEven, index) => {
    if (!mobileCardRef) return null;

    const tl = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "power2.out",
      },
    });

    const st = ScrollTrigger.create({
      trigger: mobileCardRef,
      start: "top 90%",
      toggleActions: "play none none none",
      once: true,
      animation: tl.fromTo(
        mobileCardRef,
        {
          x: isEven ? -80 : 80,
          y: 30,
          opacity: 0,
          scale: 0.9,
          rotation: isEven ? -15 : 15,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          delay: index * 0.05,
        }
      ),
      fastScrollEnd: true,
    });

    scrollTriggersRef.current.push(st);
    return st;
  }, []);

  // Optimized ref initialization
  const initRefs = useCallback((el, index, refArray) => {
    if (el && !refArray.current[index]) {
      refArray.current[index] = el;
    }
  }, []);

  // Main animation setup
  useEffect(() => {
    let mounted = true;
    let gsap, ScrollTrigger;

    const loadAnimations = async () => {
      try {
        // Dynamically import GSAP libraries
        gsap = (await import('gsap')).default;
        ScrollTrigger = (await import('gsap/ScrollTrigger')).default;

        if (!mounted || !section7Ref.current) return;

        gsap.registerPlugin(ScrollTrigger);

        // Clear existing ScrollTriggers
        scrollTriggersRef.current.forEach((st) => st.kill());
        scrollTriggersRef.current = [];

        if (window.innerWidth >= 768) {
          // Desktop animations
          const screenWidth = window.innerWidth;
          const baseX = Math.min(screenWidth * 0.75, 1200);

          const masterTl = gsap.timeline({
            defaults: {
              duration: 2,
              ease: "power1.inOut",
            },
          });

          const masterST = ScrollTrigger.create({
            trigger: section7Ref.current,
            start: "top top",
            end: "+=200%",
            scrub: 0.8,
            animation: masterTl,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            refreshPriority: 1,
          });

          scrollTriggersRef.current.push(masterST);

          // Text animation
          masterTl.from(
            textRef.current,
            {
              opacity: 0,
              y: 20,
              duration: 3,
            },
            0
          );

          // Card animations
          cardRefs.current.forEach((cardRef, index) => {
            if (!cardRef) return;

            masterTl.addLabel(`card${index}Enter`, 2 + index * 3);

            masterTl.from(
              cardRef,
              {
                rotationZ: rotations[index],
                rotationY: rotations[index],
                rotationX: rotations[index],
                x: baseX,
                y: -150,
                opacity: 0,
              },
              `card${index}Enter`
            );
          });

          // Exit animations
          cardRefs.current.forEach((cardRef, index) => {
            if (!cardRef) return;

            masterTl.addLabel(`card${index}Exit`, 2 + cardCount * 3 + 8 + index * 3);

            masterTl.to(
              cardRef,
              {
                rotationZ: rotations[index] * -1,
                rotationY: rotations[index] * -1,
                rotationX: rotations[index] * -1,
                x: -baseX,
                y: 150,
                opacity: 0,
              },
              `card${index}Exit`
            );
          });
        } else {
          // Mobile animations
          mobileCardRefs.current.forEach((ref, index) => {
            if (ref) {
              createMobileAnimationS7(gsap, ScrollTrigger, ref, index % 2 === 0, index);
            }
          });
        }
      } catch (error) {
        console.error("Animation loading error:", error);
      }
    };

    loadAnimations();

    return () => {
      mounted = false;
      scrollTriggersRef.current.forEach((st) => st.kill());
      scrollTriggersRef.current = [];
    };
  }, [createMobileAnimationS7, rotations, cardCount]);

  return (
    <>
      <div
        ref={section7Ref}
        className="w-full lg:h-[120vh] md:h-[70vh] py-20 max-sm:hidden overflow-hidden bg-white"
      >
        <div className="w-full">
          <h1
            ref={textRef}
            className="text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-center uppercase font-bold text-black px-4"
          >
            Our Services & Certifications
          </h1>
        </div>

        <div className="w-full px-20 mt-20">
          <div className="flex justify-start items-center mt-30">
            {Array.from({ length: cardCount }).map((_, index) => (
              <div
                key={index}
                ref={(el) => initRefs(el, index, cardRefs)}
                className={`card w-90 z-[${index + 1}] ${index > 0 ? '-ml-20' : ''}`}
              >
                <CustomSuspense>
                  <LazyImage
                    src={`/images/WP${index + 1}.avif`}
                    alt={`BPO Challenge Card ${index + 1}`}
                    width={360}
                    height={240}
                    className="w-full h-auto"
                    loading="lazy"
                    quality={85}
                  />
                </CustomSuspense>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full h-full overflow-hidden lg:hidden md:hidden max-sm:block bg-white">
        <div className="h-full w-full py-8 px-10 overflow-hidden">
          <div className="flex flex-col justify-center gap-6">
            <div className="w-full flex flex-col justify-center mb-8">
              <h2 className="text-center text-3xl font-bold text-black">SERVICES & CERTIFICATIONS</h2>
            </div>
            <div className="w-full">
              <div className="flex flex-col justify-center items-center gap-6">
                {Array.from({ length: cardCount }).map((_, index) => (
                  <div
                    key={index}
                    ref={(el) => initRefs(el, index, mobileCardRefs)}
                    className="card w-90"
                  >
                    <CustomSuspense>
                      <LazyImage
                        src={`/images/WP${index + 1}.avif`}
                        alt={`BPO Challenge Card ${index + 1}`}
                        width={360}
                        height={240}
                        className="w-full h-auto"
                        loading="lazy"
                        quality={85}
                      />
                    </CustomSuspense>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Section7);