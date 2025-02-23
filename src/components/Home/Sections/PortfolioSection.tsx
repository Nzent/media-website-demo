"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
function PortfolioSection() {
  interface IPortfolioProject {
    id: number;
    name: string;
    cover: string;
    client: string;
    date: string;
    location: string;
    description: string;
  }

  const PortfolioProjects: IPortfolioProject[] = [
    {
      id: 1,
      name: "Brand Elevation",
      cover: "/images/team2.jpg",
      client: "David",
      date: "17 JAN 2018",
      location: "USA",
      description:
        "A complete rebranding project that transformed the client's brand image, making it more modern and appealing to a younger audience.",
    },
    {
      id: 2,
      name: "Social Boost",
      cover: "/images/team2.jpg",
      client: "Emma",
      date: "05 MAR 2019",
      location: "UK",
      description:
        "A social media marketing campaign that increased engagement and boosted followers by 200% within six months.",
    },
    {
      id: 3,
      name: "Billboard Impact",
      cover: "/images/team2.jpg",
      client: "Liam",
      date: "22 AUG 2020",
      location: "Canada",
      description:
        "A large-scale outdoor advertising campaign that included billboards in prime locations to enhance brand visibility.",
    },
    {
      id: 4,
      name: "Digital Domination",
      cover: "/images/team2.jpg",
      client: "Sophia",
      date: "14 NOV 2021",
      location: "Australia",
      description:
        "An end-to-end digital marketing strategy that included SEO, PPC, and content marketing, driving significant web traffic growth.",
    },
    {
      id: 5,
      name: "Creative Spotlight",
      cover: "/images/team2.jpg",
      client: "Noah",
      date: "30 SEP 2022",
      location: "Germany",
      description:
        "A content-driven campaign that leveraged storytelling and visuals to create a strong emotional connection with the audience.",
    },
    {
      id: 6,
      name: "Media Synergy",
      cover: "/images/team2.jpg",
      client: "Olivia",
      date: "10 JAN 2023",
      location: "France",
      description:
        "A multimedia strategy that integrated video, social media, and print ads to maximize reach and engagement.",
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
      <div className="text-heading font-bold self-start w-full text-center max-md:text-subheading  relative">
        Portfolios
        {/* 3 bubbles */}
        <div className="absolute top-2 left-[50rem] bg-blue-500 blur-3xl rounded-full h-52 w-52  opacity-20 -z-10"></div>
        <div className="absolute top-2 left-[40rem] bg-green-500 blur-3xl rounded-full h-52 w-52  opacity-20 -z-10"></div>
        <div className="absolute top-2 left-[30rem] bg-teal-500 blur-3xl rounded-full h-52 w-52  opacity-20 -z-10"></div>
      </div>
      <div className="self-start h-full text-subheading w-full text-center mb-8 max-md:text-body">
        What We Have Done
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-lg:grid-cols-2"
      >
        {PortfolioProjects.map((portfolio, index) => (
          <motion.div
            variants={variants}
            custom={index}
            viewport={{ once: true }}
            className="bg-white rounded-md relative group"
            key={index}
          >
            {/* cover image */}
            <Image
              src={portfolio.cover}
              width={500}
              height={500}
              alt={portfolio.name}
              className="grayscale hover:grayscale-0 rounded-md"
            />
            {/* stats section */}
            <div className="absolute bottom-0 overflow-hidden p-4 h-12 rounded-md bg-green-500 w-full group-hover:h-full duration-500 text-body text-white max-md:text-caption">
              <div className="grid grid-cols-2">
                <div className="flex gap-x-2 justify-start">
                  <span className="font-semibold">Name : </span>
                  <span>{portfolio.name}</span>
                </div>
                <div className="flex gap-x-2 justify-start">
                  <span className="font-semibold">Location : </span>
                  <span>{portfolio.location}</span>
                </div>
                <div className="flex gap-x-2 justify-start">
                  <span className="font-semibold">Client : </span>
                  <span>{portfolio.client}</span>
                </div>
                <div className="flex gap-x-2 justify-start">
                  <span className="font-semibold">Date : </span>
                  <span>{portfolio.date}</span>
                </div>
              </div>
              <div className="mt-">
                <div className="font-semibold">Discription : </div>
                <p>{portfolio.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default PortfolioSection;
