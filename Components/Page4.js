import React, { useState } from "react";
import Page4_Container from "./Page4_Container";

const Page4 = () => {
  let infos = [
    {
      image1:
        "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
      image2:
        "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png",
      btnleft: ["brand identity", "pitch deck"],
      btnright: ["branded template", "sales deck", "social media templates"],
      titleleft: ["salience labs", "cardboard spaceship"],
      text: ["salience labs", "cardboard spaceship"],
    },
    {
      image1:
        "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
      image2:
        "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
      btnleft: ["agency", "company presentation"],
      btnright: ["brand identity", "pitch deck", "slides design"],
      titleleft: ["ah2 & matt horn", "fyde"],
      text: ["ah2 & matt horm", "fyde"],
    },
  ];
  return (
    <>
      <div className="page4 bg-[#f1f1f1] w-full min-h-screen ">
        <div className="feature-title mb-25  border-b-[1px] pl-13 pt-25 pb-8 border-[#a49f9f]">
          <h1 className="font-[Neue_Montreal] text-[3.5vw]">
            Featured projects
          </h1>
        </div>

        {infos.map((item, index) => {
          return (
            <Page4_Container
              key={item.titleleft?.[1] || index}
              mykey={index}
              info={item}
            ></Page4_Container>
          );
        })}
      </div>
    </>
  );
};

export default Page4;
