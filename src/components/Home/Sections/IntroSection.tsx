import { IconArrowDownDashed } from "@tabler/icons-react";
import Image from "next/image";

function IntroSection() {
  return (
    <div className="relative">
      <div>
        <Image
          src={"/images/group3.jpg"}
          width={1920}
          height={1080}
          alt={"Intro saection image"}
          className="w-full h-screen object-cover object-top "
        />
        <div className="absolute bottom-0 h-full w-full bg bg-gradient-to-t from-slate-100 via-transparent to-transparent"></div>
      </div>
      {/* top title */}
      <div className="absolute top-40 flex flex-col w-full justify-center items-center">
        <div><Image src={"/svgs/ExcellenceW.svg"} width={400} height={100} alt="company logo"/></div>
        <div className="text-subheading">Professional Media and Advertisement agency</div>
      </div>
      {/* scroll area */}
      <div className="absolute flex flex-col w-full justify-center items-center bottom-10">
        <div className="flex flex-col items-center text-subheading">
          <span className="text-slate-900 text-body font-semibold text-nowrap">
            Explore more
          </span>
          <IconArrowDownDashed className="animate-bounce h-10 w-10 text-slate-900 drop-shadow-md " />
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
