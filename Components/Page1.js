import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Page1_Hero from "./Page1_Hero";
import Page1_Footer from "./Page1_Footer";

const Page1 = () => {
  return (
    <>
      <div className="page1 bg-[#f1f1f1]  w-full h-screen pt-52">
        <Page1_Hero></Page1_Hero>
        <Page1_Footer></Page1_Footer>
      </div>
    </>
  );
};

export default Page1;
