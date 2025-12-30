import React from "react";

const Page5 = () => {
  return (
    <>
      <div className="page5 w-full h-screen bg-[#f1f1f1] px-[3vw] pt-[3vw] ">
        <div className="card-container w-full h-[27vw] flex items-center gap-5">
          <div className=" relative card1 h-full w-[50%] bg-[#004d43] rounded-2xl flex items-center justify-center">
            <img
              className="w-40"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute bottom-8 left-8 uppercase text-[#c2e266] border border-[#c2e266] rounded-[35px] px-6 py-1.5 font-medium font-[Neue_Montreal] text-[16px]">
              2019-2022
            </button>
          </div>
          <div className="card2 relative h-full w-[25%] bg-[#212121] rounded-2xl flex items-center justify-center">
            <img
              className="w-40"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />

            <button className="absolute bottom-8 left-8 text-[14px] text-white uppercase border border-[#f1f1f1] rounded-[35px] px-4 py-1.5 font-medium font-[Neue_Montreal]">
              rating 5.0 on clutch
            </button>
          </div>
          <div className="card3 relative h-full w-[25%] bg-[#212121] rounded-2xl flex items-center justify-center">
            <img
              className="w-25"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button className="absolute bottom-8 left-8 text-[14px] text-white uppercase border border-[#f1f1f1] rounded-[35px] px-4 py-1.5 font-medium font-[Neue_Montreal] ">
              business bootcamp alumni
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
