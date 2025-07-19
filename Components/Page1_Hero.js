import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Page1_Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="text-content ml-14">
          {["we create", "eye-opening", "presentations"].map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === 1 && "flex items-center gap-2.5"
                }  heading leading-[5.9vw]`}
              >
                {index === 1 && (
                  <motion.div
                    initial={{ width: "0" }}
                    animate={{ width: "9.5vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      delay: 2,
                      duration: 1,
                    }}
                    className="box bg-green-400 w-[9.5vw] h-[5.5vw] relative -top-[1.3vw] overflow-hidden rounded-[10px]"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase font-['Founders_Grotesk'] text-[7rem] font-semibold tracking-tighter  text-[#212121]">
                  {item}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page1_Hero;
