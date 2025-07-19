import { motion, useAnimation } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Page1_Footer = () => {
  const btn = useAnimation();
  const btn2 = useAnimation();

  const handleHover = () => {
    btn.start({
      backgroundColor: "rgb(0, 0, 0)",
      color: "rgb(255, 255, 255)",
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    });

    btn2.start({
      scale: 1,
      backgroundColor: "rgb(0, 0, 0)",
      color: "rgb(255, 255, 255)",
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    });
  };
  const handleHoverEnd = () => {
    btn.start({
      backgroundColor: "rgb(241, 241, 241)",
      color: "rgb(0, 0, 0)",
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    });

    btn2.start({
      scale: 0,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: [0.61, 1, 0.88, 1], delay: 1, duration: 1 }}
        className="hero-footer w-full h-[10px] mt-20 border-t-[1px] border-t-[#bab5b5] pt-8 px-14 flex  items-center justify-between  "
      >
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: [0.61, 1, 0.88, 1], delay: 1, duration: 1 }}
              className="font-[Neue_Montreal] text-[17px]"
              key={index}
            >
              {item}
            </motion.p>
          );
        })}

        <motion.div
          onHoverStart={() => {
            handleHover();
          }}
          onHoverEnd={() => {
            handleHoverEnd();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: [0.61, 1, 0.88, 1], delay: 1, duration: 1 }}
          className="button-cont flex items-center gap-1.5 "
        >
          <motion.div
            initial={{ backgroundColor: "#f1f1f1", color: "#000" }}
            animate={btn}
            className="uppercase cursor-pointer font-[Neue_Montreal] border-[1.5px] border-[#000] text-[15px] rounded-[30px] px-[9px] h-fit py-[4px]"
          >
            start the project
          </motion.div>

          <motion.div className="relative cursor-pointer  flex">
            <motion.span className="border-[1.5px] border-[#000] text-[15px] rounded-[50%] px-[8px] h-fit py-[8px]">
              <GoArrowUpRight />
            </motion.span>
            <motion.span
              initial={{ scale: 0 }}
              animate={btn2}
              className="z-20 bg-black font-bold  absolute border-[1.5px] border-[#000] text-[15px] rounded-[50%] px-[8px] h-fit py-[8px]"
            >
              <GoArrowUpRight />
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Page1_Footer;
