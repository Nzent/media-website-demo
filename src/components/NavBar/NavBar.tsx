"use client";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function NavBar() {
  interface INavItem {
    name: string;
    link: string;
  }
  const NavBarLinks: INavItem[] = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/#about-us" },
    { name: "Services", link: "/#services" },
    { name: "Feedbacks", link: "/#feedbacks" },
    { name: "Portfolio", link: "/#portfolio" },
    { name: "Contact", link: "/contact-us" },
  ];

  const variants = {
    initial: () => ({
      y: -50,
    }),
    visible: (custom: number) => ({
      y: 0,
      transition: { delay: custom * 0.1 },
    }),
  };

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  // Function to handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggleMenu(false); // Close the menu if clicked outside
      }
    };

    // Add event listener when the menu is open
    if (toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);
  // scroll position cal
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        isScrolled ? "bg-white/80 shadow-md" : "bg-transparent "
      }   backdrop-blur-3xl py-4 h-fit fixed top-0 inset-0 z-50 transition-all duration-500`}
    >
      <div className="flex justify-between  w-full container mx-auto">
        {/* left */}
        <motion.div
          ref={menuRef}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center basis-1/2"
        >
          <Link href="/" className="cursor-pointer">
            <Image
              src={"/svgs/ExcellenceW.svg"}
              width={200}
              height={50}
              alt={"Company logo"}
            />
          </Link>
        </motion.div>
        {/* right */}
        <div className="items-center flex justify-end max-md:hidden max-lg:hidden basis-1/2">
          <motion.ul
            whileInView="visible"
            initial="initial"
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            {NavBarLinks.map((item, index) => (
              <motion.li
                custom={index}
                variants={variants}
                key={index}
                className="inline-block px-4 py-2 font-semibold hover:text-green-500 duration-500 text-body"
              >
                <Link href={item.link}>{item.name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        {/* right (mobile) */}
        <div className="hidden max-md:flex max-lg:flex basis-1/2 justify-end w-full items-center px-2">
          {/* menu icon */}
          {!toggleMenu ? (
            <IconMenuDeep
              size={30}
              onClick={() => setToggleMenu(!toggleMenu)}
              className="cursor-pointer"
            />
          ) : (
            <IconX
              size={30}
              onClick={() => setToggleMenu(!toggleMenu)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      {/* moblie menu */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Start with 0 height and opacity
            animate={{ opacity: 1, height: "auto" }} // Animate to full height and opacity
            exit={{ opacity: 0, height: 0 }} // Animate back to 0 height and opacity
            className="flex flex-col justify-center w-full items-center mt-4 overflow-hidden"
          >
            {NavBarLinks.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-body font-semibold py-2 hover:text-green-500 duration-500"
                onClick={() => setToggleMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
