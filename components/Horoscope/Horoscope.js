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
      <div className="flex flex-col items-center bg-[#0b0b0b]">
      <img src='/assets/blue.png' alt="" className="w-[100vw] overflow-hidden absolute z-0 md:hidden  md:ml-[50rem]" />{" "}
      <img src='/assets/circle2.png' alt="" className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-80rem] mt-[-10rem]" />
      <img src='/assets/pink.png' alt="" className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-70rem]" />
        <Navbar onScroll={onScroll} />
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center "
        >
          <MainPage />
          
        </Slide>
        {/* <Newsletter /> */}
        
        <Footer />
      </div>
    </Animator>
  );
};

export default Horoscope;
