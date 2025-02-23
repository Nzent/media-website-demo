"use client";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function NavBar() {
  interface INavItem {
    name: string;
    link: string;
    sectionId: string;
  }

  const NavBarLinks = React.useMemo<Array<INavItem>>(
    () => [
      { name: "Home", link: "/#intro", sectionId: "intro" },
      { name: "About us", link: "/#about-us", sectionId: "about-us" },
      { name: "Services", link: "/#services", sectionId: "services" },
      { name: "Feedbacks", link: "/#feedbacks", sectionId: "feedbacks" },
      { name: "Portfolio", link: "/#portfolios", sectionId: "portfolios" },
      { name: "Contact", link: "/contact-us", sectionId: "contact" },
    ],
    []
  );

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle intersection observer for hash-based sections
  useEffect(() => {
    // Only set up observer if we're on the home page
    if (pathname !== "/") {
      return;
    }

    const options = {
      threshold: 0.6,
      rootMargin: "-80px 0px 0px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Only observe sections with hash-based navigation
    NavBarLinks.forEach((item) => {
      if (item.link.startsWith("/#")) {
        const element = document.getElementById(item.sectionId);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [NavBarLinks, pathname]);

  // Handle active state for regular routes
  useEffect(() => {
    if (pathname !== "/") {
      // Find matching route
      const matchingLink = NavBarLinks.find(
        (item) => !item.link.startsWith("/#") && item.link === pathname
      );
      if (matchingLink) {
        setActiveSection(matchingLink.sectionId);
      }
    }
  }, [pathname, NavBarLinks]);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggleMenu(false);
      }
    };

    if (toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  const variants = {
    initial: () => ({
      y: -50,
    }),
    visible: (custom: number) => ({
      y: 0,
      transition: { delay: custom * 0.1 },
    }),
  };

  // Helper function to determine if link should be active
  const isLinkActive = (item: INavItem) => {
    if (item.link.startsWith("/#")) {
      // For hash-based navigation, use intersection observer result
      return activeSection === item.sectionId && pathname === "/";
    } else {
      // For regular routes, use pathname matching
      return pathname === item.link;
    }
  };

  return (
    <nav
      className={`${
        isScrolled ? "bg-white/80 shadow-md" : "bg-transparent"
      } backdrop-blur-3xl py-4 h-fit fixed top-0 inset-0 z-50 transition-all duration-500`}
    >
      <div className="flex justify-between w-full container mx-auto">
        {/* Logo */}
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
              src="/svgs/ExcellenceW.svg"
              width={200}
              height={50}
              alt="Company logo"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
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
                className="inline-block px-4 py-2"
              >
                <Link
                  href={item.link}
                  className={`font-semibold duration-500 text-body ${
                    isLinkActive(item)
                      ? "text-green-500 font-bold"
                      : "hover:text-green-500"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="hidden max-md:flex max-lg:flex basis-1/2 justify-end w-full items-center px-2">
          {!toggleMenu ? (
            <IconMenuDeep
              size={30}
              onClick={() => setToggleMenu(true)}
              className="cursor-pointer"
            />
          ) : (
            <IconX
              size={30}
              onClick={() => setToggleMenu(false)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col justify-center w-full items-center mt-4 overflow-hidden"
          >
            {NavBarLinks.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`py-2 font-semibold duration-500 ${
                  isLinkActive(item)
                    ? "text-green-500 font-semibold"
                    : "text-body hover:text-green-500"
                }`}
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
