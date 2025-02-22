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
    { name: "Testimonials", link: "/#testimonials" },
    { name: "Portfolio", link: "/#portfolio" },
    { name: "Blog", link: "/blog" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <nav className="bg-white/80  backdrop-blur-3xl p-4 h-fit fixed top-0 inset-0 z-50 ">
      <div className="flex justify-between  w-full container mx-auto">
        {/* left */}
        <div className="flex items-center">
          <Image
            src={"/svgs/ExcellenceW.svg"}
            width={200}
            height={50}
            alt={"Company logo"}
          />
        </div>
        {/* right */}
        <div className="flex items-center">
          <ul>
            {NavBarLinks.map((item, index) => (
              <li
                key={index}
                className="inline-block px-4 py-2 font-semibold hover:text-green-500 duration-500 text-body"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
