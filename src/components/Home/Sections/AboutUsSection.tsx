"use client";
import { motion } from "motion/react";
import React from "react";
function AboutUsSection() {
  return (
    <div className="flex justify-center items-center gap-x-4 scroll-m-32" id="about-us">
      {/* left */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="basis-1/2"
      >
        <video
          src="/videos/sample.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full rounded-md shadow-md"
        />
      </motion.div>
      {/* right */}
      <div className="basis-1/2 flex flex-col ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-heading font-bold self-start h-full"
        >
          About Us
        </motion.div>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="self-start h-full text-body"
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
