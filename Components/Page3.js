import React, { useEffect, useState } from "react";

const Page3 = () => {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", function (e) {
      let posX = e.clientX;
      let posY = e.clientY;

      let deltaX = posX - window.innerWidth / 2;
      let deltaY = posY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setrotate(angle - 180);
    });
  });

  return (
    <>
      {" "}
      <div className="page3 bg-red-400 w-full min-h-screen overflow-hidden">
        <div
          data-scroll
          data-scroll-speed="-.8"
          className="div  w-full h-full relative"
        >
          <div className="eye-cont w-full h-full ">
            <img
              className="w-[100%] h-[100%] object-cover "
              src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
              alt=""
            />
          </div>
          <div className="absolute flex items-center gap-8 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="eye flex items-center justify-center w-[14vw] h-[14vw] bg-white rounded-full">
              <div className=" relative w-[8.5vw] flex items-center justify-center h-[8.5vw] bg-[#212121] rounded-full">
                <h2 className="uppercase font-[Neue_Montreal] text-[20px] text-white">
                  play
                </h2>
                <div
                  style={{
                    transform: `rotate(${rotate}deg)`,
                  }}
                  className="absolute w-full h-[2vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
                >
                  <div className="w-[1.2vw] h-[1.2vw]  rounded-full bg-white"></div>
                </div>
              </div>
            </div>
            <div className="eye flex items-center justify-center w-[14vw] h-[14vw] bg-white rounded-full">
              <div className="relative flex items-center justify-center w-[8.5vw] h-[8.5vw] bg-[#212121] rounded-full">
                <h2 className="uppercase font-[Neue_Montreal] text-[20px] text-white">
                  play
                </h2>
                <div
                  style={{
                    transform: `rotate(${rotate}deg)`,
                  }}
                  className="absolute w-full h-[2vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
                >
                  <div className="w-[1.2vw] h-[1.2vw]  rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
