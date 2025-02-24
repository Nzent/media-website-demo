import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import React, { JSX } from "react";

function RightSection() {
  interface IContactInfo {
    icon: JSX.Element;
    title: string;
    link: string;
  }

  // contact info
  const ContactInfo: IContactInfo[] = [
    {
      icon: <IconMail className="opacity-60" />,
      title: "excellenceagency@mail.com",
      link: "mailto:excellenceagency@mail.com",
    },
    {
      icon: <IconPhone className="opacity-60" />,
      title: "+94 77 123 4567",
      link: "tel:+94 771234567",
    },
    {
      icon: <IconMapPin className="opacity-60" />,
      title: "114/1, Colombo, Sri Lanka",
      link: "https://maps.google.com",
    },
  ];
  return (
    <div className="flex flex-col gap-y-4  basis-1/3 max-md:basis-0 max-md:items-start">
      <div className="flex flex-col justify-start items-start gap-y-4">
        {/* top title */}
        <div className="text-body font-semibold ">Contact Info</div>
        {/* contact info links */}
        <ul className="flex flex-col gap-y-4 text-body max-lg:text-caption">
          {ContactInfo.map((contact, index) => (
            <li key={index} className="flex gap-x-2 items-center ">
              <Link
                href={contact.link}
                className="flex gap-x-4 max-md:text-caption"
              >
                {contact.icon} {contact.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RightSection;
