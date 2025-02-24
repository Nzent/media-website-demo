import Link from "next/link";
import React from "react";

function CenterSection() {
  interface IQuickLink {
    name: string;
    link: string;
  }
  // center section quick links
  const QuickLinks: IQuickLink[] = [
    { name: "Home", link: "/#home" },
    { name: "About Us", link: "/#about-us" },
    { name: "Services", link: "/#services" },
    { name: "Feedbacks", link: "/#feedbacks" },
    { name: "Portfolios", link: "/#portfolios" },
    { name: "Contact", link: "/contact-us" },
  ];
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center basis-1/3 max-md:justify-start max-md:items-start">
      {/* title */}
      <div className="text-body font-semibold pl-1 max-md:-ml-1 max-lg:ml-4">Quick Links</div>
      {/* links */}
      <ul className="flex flex-col gap-y-2 text-body max-md:text-caption max-lg:text-caption">
        {QuickLinks.map((item, index) => (
          <li key={index} className="hover:text-green-500 duration-500">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CenterSection;
