"use client";
import {
  IconBadgeTm,
  IconBrandWechat,
  IconChalkboard,
  IconSeo,
  IconTicket,
  IconVideo,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import React, { JSX } from "react";

function PortfolioSection() {
  interface IPortfolioProject {
    id: number;
    title: string;
    icon: JSX.Element;
    description: string;
  }

  const Services: IPortfolioProject[] = [
    {
      id: 1,
      icon: <IconBadgeTm className="w-20 h-20" stroke={1} />,
      title: "Branding",
      description:
        "We help businesses establish a unique identity with compelling visual and strategic branding solutions that resonate with their audience, ensuring consistency across all marketing channels and touchpoints.",
    },
    {
      id: 2,
      icon: <IconBrandWechat className="w-20 h-20" stroke={1} />,
      title: "Social Media Marketing",
      description:
        "Boost your online presence with our expert social media strategies, content creation, and targeted campaigns across various platforms, helping you build meaningful connections with your audience and drive engagement.",
    },
    {
      id: 3,
      icon: <IconChalkboard className="w-20 h-20" stroke={1} />,
      title: "Billboard advertising",
      description:
        "Maximize your brand exposure with high-impact billboard advertisements in prime locations tailored to your target audience, ensuring your message reaches a wide demographic and leaves a lasting impression.",
    },
    {
      id: 4,
      icon: <IconVideo className="w-20 h-20" stroke={1} />,
      title: "Video Production",
      description:
        "Engage your audience with high-quality video content, including commercials, promotional videos, and corporate storytelling, crafted with professional cinematography and post-production techniques to make your brand stand out.",
    },
    {
      id: 5,
      icon: <IconSeo className="w-20 h-20" stroke={1} />,
      title: "SEO & Content marketing",
      description:
        "Improve your search rankings and attract organic traffic with data-driven SEO strategies and compelling content marketing, designed to enhance your brand authority and drive long-term digital success.",
    },
    {
      id: 6,
      icon: <IconTicket className="w-20 h-20" stroke={1} />,
      title: "Event promotion",
      description:
        "From product launches to corporate events, we create buzz and attract attendees with strategic event marketing solutions, ensuring your event gains the visibility and engagement it deserves for maximum impact.",
    },
  ];

  const variants = {
    hidden: () => ({
      opacity: 0,
      y: 50,
    }),
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center scroll-m-32 max-md:px-4">
      <div className="text-heading font-bold self-start w-full text-center max-md:text-subheading relative">
        Services
        {/* 3 bubbles */}
        <div className="absolute top-2 left-[50rem] bg-blue-500 blur-3xl rounded-full h-52 w-52 opacity-20 -z-10"></div>
        <div className="absolute top-2 left-[40rem] bg-green-500 blur-3xl rounded-full h-52 w-52 opacity-20 -z-10"></div>
        <div className="absolute top-2 left-[30rem] bg-teal-500 blur-3xl rounded-full h-52 w-52 opacity-20 -z-10"></div>
      </div>
      <div className="self-start h-full text-subheading w-full text-center mb-8 max-md:text-body">
        What We offer
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-lg:grid-cols-2 w-full"
      >
        {Services.map((service, index) => (
          <motion.div
            variants={variants}
            custom={index}
            viewport={{ once: true }}
            className="bg-white rounded-md relative group aspect-video overflow-hidden cursor-pointer"
            key={index}
          >
            {/* Icon and name container */}
            <div className="flex flex-col items-center justify-center group-hover:justify-start h-full w-full p-4 duration-500 transition-all">
              <div className="">{service.icon}</div>
              <div className="text-body font-semibold">{service.title}</div>
            </div>
            {/* Description section */}
            <div className="absolute inset-0 p-4 bg-green-500 translate-y-[calc(100%-3rem)] group-hover:translate-y-0 transition-transform duration-500 text-white">
              <div className="h-full overflow-y-auto">
                <div className="font-semibold text-lg mb-2">Description</div>
                <p className="text-body max-md:text-caption">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default PortfolioSection;
