import React from "react";

function AboutUsSection() {
  return (
    <div className="flex justify-center items-center gap-x-4 ">
      {/* left */}
      <div className="basis-1/2">
        <video
          src="/videos/sample.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full rounded-md shadow-md"
        />
      </div>
      {/* right */}
      <div className="basis-1/2 flex flex-col ">
        <div className="text-heading font-bold self-start h-full">About Us</div>
        <div className="self-start h-full text-body">
          We are a dynamic media company specializing in digital marketing,
          content production, and brand strategy. Based in Colombo, Excellence
          blends the creativity of a traditional advertising agency with the
          innovation of a modern digital powerhouse. Our approach is fueled by
          data-driven insights, ensuring impactful, results-oriented campaigns.
          We are committed to delivering high-quality, engaging content that
          resonates with audiences while driving measurable success for our
          clients. At Excellence, we believe in pushing creative boundaries to
          craft meaningful and effective brand experiences.
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
