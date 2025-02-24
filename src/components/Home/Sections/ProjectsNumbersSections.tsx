"use client";
import React from "react";
import CountUp from "react-countup";

function ProjectsNumbersSections() {
  interface INumber {
    title: string;
    number: number;
  }
  // numbers sample data
  const Numbers: INumber[] = [
    {
      title: "Projects done",
      number: 100,
    },
    {
      title: "Companies worked with",
      number: 50,
    },
    {
      title: "Satisfied customers",
      number: 1000,
    },
    {
      title: "Ratings",
      number: 4.6,
    },
  ];

  return (
    // number stats
    <div className="grid grid-cols-4 max-md:grid-cols-1  bg-white py-8 px-8 w-full ">
      {Numbers.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center container mx-auto"
        >
          <span className="text-heading font-semibold max-md:text-subheading max-md:text-center">
            {item.title === "Ratings" ? (
              <CountUp //if numbers are in int
                start={0}
                end={item.number}
                decimals={2}
                enableScrollSpy
                scrollSpyOnce
                scrollSpyDelay={1000}
              />
            ) : (
              <CountUp //if numbers are in deciaml
                start={0}
                end={item.number}
                enableScrollSpy
                scrollSpyOnce
                scrollSpyDelay={1000}
              />
            )}
            +
          </span>
          {/* stats title */}
          <span className="text-body ">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default ProjectsNumbersSections;
