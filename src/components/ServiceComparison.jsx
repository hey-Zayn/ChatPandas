// components/ServiceComparison.jsx
import React, { useState, useEffect, useRef } from 'react';

const ServiceComparison = () => {
  const [activeTab, setActiveTab] = useState('agency');
  const pillsContainerRef = useRef(null);
  
  // Service tabs data
  const services = [
    { id: 'agency', name: 'Agency' },
    { id: 'inhouse', name: 'In-house Team' },
    { id: 'freelancer', name: 'Freelancers' },
  ];

  // Pill data for each service type
  const pillData = {
    agency: [
      { text: 'Flexible engagement models', color: 'bg-black', textColor: 'text-white', rotation: '-rotate-12' },
      { text: 'Dedicated project managers', color: 'bg-red-500', textColor: 'text-white', rotation: 'rotate-3' },
      { text: 'Rapid prototyping capabilities', color: 'bg-black', textColor: 'text-white', rotation: '-rotate-[25deg]' },
      { text: 'Cost-effective solutions', color: 'bg-purple-300', textColor: 'text-white', rotation: 'rotate-0' },
      { text: 'Agile development process', color: 'bg-blue-100', textColor: 'text-black', rotation: 'rotate-0' },
      { text: 'Full-stack expertise', color: 'bg-orange-500', textColor: 'text-white', rotation: 'rotate-180' },
      { text: 'Transparent communication', color: 'bg-blue-100', textColor: 'text-black', rotation: 'rotate-90' },
      { text: 'Customized solutions', color: 'bg-orange-500', textColor: 'text-white', rotation: '-rotate-3' },
      { text: 'On-time delivery', color: 'bg-lime-300', textColor: 'text-black', rotation: '-rotate-[35deg]' },
      { text: 'Consistent team members', color: 'bg-lime-300', textColor: 'text-black', rotation: '-rotate-12' },
    ],
    inhouse: [
      { text: 'Limited technical expertise', color: 'bg-purple-300', textColor: 'text-black', rotation: 'rotate-6' },
      { text: 'Higher operational costs', color: 'bg-orange-500', textColor: 'text-white', rotation: '-rotate-3' },
      { text: 'Resource constraints', color: 'bg-black', textColor: 'text-white', rotation: 'rotate-0' },
      { text: 'Slower time-to-market', color: 'bg-lime-300', textColor: 'text-black', rotation: '-rotate-12' },
      { text: 'Maintenance overhead', color: 'bg-blue-100', textColor: 'text-black', rotation: 'rotate-3' },
    ],
    freelancer: [
      { text: 'Variable availability', color: 'bg-orange-500', textColor: 'text-white', rotation: '-rotate-3' },
      { text: 'Limited scalability', color: 'bg-black', textColor: 'text-white', rotation: 'rotate-12' },
      { text: 'Inconsistent quality', color: 'bg-purple-300', textColor: 'text-black', rotation: 'rotate-0' },
      { text: 'Communication gaps', color: 'bg-lime-300', textColor: 'text-black', rotation: '-rotate-6' },
      { text: 'Narrow skill set', color: 'bg-blue-100', textColor: 'text-black', rotation: 'rotate-3' },
    ]
  };

  // Animation states
  const [animating, setAnimating] = useState(false);
  const [pillsVisible, setPillsVisible] = useState(true);

  // Handle tab changes with animations
  const handleTabChange = (tabId) => {
    if (animating || tabId === activeTab) return;
    
    setAnimating(true);
    setPillsVisible(false);
    
    // Delay showing new pills to allow fade out animation to complete
    setTimeout(() => {
      setActiveTab(tabId);
      setTimeout(() => {
        setPillsVisible(true);
        setAnimating(false);
      }, 100);
    }, 300);
  };

  // Create a randomized position style for pills
  const getPillPosition = (index, total) => {
    // Create a more distributed layout based on index
    const sectionSize = 100 / Math.ceil(Math.sqrt(total));
    const row = Math.floor(index / Math.ceil(Math.sqrt(total)));
    const col = index % Math.ceil(Math.sqrt(total));
    
    // Add some randomness to positions
    const randomX = Math.random() * 15 - 7.5;
    const randomY = Math.random() * 15 - 7.5;
    
    // Base positions
    const baseTop = row * sectionSize + randomY;
    const baseLeft = col * sectionSize + randomX;
    
    // Ensure positions are within container bounds
    const top = Math.max(5, Math.min(90, baseTop));
    const left = Math.max(5, Math.min(90, baseLeft));
    
    return { top: `${top}%`, left: `${left}%` };
  };

  // Generate random animation parameters for floating effect
  const getFloatingAnimation = (index) => {
    const randomDuration = 3 + Math.random() * 4; // Between 3-7s
    const randomDelay = Math.random() * 2; // Between 0-2s
    
    return {
      animationDuration: `${randomDuration}s`,
      animationDelay: `${randomDelay}s`,
      animationName: index % 2 === 0 ? 'float1' : 'float2',
    };
  };

  // Generate a unique z-index to create depth
  const getZIndex = (index, total) => {
    return 10 + (index % 3);
  };

  return (
    <div className="w-full relative overflow-hidden bg-white/5 rounded-lg p-4 md:p-6 lg:p-8 h-[600px] md:h-[500px]">
      {/* Service tabs */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8 relative z-20">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleTabChange(service.id)}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300
              ${activeTab === service.id 
                ? 'bg-pink-300 text-black shadow-md' 
                : 'bg-transparent text-gray-600 hover:bg-gray-100'}`}
          >
            {service.name}
          </button>
        ))}
      </div>
      
      {/* Pills container */}
      <div 
        ref={pillsContainerRef}
        className="relative w-full h-[400px] md:h-[350px]"
      >
        {/* Pills */}
        <div className={`transition-opacity duration-300 ${pillsVisible ? 'opacity-100' : 'opacity-0'}`}>
          {pillData[activeTab].map((pill, index) => {
            const position = getPillPosition(index, pillData[activeTab].length);
            const animation = getFloatingAnimation(index);
            const zIndex = getZIndex(index, pillData[activeTab].length);
            
            return (
              <div
                key={`${activeTab}-${index}`}
                className={`absolute px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium 
                  transform ${pill.rotation} ${pill.color} ${pill.textColor} shadow-md
                  transition-all duration-500 animate-float whitespace-nowrap z-${zIndex}`}
                style={{
                  ...position,
                  animationDuration: animation.animationDuration,
                  animationDelay: animation.animationDelay,
                  animationName: animation.animationName,
                  animationIterationCount: 'infinite',
                  animationDirection: 'alternate',
                  animationTimingFunction: 'ease-in-out',
                }}
              >
                {pill.text}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* CSS for floating animations */}
      <style jsx>{`
        @keyframes float1 {
          0% {
            transform: translate(0, 0) ${pillData[activeTab][0]?.rotation || ''};
          }
          50% {
            transform: translate(10px, -15px) ${pillData[activeTab][0]?.rotation || ''};
          }
          100% {
            transform: translate(0, 0) ${pillData[activeTab][0]?.rotation || ''};
          }
        }
        
        @keyframes float2 {
          0% {
            transform: translate(0, 0) ${pillData[activeTab][0]?.rotation || ''};
          }
          60% {
            transform: translate(-12px, -10px) ${pillData[activeTab][0]?.rotation || ''};
          }
          100% {
            transform: translate(0, 0) ${pillData[activeTab][0]?.rotation || ''};
          }
        }
        
        .animate-float {
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ServiceComparison;