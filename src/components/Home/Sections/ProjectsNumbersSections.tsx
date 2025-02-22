"use client";
import React from "react";
import CountUp from "react-countup";

function ProjectsNumbersSections() {
  const Numbers = [
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
    <div className="flex gap-x-8 bg-white py-8 px-8 w-full justify-around">
      {Numbers.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center container mx-auto"
        >
          <span className="text-heading font-semibold">
            {item.title === "Ratings" ? (
              <CountUp start={0} end={item.number} decimals={2} enableScrollSpy scrollSpyOnce scrollSpyDelay={1000}/>
            ) : (
              <CountUp start={0} end={item.number} enableScrollSpy scrollSpyOnce scrollSpyDelay={1000}/>
            )}+
          </span>
          <span className="text-body font-semibold ">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default ProjectsNumbersSections;
