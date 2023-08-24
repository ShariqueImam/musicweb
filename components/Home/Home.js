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
      <div className="flex flex-col items-center">
        {/* <div className="z-30 flex items-center justify-center mt-16 "> */}
          <Navbar onScroll={onScroll} />
        {/* </div> */}
        <div className="z-2">
          <Title />
        </div>
       
        <div className="z-30">
          <About />
        </div>
        <div className="z-40">
          <Album />
        </div>
        <div className="z-30">
          <Wedrobe />
        </div>
        <div className="z-50">
          <MainPage />
        </div>
        <div className="z-40 w-[100%]">
          <Footer />
        </div>
      </div>
    </Animator>
  );
};

export default Home;
