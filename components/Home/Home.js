import React from "react";
import Title from "./Title";
import Wedrobe from "./Wedrobe";
import Album from "./Album";
import About from "./About";
import Navbar from "../UI/Navbar/Navbar";
import Animator from "../../components/UI/Animator";
import Footer from "../UI/Footer/Footer";
import axios from "axios";
import MainPage from '../Horoscope/MainPage'
const Home = () => {
  const onScroll = (value) => {};

  return (
    <Animator>
      <div className="flex flex-col items-center bg-[#0b0b0b] z-10">
        <Navbar onScroll={onScroll} />
        <Title />
        <About />
        <Album />
        <Wedrobe />
        <MainPage />
        <Footer />
      </div>
    </Animator>
  );
};

export default Home;
