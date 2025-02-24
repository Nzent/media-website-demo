import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandDribbble,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";

function LeftSection() {
  interface ISocialMedia {
    icon: JSX.Element;
    link: string;
  }
  // social medial links
  const SocialMedia: ISocialMedia[] = [
    { icon: <IconBrandFacebook />, link: "/" },
    { icon: <IconBrandInstagram />, link: "/" },
    { icon: <IconBrandX />, link: "/" },
    { icon: <IconBrandLinkedin />, link: "/" },
    { icon: <IconBrandDribbble />, link: "/" },
  ];
  return (
    <div className="flex flex-col gap-y-6 justify-start items-start basis-1/3">
      {/* top company logo */}
      <div>
        <Image
          src="/svgs/ExcellenceW.svg"
          width={400}
          height={100}
          alt="company logo"
          className="-ml-6 -mb-2"
        />
      </div>
      {/* subtitle */}
      <p className="text-body max-md:text-caption max-lg:text-caption">
        Transforming Ideas into Digital Excellence. Elevate your online presence
        with our innovative solutions and strategic digital services.
      </p>
      {/* company social links */}
      <div className="flex gap-x-4">
        {SocialMedia.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="p-2 rounded-full flex justify-center items-center bg-slate-900 hover:bg-green-500 text-white aspect-square "
            title="social media links"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LeftSection;
