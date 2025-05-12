'use client';
import React, { useRef, useState, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const PPCP = () => {
  // Refs
  const containerRef = useRef();
  const titleRef = useRef();
  const projectCardsRef = useRef([]);
  const certificationCardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const scrollTriggers = useRef([]);

  // State
  const [activeFilter, setActiveFilter] = useState('all');

  // Data
  const categories = useMemo(() => [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'mern', label: 'MERN' },
    { id: 'mean', label: 'MEAN' },
    { id: 'cms', label: 'CMS' },
    { id: 'uiux', label: 'UI/UX' },
  ], []);

  const projects = useMemo(() => [
    // Your projects data here
  ], []);

  const certifications = useMemo(() => [
    {
      id: 1,
      title: "ISO 9001",
      description: "Quality Management System certification",
      tags: ["Quality Assurance", "Process Documentation"],
      gradient: "from-purple-900 to-indigo-800"
    },
    {
      id: 2,
      title: "ISO 27001",
      description: "Information Security Management certification",
      tags: ["Information Security", "Risk Management"],
      gradient: "from-green-900 to-teal-800"
    },
    {
      id: 3,
      title: "ISO 14001",
      description: "Environmental Management System certification",
      tags: ["Environmental Management", "Sustainability"],
      gradient: "from-blue-900 to-cyan-800"
    },
    {
      id: 4,
      title: "ISO 45001",
      description: "Occupational Health and Safety certification",
      tags: ["Workplace Safety", "Risk Assessment"],
      gradient: "from-red-900 to-orange-800"
    },
   
    // Add other certifications...
  ], []);

  const filteredProjects = useMemo(() => 
    activeFilter === 'all' 
      ? projects 
      : projects.filter(p => p.categories.includes(activeFilter)),
  [projects, activeFilter]);

  // Animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Clear existing triggers
    scrollTriggers.current.forEach(trigger => trigger.kill());
    scrollTriggers.current = [];

    // Title animation
    scrollTriggers.current.push(
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        animation: gsap.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        })
      })
    );

    // Desktop animations
    if (window.innerWidth >= 768) {
      const baseX = window.innerWidth > 1600 ? 1200 : 800;
      const rotations = [-15, 15, -15, 15, -15, 15];
      
      // Projects animation
      projectCardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        scrollTriggers.current.push(
          ScrollTrigger.create({
            trigger: card,
            start: "top 70%",
            toggleActions: "play none none none",
            animation: gsap.from(card, {
              rotationZ: rotations[index % rotations.length],
              x: baseX,
              opacity: 0,
              duration: 1.2,
              ease: "elastic.out(1, 0.5)"
            })
          })
        );
      });

      // Certifications animation
      certificationCardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        scrollTriggers.current.push(
          ScrollTrigger.create({
            trigger: card,
            start: "top 60%",
            toggleActions: "play none none none",
            animation: gsap.from(card, {
              rotationZ: rotations[index],
              x: baseX,
              opacity: 0,
              duration: 1.2,
              ease: "elastic.out(1, 0.5)",
              delay: index * 0.1
            })
          })
        );
      });
    } else {
      // Mobile animations
      mobileCardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const isEven = index % 2 === 0;
        scrollTriggers.current.push(
          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
            animation: gsap.from(card, {
              x: isEven ? -80 : 80,
              y: 30,
              opacity: 0,
              scale: 0.9,
              duration: 0.7,
              ease: "power3.out",
              delay: index * 0.08
            })
          })
        );
      });
    }

    return () => {
      scrollTriggers.current.forEach(trigger => trigger.kill());
    };
  }, [activeFilter]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen py-20 px-4 sm:px-8 bg-gray-950 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-900/10 blur-3xl" />
      </div>

      {/* Title */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-white uppercase mb-4"
        >
          Projects & Certifications
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="relative z-10 flex justify-center gap-3 mt-8 flex-wrap">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === category.id
                ? 'bg-white text-black shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid - Desktop */}
      <div className="relative z-10 max-w-7xl mx-auto mt-12 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectCardsRef.current[index] = el}
              className="project-card bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications - Desktop */}
      <div className="relative z-10 max-w-7xl mx-auto mt-20 hidden md:block">
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              ref={el => certificationCardsRef.current[index] = el}
              className={`certification-card w-80 h-96 rounded-xl p-6 shadow-xl bg-gradient-to-br ${cert.gradient} text-white`}
            >
              <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
              <p className="text-sm mb-4">{cert.description}</p>
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-white/20 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mt-12 space-y-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={el => mobileCardsRef.current[index] = el}
            className="project-card bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{project.description}</p>
            </div>
          </div>
        ))}

        {certifications.map((cert, index) => (
          <div
            key={`mobile-cert-${cert.id}`}
            ref={el => mobileCardsRef.current[filteredProjects.length + index] = el}
            className={`certification-card w-full rounded-xl p-6 shadow-lg bg-gradient-to-br ${cert.gradient} text-white`}
          >
            <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
            <p className="text-sm mb-3">{cert.description}</p>
            <div className="flex flex-wrap gap-2">
              {cert.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-white/20 px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PPCP;