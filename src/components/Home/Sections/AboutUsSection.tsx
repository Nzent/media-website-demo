"use client";
import { motion } from "motion/react";
import React from "react";
function AboutUsSection() {
  return (
    <div
      className="flex justify-center items-center gap-x-10 scroll-m-32 
      max-md:flex-col max-md:gap-y-4 max-lg:flex-col max-lg:gap-y-4 max-md:p-4 max-md:text-center"
    >
      {/* left video intro section*/}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="basis-1/2 max-md:order-2 max-lg:order-2"
      >
        <video
          src="/videos/sample.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full rounded-md shadow-lg"
        />
      </motion.div>
      {/* right about us article section*/}
      <div className="basis-1/2 flex flex-col ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-heading font-bold self-start h-full max-md:text-subheading max-md:text-center max-md:w-full relative"
        >
          About Us
          {/* 3 bubbles */}
          <div className="absolute top-1 left-[20rem] bg-blue-500 blur-3xl rounded-full h-52 w-52  opacity-20 -z-10"></div>
          <div className="absolute top-1 left-[11rem] bg-green-500 blur-3xl rounded-full h-52 w-52  opacity-20 -z-10"></div>
          <div className="absolute top-1 left-[3rem] bg-emerald-500 blur-3xl rounded-full h-52 w-52  opacity-20 -z-10"></div>
        </motion.div>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="self-start h-full text-body max-md:text-caption"
        >
          We are a dynamic media company specializing in digital marketing,
          content production, and brand strategy. Based in Colombo, Excellence
          blends the creativity of a traditional advertising agency with the
          innovation of a modern digital powerhouse. Our approach is fueled by
          data-driven insights, ensuring impactful, results-oriented campaigns.
          We are committed to delivering high-quality, engaging content that
          resonates with audiences while driving measurable success for our
          clients. At Excellence, we believe in pushing creative boundaries to
          craft meaningful and effective brand experiences.
        </motion.p>
      </div>
    </div>
  );
}

export default AboutUsSection;
