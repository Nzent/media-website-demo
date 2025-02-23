import Link from "next/link";
import React from "react";

function CenterSection() {
  const QuickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Services", link: "/" },
    { name: "Feedbacks", link: "/" },
    { name: "Portfolios", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center basis-1/3 max-md:justify-start max-md:items-start">
      <div className="text-body font-semibold">Quick Links</div>
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
