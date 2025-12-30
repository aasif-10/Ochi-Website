import { delay, motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

const Page4_Container = ({ info, mykey }) => {
  const cards = [useAnimation(), useAnimation()];

  const card1 = [useAnimation(), useAnimation()];
  const btnHover = [useAnimation(), useAnimation()];
  const btnHover2 = [useAnimation(), useAnimation(), useAnimation()];

  const [btnHov, setbtnHov] = useState([false, false]);
  const [btnHov2, setbtnHov2] = useState([false, false, false]);

  const handleHover = (index) => {
    cards[index].start({
      y: "0",
    });

    card1[index].start({
      scale: 0.97,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    });
  };
  const handleHoverBtn = (index) => {
    {
      index == 0 ? setbtnHov([true, false]) : setbtnHov([false, true]);
    }

    btnHover[index].start({
      height: "100%",
      backgroundColor: "rgb(0, 0, 0)",
      color: "rgb(255, 255, 255)",
      transformOrigin: "bottom",
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    });
  };
  const handleHoverBtn2 = (index) => {
    {
      index == 0 && setbtnHov2([true, false, false]);
    }
    {
      index == 1 && setbtnHov2([false, true, false]);
    }
    {
      index == 2 && setbtnHov2([false, false, true]);
    }

    btnHover2[index].start({
      height: "100%",
      backgroundColor: "rgb(0, 0, 0)",
      color: "rgb(255, 255, 255)",
      transformOrigin: "bottom",
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "150%",
    });

    card1[index].start({
      scale: 1,
      transformOrigin: "bottom",
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    });
  };
  const handleHoverEndBtn = (index) => {
    setbtnHov([false, false]);

    btnHover[index].start({
      height: "0%",
      backgroundColor: "rgb(0, 0, 0)",
      transformOrigin: "top",
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    });
  };
  const handleHoverEndBtn2 = (index) => {
    setbtnHov2([false, false, false]);

    btnHover2[index].start({
      height: "0%",
      backgroundColor: "rgb(0, 0, 0)",
      transformOrigin: "top",
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    });
  };

  return (
    <>
      <div className="page4-container">
        <div className="flex items-center gap-150 px-11">
          <div className="flex items-center gap-3">
            <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
            <h1 className="uppercase font-medium font-[Neue_Montreal]">
              {info.titleleft[0]}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
            <h1 className="uppercase font-medium font-[Neue_Montreal]">
              {info.titleleft[1]}
            </h1>
          </div>
        </div>
        <div className=" relative  card-container w-full h-[38vw]  flex items-center gap-10 px-10 mt-5 py-[25px]">
          <motion.div
            onHoverStart={() => {
              handleHover(0);
            }}
            onHoverEnd={() => {
              handleHoverEnd(0);
            }}
            initial={{ scale: 1 }}
            animate={card1[0]}
            className="cards w-1/2 h-full rounded-[10px]  "
          >
            <div className="absolute left-[98%] z-[999] pointer-events-none top-1/2 -translate-x-[50%] -translate-y-[50%]">
              <h1 className="overflow-hidden leading-none z-[999] pt-8 pointer-events-none uppercase text-[#cdea68] text-[6vw] text-nowrap font-bold font-['Founders_Grotesk']  ">
                {info.text[0].split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "150%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    key={index}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>

            <img
              className="w-full h-full object-cover rounded-[10px]"
              src={info.image1}
              alt=""
            />
          </motion.div>

          <motion.div
            onHoverStart={() => {
              handleHover(1);
            }}
            onHoverEnd={() => {
              handleHoverEnd(1);
            }}
            initial={{ scale: 1 }}
            animate={card1[1]}
            className="cards w-1/2 h-full rounded-[10px] "
          >
            <h1 className="overflow-hidden pointer-events-none z-[999] leading-none uppercase text-[#cdea68] text-[6vw] text-nowrap font-bold font-['Founders_Grotesk']   absolute left-[1%] top-1/2 -translate-x-[50%] -translate-y-[50%]">
              {info.text[1].split("").map((item, index) => (
                <motion.span
                  initial={{ y: "150%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.025,
                  }}
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full object-cover rounded-[10px]"
              src={info.image2}
              alt=""
            />
          </motion.div>
        </div>

        <div
          className={` btn flex  items-center ${
            mykey == 1 ? "gap-104" : "gap-114"
          }  px-11 pb-20 `}
        >
          <div className="btn-left flex flex-row items-center gap-3">
            <motion.div
              onHoverStart={() => {
                handleHoverBtn(0);
              }}
              onHoverEnd={() => {
                handleHoverEndBtn(0);
              }}
              className="relative overflow-hidden rounded-[20px] "
            >
              <button className="cursor-pointer bg-transparent text-[#000] btnleft border px-4 py-1 rounded-[20px] overflow-hidden ">
                <h1
                  className={`${
                    btnHov[0] ? "relative z-[999] text-white" : ""
                  } uppercase whitespace-nowrap text-[15px] font-[Neue_Montreal]`}
                >
                  {info.btnleft[0]}
                </h1>
              </button>
              <motion.div
                animate={btnHover[0]}
                className={`absolute cursor-pointer bg-black border-[#000] border-0  left-0  w-full  btnleft  ${
                  btnHov[0] ? " bottom-0 " : "top-0"
                } rounded-[20px] `}
              ></motion.div>
            </motion.div>

            <motion.div
              onHoverStart={() => {
                handleHoverBtn(1);
              }}
              onHoverEnd={() => {
                handleHoverEndBtn(1);
              }}
              className="relative overflow-hidden rounded-[20px] "
            >
              <button className="cursor-pointer bg-transparent text-[#000] btnleft border px-4 py-1 rounded-[20px] overflow-hidden ">
                <h1
                  className={`${
                    btnHov[1] ? "relative z-[999] text-white" : ""
                  } uppercase whitespace-nowrap text-[15px] font-[Neue_Montreal]`}
                >
                  {info.btnleft[1]}
                </h1>
              </button>
              <motion.div
                animate={btnHover[1]}
                className={`absolute cursor-pointer bg-black border-[#000] border-0  left-0  w-full  btnleft  ${
                  btnHov[1] ? " bottom-0 " : "top-0"
                } rounded-[20px] `}
              ></motion.div>
            </motion.div>
          </div>

          <div className="btn-right flex flex-row items-center gap-3">
            <motion.div
              onHoverStart={() => {
                handleHoverBtn2(0);
              }}
              onHoverEnd={() => {
                handleHoverEndBtn2(0);
              }}
              className="relative overflow-hidden rounded-[20px] "
            >
              <button className="cursor-pointer bg-transparent text-[#000] btnleft border px-4 py-1 rounded-[20px] overflow-hidden ">
                <h1
                  className={`${
                    btnHov2[0] ? "relative z-[999] text-white" : ""
                  } uppercase whitespace-nowrap text-[15px] font-[Neue_Montreal]`}
                >
                  {info.btnright[0]}
                </h1>
              </button>
              <motion.div
                animate={btnHover2[0]}
                className={`absolute cursor-pointer bg-black border-[#000] border-0  left-0  w-full  btnleft  ${
                  btnHov2[0] ? " bottom-0 " : "top-0"
                } rounded-[20px] `}
              ></motion.div>
            </motion.div>

            <motion.div
              onHoverStart={() => {
                handleHoverBtn2(1);
              }}
              onHoverEnd={() => {
                handleHoverEndBtn2(1);
              }}
              className="relative overflow-hidden rounded-[20px] "
            >
              <button className="cursor-pointer bg-transparent text-[#000] btnleft border px-4 py-1 rounded-[20px] overflow-hidden ">
                <h1
                  className={`${
                    btnHov2[1] ? "relative z-[999] text-white" : ""
                  } uppercase whitespace-nowrap text-[15px] font-[Neue_Montreal]`}
                >
                  {info.btnright[1]}
                </h1>
              </button>
              <motion.div
                animate={btnHover2[1]}
                className={`absolute cursor-pointer bg-black border-[#000] border-0  left-0  w-full  btnleft  ${
                  btnHov2[1] ? " bottom-0 " : "top-0"
                } rounded-[20px] `}
              ></motion.div>
            </motion.div>

            <motion.div
              onHoverStart={() => {
                handleHoverBtn2(2);
              }}
              onHoverEnd={() => {
                handleHoverEndBtn2(2);
              }}
              className="relative overflow-hidden rounded-[20px] "
            >
              <button className="cursor-pointer bg-transparent text-[#000] btnleft border px-4 py-1 rounded-[20px] overflow-hidden ">
                <h1
                  className={`${
                    btnHov2[2] ? "relative z-[999] text-white" : ""
                  } uppercase whitespace-nowrap text-[15px] font-[Neue_Montreal]`}
                >
                  {info.btnright[2]}
                </h1>
              </button>
              <motion.div
                animate={btnHover2[2]}
                className={`absolute cursor-pointer bg-black border-[#000] border-0  left-0  w-full  btnleft  ${
                  btnHov2[2] ? " bottom-0 " : "top-0"
                } rounded-[20px] `}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4_Container;
