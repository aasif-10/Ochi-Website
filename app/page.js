"use client";
import React, { useEffect } from "react";
import Navbar from "@/Components/Navbar";
import { GoArrowUpRight } from "react-icons/go";
import Page1 from "@/Components/Page1";
import { motion } from "framer-motion";
import Marquee from "@/Components/Marquee";
import Page2 from "@/Components/Page2";
import Page3 from "@/Components/Page3";
import LocomotiveScroll from "locomotive-scroll";
import Page4 from "@/Components/Page4";
import Page5 from "@/Components/Page5";
import Footer from "@/Components/Footer";

const page = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  });

  return (
    <>
      <div className="main w-full relative overflow-hidden">
        <Navbar></Navbar>
        <Page1></Page1>

        <Marquee></Marquee>
        <Page2></Page2>

        <Page3></Page3>
        <Page4></Page4>
        <Page5></Page5>
        <Footer></Footer>
      </div>
    </>
  );
};

export default page;
