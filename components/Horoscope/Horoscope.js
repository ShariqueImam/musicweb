import React from "react";
import Footer from "../UI/Footer/Footer";
import Navbar from "../UI/Navbar/Navbar";
import MainPage from "./MainPage";
import Animator from "../UI/Animator";
import { Slide } from "react-awesome-reveal";
const Horoscope = () => {
  const onScroll = () => {};
  return (
    <Animator>
      <div className="flex flex-col items-center bg-[#0b0b0b] z-10">
        <img
          src="/assets/blue.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden  md:ml-[50rem]"
        />{" "}
        <img
          src="/assets/circle2.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-80rem] mt-[-10rem]"
        />
        <img
          src="/assets/pink.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-70rem]"
        />
        <div className="z-20 flex items-center justify-center mt-16 z-20">
          <Navbar onScroll={onScroll} />
        </div>
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center z-20"
        >
          <MainPage />
        </Slide>
        {/* <Newsletter /> */}
        <Footer />
        <img
          src="/assets/blue.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden  md:ml-[50rem]"
        />{" "}
        <img
          src="/assets/circle2.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-80rem] mt-[-10rem]"
        />
        <img
          src="/assets/pink.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-70rem]"
        />
      </div>
    </Animator>
  );
};

export default Horoscope;
