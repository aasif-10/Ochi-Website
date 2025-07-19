import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <>
      <div>
        <div className="marquee relative h-[50vh] w-full bg-[#004c42] overflow-hidden flex items-center justify-center rounded-tr-[18px] rounded-tl-[18px]">
          <div className="marquee-container flex items-center whitespace-nowrap border-t-[1px] border-b-[1px] border-white pt-[3vw] leading-none ">
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
              className="text-[#fefeff]  uppercase text-[16vw] font-['Founders_Grotesk'] font-semibold ml-6"
            >
              We are ochi
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
              className="text-[#fefeff]  uppercase text-[16vw] font-['Founders_Grotesk'] font-semibold ml-6"
            >
              We are ochi
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
              className="text-[#fefeff]  uppercase text-[16vw] font-['Founders_Grotesk'] font-semibold ml-6"
            >
              We are ochi
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
