import React from "react";
import Footer from "../UI/Footer/Footer";
import Newsletter from "../UI/Newsletter/Newsletter";
import Navbar from "../UI/Navbar/Navbar";
import MainPage from "./MainPage";
import Animator from "../UI/Animator";
import { Slide } from "react-awesome-reveal";
const Horoscope = () => {
  const onScroll = () => {};
  console.log('test')
  return (
    <Animator>
      <div className="flex flex-col items-center bg-[#0b0b0b]">
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
