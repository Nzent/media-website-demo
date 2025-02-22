import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import React, { JSX } from "react";

function RightSection() {
  interface IQuickLink {
    icon: JSX.Element;
    link: string;
  }

  const ContactInfo: IQuickLink[] = [
    {
      icon: <IconMail className="opacity-60" />,
      link: "Z7Y6U@example.com",
    },
    {
      icon: <IconPhone className="opacity-60" />,
      link: "+94 77 123 4567",
    },
    {
      icon: <IconMapPin className="opacity-60" />,
      link: "114/1, Colombo, Sri Lanka",
    },
  ];
  return (
    <div className="flex flex-col gap-y-4 justify-start items-end basis-1/3">
      <div className="text-body font-semibold">Contact Info</div>
      <ul className="flex flex-col items-start gap-y-4 text-body">
        {ContactInfo.map((contact, index) => (
          <li key={index} className="flex gap-x-2 items-center ">
            <Link href={contact.link} className="flex gap-x-4">
              {contact.icon} {contact.link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RightSection;
