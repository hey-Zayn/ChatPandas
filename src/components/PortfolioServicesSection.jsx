'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import { Globe, Smartphone, Palette, ShoppingCart, Cloud, BarChart2, Cpu, DollarSign, Briefcase, Search, Brain } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive websites and web applications that deliver exceptional user experiences.",
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications for iOS and Android with native performance.",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing interfaces that enhance user engagement.",
    icon: <Palette className="w-8 h-8" />
  },
  {
    title: "E-commerce Solutions",
    description: "Developing scalable online stores with secure payment integrations and inventory management.",
    icon: <ShoppingCart className="w-8 h-8" />
  },
  {
    title: "Cloud Services",
    description: "Implementing cloud infrastructure and services for improved scalability and reliability.",
    icon: <Cloud className="w-8 h-8" />
  },
  {
    title: "Digital Marketing",
    description: "Strategies to boost online presence, drive traffic, and increase conversions.",
    icon: <BarChart2 className="w-8 h-8" />
  },
  {
    title: "IT Services",
    description: "Comprehensive IT solutions including network management, cybersecurity, and technical support.",
    icon: <Cpu className="w-8 h-8" />
  },
  {
    title: "Paid Marketing",
    description: "Targeted advertising campaigns across platforms to maximize ROI and customer acquisition.",
    icon: <DollarSign className="w-8 h-8" />
  },
  {
    title: "Business Services",
    description: "End-to-end business solutions including process optimization and strategic consulting.",
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: "SEO",
    description: "Search engine optimization strategies to improve organic rankings and website visibility.",
    icon: <Search className="w-8 h-8" />
  },
  {
    title: "AI Solutions",
    description: "Developing intelligent systems and machine learning models to automate processes and gain insights.",
    icon: <Brain className="w-8 h-8" />
  }
];

const PortfolioServicesSection = () => {
  const containerRef = useRef();
  const horizontalRef = useRef();
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Calculate total width
    const cards = cardsRef.current;
    const totalWidth = cards.reduce((acc, card) => acc + card.offsetWidth + 32, 0);

    // Set horizontal container width
    gsap.set(horizontalRef.current, { width: totalWidth });

    // Create isolated animation scope
    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth - window.innerWidth}`,
          id: "services-section", // Unique ID
          anticipatePin: 1
        }
      });

      tl.to(horizontalRef.current, {
        x: -(totalWidth - window.innerWidth),
        ease: "none"
      });

      // Individual card animations
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            containerAnimation: tl,
            start: "left 80%",
            end: "right 20%",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.1
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <div className="absolute top-10 left-0 right-0 text-center flex px-10 justify-between">
            <div className="flex flex-col space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#330380] to-[#6E0AD9] bg-clip-text text-transparent">
                    Services We Offer
                </h2>
                <p className="text-lg text-gray-400 max-w-md">
                    Comprehensive services from front-end to back-end development
                </p>
            </div>
            <div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.3)] transition-all duration-300">
                    Explore Services
                </Button>
            </div>
      </div>

      <div 
        ref={horizontalRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 h-2/3 flex items-center gap-8 px-[10vw] py-12"
      >
        {services.map((service, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="flex-shrink-0 w-100 h-full bg-black rounded-2xl shadow-lg overflow-hidden  hover:shadow-xl transition-all duration-300 group"
          >
            <div className="p-8 h-full flex flex-col bg-gradient-to-br from-black via-[#330380] to-black rounded-xl border border-gray-800/50 hover:border-gray-700 transition-all duration-300">
              <div className="text-5xl mb-6 text-white ">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 flex-grow">{service.description}</p>
              <button className="mt-6 self-start px-6 py-3  text-white  transition-all duration-300 cursor-pointer">
                Learn more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioServicesSection;