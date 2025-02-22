import React from "react";
import LeftSection from "./LeftSection";
import CenterSection from "./CenterSection";
import RightSection from "./RightSection";

function Footer() {
  return (
    <footer className="bg-white shadow-md py-20">
      <div className="flex justify-between container mx-auto gap-4">
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
