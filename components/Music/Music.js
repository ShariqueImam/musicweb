import React from "react";
import Title from "./Title";
import FeaturedMusic from "./FeaturedMusic";
import Upcoming from "./Upcoming";
import MoreMusic from "./MoreMusic";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import Animator from "../UI/Animator";
import { Slide } from "react-awesome-reveal";

const Music = () => {
  const onScroll = () => {};
  return (
    // <Animator>
    <div className="flex flex-col items-center bg-[#0b0b0b] z-20 overflow-x-hidden w-[100vw] z-30">
      <div className="z-40 flex items-center justify-center mt-16">
        <Navbar onScroll={onScroll} />
      </div>
      <img
        src="/assets/blue.png"
        alt=""
        className="absolute z-0 md:ml-[50rem]"
      />{" "}
      <img
        src="/assets/circle2.png"
        alt=""
        className="absolute z-0 md:ml-[-80rem] mt-[-10rem]"
      />
      <img
        src="/assets/pink.png"
        alt=""
        className="absolute z-0 md:ml-[-70rem]"
      />
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center z-20"
      >
        <Title />
      </Slide>
      <div className="z-10">
        <FeaturedMusic />
      </div>
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center w-[100%] h-[100%]"
      >
        {/* <MoreMusic /> */}
      </Slide>
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center z-20"
      >
        <Upcoming />
      </Slide>
      <div className="z-10 w-[100%] ">
        <Footer />
      </div>
    </div>
    // </Animator>
  );
};

export default Music;
