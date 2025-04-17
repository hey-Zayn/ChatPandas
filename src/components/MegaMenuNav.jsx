"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowDownNarrowWide, Icons } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Wordpress Website Development",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "E-Commerce Solution",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "PHP Programming Development",
    href: "#",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "E-commerce Website Design",
    href: "#",
    description: "Visually or semantically separates content.",
  },
  {
    title: "ADA Compliance Services",
    href: "#",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Logo Development",
    href: "#",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Branding Theme Development",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Interactive UI/UX",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "SEO Content Development",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Video Production",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "App Development",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "CRM Generation",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "AI-Monitoring & Integration",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Cloud Hosting Solutions",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "CMS Solution",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function MegaMenuNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* SEO - Leads */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`text-black bg-[#E8E0CD]`}>
            SEO & Lead Generation
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex  gap-3 p-4 md:w[400px] lg:w-[500px]">
              <li className="row-span-3 space-y-2">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-[50%] w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Search Engine Optimization
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Get to the Top Page of Search Engines: With targeted
                        Revenue growth
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-[50%] w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        SEO for Leads
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Is your business ranking on the first page of Google?
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <div>
                <ListItem href="/docs" title="LPO">
                  Landing Page Optimization
                </ListItem>
                <ListItem href="/docs/installation" title="LSO">
                  Local Search Optimization
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Amazon">
                  SEO for Amazon
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Paid Marketing Media & CRO */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`text-black bg-[#E8E0CD]`}>
            SEO & Lead Generation
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex  gap-3 p-4 md:w[400px] lg:w-[500px]">
              <li className="row-span-3 space-y-2 flex gap-2">
                <div>
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-[50%] w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          PPC & Ads
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Dominate Your Market with Corecentrix: 200%+ ROI
                          Growth Through Precision-Powered Paid Digital
                          Marketing
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-[50%] w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Social Media Campaigning
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Develop your brand with a social media promotion
                          specifically designed to increase referrals, revenue,
                          and connection.
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </div>
                <div>
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-[50%] w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Email Marketing
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Almost all effective digital marketing strategies
                          include email marketing as an essential factor. We
                          will aid you in expanding and boosting your revenue
                          through marketing emails.
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-[50%] w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Amazon Marketplace
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          To enhance your Amazon presence and boost retail
                          orders, improve the product listings on your Amazon
                          store by accommodating our amazon marketing
                          techniques.
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </div>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* IT & Development Technology  */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`text-black bg-[#E8E0CD]`}>
            IT & Development Technology
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-3 grid-rows-5 w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`text-black bg-[#E8E0CD]`}>
            Who We Are
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex  gap-3 p-4 md:w[400px] lg:w-[500px]">
              <li className="row-span-3 space-y-2">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-[50%] w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Search Engine Optimization
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Get to the Top Page of Search Engines: With targeted
                        Revenue growth
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-[50%] w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        SEO for Leads
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Is your business ranking on the first page of Google?
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <div>
                <ListItem href="/docs" title="LPO">
                  Landing Page Optimization
                </ListItem>
                <ListItem href="/docs/installation" title="LSO">
                  Local Search Optimization
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Amazon">
                  SEO for Amazon
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

   
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
