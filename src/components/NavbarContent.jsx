"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavbarContent = ({ ulRef }) => {
  const [openSections, setOpenSections] = useState({
    seo: true,
    marketing: false,
    development: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => {
      const newState = {};

      for (const key in prev) {
        newState[key] = key === section ? !prev[key] : false;
      }

      return newState;
    });
  };

  const DURATION = 0.25;
  const STAGGER = 0.025;

  const FlipLink = ({ children, to }) => {
    return (
      <Link href={to}>
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="relative block overflow-hidden whitespace-nowrap text-1xl font-semibold max-sm:text-xs lg:text-2xl text-[#929292] hover:text-black"
          style={{
            lineHeight: 0.75,
            fontSize: "18px",
          }}
        >
          <div>
            {children.split("").map((l, i) =>
              l === " " ? (
                <span key={i} className="inline-block">
                  &nbsp;
                </span>
              ) : (
                <motion.span
                  variants={{
                    initial: { y: 0 },
                    hovered: { y: "-110%" },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * i,
                  }}
                  className="inline-block"
                  key={i}
                >
                  {l}
                </motion.span>
              )
            )}
          </div>
          <div className="absolute inset-0">
            {children.split("").map((l, i) =>
              l === " " ? (
                <span key={i} className="inline-block">
                  &nbsp;
                </span>
              ) : (
                <motion.span
                  variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0 },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * i,
                  }}
                  className="inline-block"
                  key={i}
                >
                  {l}
                </motion.span>
              )
            )}
          </div>

        </motion.div>
      </Link>
    );
  };

  return (
    <ul ref={ulRef} className="z-50 uppercase space-y-2 mt-12 grid gap-4 w-full">
      <li>
        <button
          onClick={() => toggleSection("seo")}
          className="hover:no-underline text-left w-full flex justify-between items-center text-xl font-semibold text-black hover:text-[#E73C5F] transition-colors duration-300"
        >
          SEO & Lead Generation
          <span>{openSections.seo ? "−" : "+"}</span>
        </button>
        {openSections.seo && (
          <ul className="flex flex-col py-4 gap-6 pl-4 max-sm:pl-0 mt-2 text-wrap">
            <li>
              <FlipLink to="/search-engine-optimization">
                Search Engine Optimization
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/local-search-optimization">
                Local Search Optimization
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/landing-page-optimization">
                Landing Page Optimization
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/seo-for-leads">SEO for Leads</FlipLink>
            </li>
            <li>
              <FlipLink to="/seo-for-amazon">SEO for Amazon</FlipLink>
            </li>
          </ul>
        )}
      </li>

      <li>
        <button
          onClick={() => toggleSection("marketing")}
          className="hover:no-underline text-left w-full flex justify-between items-center text-xl font-semibold text-black hover:text-[#E73C5F] transition-colors duration-300"
        >
          Paid Marketing Media & CRO
          <span>{openSections.marketing ? "−" : "+"}</span>
        </button>
        {openSections.marketing && (
          <ul className="flex flex-col py-4 gap-6 pl-4 max-sm:pl-0 mt-2 text-wrap">
            <li>
              <FlipLink to="/paid-media-advertisement">PPC & Ads</FlipLink>
            </li>
            <li>
              <FlipLink to="/social-media-marketing">
                Social Media Campaigning
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/email-marketing">Email Marketing</FlipLink>
            </li>
            <li>
              <FlipLink to="/amazon-advertisement">Amazon Marketplace</FlipLink>
            </li>
          </ul>
        )}
      </li>

      <li>
        <button
          onClick={() => toggleSection("development")}
          className="hover:no-underline text-left w-full flex justify-between items-center text-xl font-semibold text-black hover:text-[#E73C5F] transition-colors duration-300">
          IT & Development Technology
          <span>{openSections.development ? "−" : "+"}</span>
        </button>
        {openSections.development && (
          <ul className="flex flex-col py-4 gap-6 pl-4 max-sm:pl-0 mt-2 text-wrap">
            <li>
              <FlipLink to="/wordpress-website-development">
                Wordpress Website Development
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/e-commerce-website-development">E-Commerce Solution</FlipLink>
            </li>
            <li>
              <FlipLink to="/logo">Logo Development</FlipLink>
            </li>
            <li>
              <FlipLink to="/ui-ux">Interactive UI/UX</FlipLink>
            </li>
            <li>
              <FlipLink to="/video-production">Video Production</FlipLink>
            </li>
            <li>
              <FlipLink to="/app-development">App Development</FlipLink>
            </li>
            <li>
              <FlipLink to="/crm">CRM Generation</FlipLink>
            </li>
            <li>
              <FlipLink to="/software-development">CMS Solution</FlipLink>
            </li>
          </ul>
        )}
      </li>

      <li>
        <FlipLink to="/How-It-Works">How-It-Works</FlipLink>
      </li>
      <li>
        <FlipLink to="/Who-We-Are">Who-We-Are</FlipLink>
      </li>
      <li>
        <FlipLink to="/Contact">Book a demo</FlipLink>
      </li>
      
    </ul>
  );
};

export default NavbarContent;