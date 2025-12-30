"use client";
import React, { useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Page1 from "@/Components/Page1";
import Marquee from "@/Components/Marquee";
import Page2 from "@/Components/Page2";
import Page3 from "@/Components/Page3";
import Page4 from "@/Components/Page4";
import Page5 from "@/Components/Page5";
import Footer from "@/Components/Footer";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";

const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useGSAP(() => {
    gsap.from(".logo", {
      opacity: 0,
      ease: Power4,
      duration: 1,
      delay: 1,
    });
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
