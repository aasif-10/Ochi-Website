"use client";
import { motion, useAnimate, useAnimation } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Page2 = () => {
  let btn = useAnimation();
  let arrow = useAnimation();
  let page2Card = useAnimation();
  let image1 = useAnimation();

  const handleHoverBtn = () => {
    btn.start({
      scale: 5.5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    });

    arrow.start({
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    });

    page2Card.start({
      scale: 0.95,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    });

    image1.start({
      scale: 1,
    });
  };

  const handleHoverBtnEnd = () => {
    btn.start({
      scale: 0.8,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    });

    arrow.start({
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    });

    page2Card.start({
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.12, 0, 0.39, 0],
      },
    });
  };
  return (
    <>
      <div className="page2 bg-[#cdea68] w-full min-h-screen rounded-tr-[18px] rounded-tl-[18px] relative">
        <h2 className="ml-13 pt-20 text-[3.7vw] leading-[3.5vw] font-[Neue_Montreal] w-[85%] font-medium text-[#212121]">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <span className="underline decoration-[5px] ">raise funds</span>,{" "}
          <span className="underline decoration-[5px] ">sell prod­ucts</span>,{" "}
          <span className="underline decoration-[5px]">
            ex­plain com­plex ideas
          </span>
          , and{" "}
          <span className="underline decoration-[5px]">hire great peo­ple</span>
          .
        </h2>

        <div className="page2-part2 w-full  ">
          <div className="div flex pl-13 border-t-[1px] border-b-[1px] pb-30  border-[#625c5c] mt-10 pt-5  ">
            <h4 className="mr-150 font-[Neue_Montreal] text-[17px]">
              What you can expect:
            </h4>

            <div className="w-[20%] font-[Neue_Montreal] flex flex-col mr-30  gap-10">
              <h4 className=" font-[Neue_Montreal] text-[17px]">
                We partner with the companies and startups who make the world go
                round — they drive the net-zero economy, revolutionize crypto
                treasury management, build photonic chips, and open
                Michelin-starred restaurants.
              </h4>
              <h4 className="text-[17px] font-[Neue_Montreal]">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </h4>
            </div>
            <div className="div mt-48">
              {["Instagram", "Behance", "Facebook", "Linkedin"].map(
                (item, index) => {
                  return (
                    <h4
                      className="font-[Neue_Montreal] text-[17px]"
                      key={index}
                    >
                      {item}
                    </h4>
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div className="page2-part3 flex justify-between">
          <div className="button pl-13 pt-3 ">
            <h1 className="text-[3.5vw] font-[Neue_Montreal]">Our approach:</h1>

            <motion.div
              onHoverStart={() => {
                handleHoverBtn();
              }}
              onHoverEnd={() => {
                handleHoverBtnEnd();
              }}
              className="button flex items-center gap-8 py-4 px-6.5 mt-2  rounded-[40px] w-fit  bg-[#212121]"
            >
              <p className="text-[1vw] text-white font-[Neue_Montreal] uppercase">
                Read More
              </p>
              <motion.div
                initial={{ scale: 1 }}
                animate={btn}
                transition={{}}
                className="div w-[7px] bg-white h-[7px] rounded-[50%] flex items-center justify-center "
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={arrow}
                  className="text-[4px] "
                >
                  <GoArrowUpRight />
                </motion.span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 1 }}
            animate={page2Card}
            className="image overflow-hidden w-[48%] h-[90%]   rounded-[10px] mt-5 pb-10 mr-11"
          >
            <motion.img
              initial={{ scale: 1 }}
              animate={image1}
              className="w-full h-full object-cover rounded-[10px] "
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Page2;
