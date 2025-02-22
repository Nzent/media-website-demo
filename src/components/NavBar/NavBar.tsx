"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    { name: "Contact", link: "/#contact" },
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

  return (
    <nav className="bg-white/80  backdrop-blur-3xl py-4 h-fit fixed top-0 inset-0 z-50 ">
      <div className="flex justify-between  w-full container mx-auto">
        {/* left */}
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center"
        >
          <Image
            src={"/svgs/ExcellenceW.svg"}
            width={200}
            height={50}
            alt={"Company logo"}
          />
        </motion.div>
        {/* right */}
        <div className="flex items-center">
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
      </div>
    </nav>
  );
}

export default NavBar;
