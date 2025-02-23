import React from "react";
import LeftSection from "./LeftSection";
import CenterSection from "./CenterSection";
import RightSection from "./RightSection";

function Footer() {
  return (
    <footer className="bg-white shadow-md py-20 max-md:px-4 mt-4">
      <div className="flex justify-between container mx-auto gap-4 max-md:flex-col max-md:items-start max-md:gap-y-4">
        {/* left */}
        <LeftSection />
        {/* center */}
        <CenterSection />
        {/* right */}
        <RightSection />
      </div>
    </footer>
  );
}

export default Footer;
