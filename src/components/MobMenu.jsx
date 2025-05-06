'use client'
import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const subMenuDrawer = {
  enter: {
    height: "auto",
    overflow: "hidden",
  },
  exit: {
    height: 0,
    overflow: "hidden",
  },
};

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = useCallback(() => {
    setIsOpen(prev => !prev);
    setClicked(null);
  }, []);

  const handleClick = useCallback((i) => {
    setClicked(prev => prev === i ? null : i);
  }, []);

  const menuItems = useMemo(() => Menus.map(({ name, subMenu }, i) => {
    const isClicked = clicked === i;
    const hasSubMenu = subMenu?.length;
    
    return (
      <li key={`${name}-${i}`}>
        <span
          className="flex p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
          onClick={() => handleClick(i)}
        >
          {name}
          {hasSubMenu && (
            <ChevronDown
              className={`ml-auto transition-transform ${isClicked ? "rotate-180" : ""}`}
            />
          )}
        </span>
        {hasSubMenu && (
          <motion.ul
            initial="exit"
            animate={isClicked ? "enter" : "exit"}
            variants={subMenuDrawer}
            className="ml-5"
          >
            {subMenu.map(({ name, icon, link }) => {
              const IconComponent = icon;
              return (
                <Link href={link} key={name} passHref legacyBehavior>
                  <li className="p-2 flex hover:bg-white/5 rounded-md gap-x-4 cursor-pointer">
                    {IconComponent && <IconComponent size={17} />}
                    {name}
                  </li>
                </Link>
              );
            })}
          </motion.ul>
        )}
      </li>
    );
  }), [Menus, clicked, handleClick]);

  return (
    <div>
      <button 
        className="lg:hidden z-[999] relative" 
        onClick={toggleDrawer}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A]/50 backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <ul>
          {menuItems}
        </ul>
      </motion.div>
    </div>
  );
}