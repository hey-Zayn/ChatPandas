import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Menu } from "lucide-react";

const NewNavbar = () => {
  return (
    <div className="w-full top-0 left-0 absolute flex justify-between items-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 text-white z-50">
      <Link href="/">
        <img
          src="/images/660e8ed8eb1804501de1d733_Group 1.svg"
          alt="Logo"
          className="w-[120px] sm:w-[150px] md:w-[180px]"
        />
      </Link>

      <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
        <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-[#E73C5F] border-none rounded-md hidden sm:block">
          <Link href={`/Contact`}>Book a Demo</Link>
        </button>
        <Sheet className="">
          <SheetTrigger className="px-4 py-4 rounded-full bg-[#191919] cursor-pointer">
            <Menu />
          </SheetTrigger>
          <SheetContent className={`bg-[#191919] text-white py-10 pl-2`}>
            <div className="w-full h-full">
              <SheetHeader>
                <SheetTitle className={`text-white`}>
                  <img
                    src="/images/660e8ed8eb1804501de1d733_Group 1.svg"
                    alt=""
                  />
                </SheetTitle>
                <SheetDescription>
                  <Accordion type="single" collapsible className="mt-5">
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={`text-white text-xl font-bold max-sm:text-lg hover:no-underline`}
                      >
                        SEO & Lead Generation
                      </AccordionTrigger>
                      <AccordionContent className={`text-white`}>
                        <div className="">
                          <ul className="flex flex-col gap-2 max-sm:gap-4 hover:text-white">
                            <Link href="/Search-Engine-Optimization"> <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}

                              Search Engine Optimization
                              {" "}
                            </li></Link>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Local-Search-Optimization">
                                Local Search Optimization
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Landing-Page-Optimization">
                                Landing Page Optimization
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Enterprise Level Reach
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Search-Engine-Optimization">
                                SEO for Leads
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Search-Engine-Optimization">
                                SEO for Amazon
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible className="mt-0">
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={`text-white text-xl font-bold max-sm:text-lg hover:no-underline`}
                      >
                        Paid Marketing Media & CRO
                      </AccordionTrigger>
                      <AccordionContent className={`text-white`}>
                        <div className="">
                          <ul className="flex flex-col gap-2 max-sm:gap-4 hover:text-white">
                            <Link href="/Search-Engine-Optimization"> <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              PPC & Ads
                            </li></Link>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Local-Search-Optimization">
                                Social Media Campaigning
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Landing-Page-Optimization">
                                Email Marketing
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Amazon Marketplace
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible className="mt-0">
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={`text-white text-xl font-bold max-sm:text-lg hover:no-underline`}
                      >
                        IT & Development Technology
                      </AccordionTrigger>
                      <AccordionContent className={`text-white`}>
                        <div className="">
                          <ul className="flex flex-col gap-2 max-sm:gap-4 hover:text-white">
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Search-Engine-Optimization">
                                Wordpress Website Development
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Local-Search-Optimization">
                                E-Commerce Solution
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Landing-Page-Optimization">
                                Logo Development
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Interactive UI/UX
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Video Production
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                App Development
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                CRM Generation
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                CMS Solution
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* <Accordion type="single" collapsible className="mt-0">
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={`text-white text-xl font-bold max-sm:text-lg hover:no-underline`}
                      >
                        Business Servicing & Management
                      </AccordionTrigger>
                      <AccordionContent className={`text-white`}>
                        <div className="">
                          <ul className="flex flex-col gap-2 max-sm:gap-4 hover:text-white">
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Search-Engine-Optimization">
                                Call Center
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Local-Search-Optimization">
                                Customer Service
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Landing-Page-Optimization">
                                Back Office
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Consulting
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Staffing
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Recruiting
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Benefits Consulting
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                HR Consulting
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                HR Outsourcing
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Business Consultants
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Change Management
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Strategy Development
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Corporate Training
                              </Link>{" "}
                            </li>
                            <li className="text-xl max-sm:text-base font-medium  text-white/50 cursor-pointer hover:text-white">
                              {" "}
                              <Link href="/Enterprise-Level-Reachn">
                                Association Management
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion> */}

                  <Link href={`/How-It-Works`}>  <SheetTitle
                    className={`text-white text-xl font-bold max-sm:text-lg mb-5 mt-4`}
                  >
                    How It Works
                  </SheetTitle></Link>

                  <Link href={`/Who-We-Are`}> <SheetTitle
                    className={`text-white text-xl font-bold max-sm:text-lg mb-5`}
                  >
                    Who We Are
                  </SheetTitle></Link>

                  <Link href={`/Contact`}> <SheetTitle
                    className={`text-white text-xl font-bold max-sm:text-lg mb-4`}
                  >
                    Contact
                  </SheetTitle></Link>
                </SheetDescription>
              </SheetHeader>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NewNavbar;
