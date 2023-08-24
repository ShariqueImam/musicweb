import React from "react";
import Title from "./Title";
import Wedrobe from "./Wedrobe";
import Album from "./Album";
import About from "./About";
import Navbar from "../UI/Navbar/Navbar";
import Animator from "../../components/UI/Animator";
import Footer from "../UI/Footer/Footer";
import axios from "axios";
import MainPage from "../Horoscope/MainMainHome";
const Home = () => {
  const onScroll = (value) => {};

  return (
    <Animator>
      <div className="flex flex-col items-center bg-[#0b0b0b] z-20">
        <Navbar onScroll={onScroll} />
        <Title />
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
        <div className="z-30">
          <About />
        </div>
        <div className="z-20">
          <Album />
        </div>
        <div className="z-20">
          <Wedrobe />
        </div>
        <MainPage />
        <Footer />
      </div>
    </Animator>
  );
};

export default Home;
