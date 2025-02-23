"use client";
import { IconArrowDownDashed } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
function IntroSection() {
  const router = useRouter();
  return (
    <div className="relative">
      {/* top cover image */}
      <div>
        <Image
          src={"/images/group3.jpg"}
          width={1920}
          height={1080}
          alt={"Intro saection image"}
          className="w-full h-screen object-cover object-top opacity-60"
        />
        <div className="absolute bottom-0 h-full w-full bg bg-gradient-to-t from-slate-100 via-transparent to-transparent"></div>
      </div>
      {/* top title */}
      <div className="absolute top-40 flex flex-col w-full justify-center items-center max-md:p-4 max-md:text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/svgs/ExcellenceW.svg"}
            width={400}
            height={100}
            alt="company logo"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-subheading max-md:text-body font-semibold my-2"
        >
          Professional Media and Advertisement agency
        </motion.div>
        {/* cta abutton */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        >
          <button
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-body font-semibold mt-2 rounded-md uppercase hover:opacity-80"
            onClick={() => router.push("/#services")}
          >
            Explore more
          </button>
        </motion.div>
      </div>
      {/* scroll indicator */}
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
