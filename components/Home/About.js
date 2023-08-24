import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import useWindowSize from "../../hooks/useWindowSize";
const About = () => {
  const style = {};
  const { width } = useWindowSize();
  const AboutHeading = styled.div`
    background: url("/assets/home/aboutheading.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    margin: ${width < 500 ? "5rem 0" : "8rem 0"};
    height: ${width < 500 ? "4vh" : "20vh"};
    width: 70vw;
  `;

  return (
    <div className="flex flex-col items-center justify-center z-20">
      {" "}
      <img
        src="/assets/pink.png"
        alt=""
        className="absolute z-0 ml-[-90rem] "
      />{" "}
      <AboutHeading className="flex items-center justify-center">
        <p className="text-4xl md:text-8xl text-white text-center md:text-auto">
          About Me
        </p>
        
      </AboutHeading>
      <img src='/assets/blue.png' alt="" className="w-[100vw] overflow-hidden absolute z-0 md:hidden  md:ml-[50rem]" />{" "}
      <img src='/assets/pink.png' alt="" className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-70rem]" />
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center z-20"
      >
        <div className=" z-20 my-8 md:my-16 flex flex-col md:flex-row mx-auto w-[100%] md:w-[100%] lg:w-[100%] items-center justify-center ">
          <section className="md:w-[100%] flex flex-col items-center md:items-center z-20">
            <p className="homeTextColor text-5xl md:text-6xl text-center md:text-auto z-20">
              TMjuelz
            </p>
            
            <section className="w-[70%] md:w-[40%] my-20 md:my-14 z-20">
              <img
                src="/assets/white.svg"
                alt=""
                className="mx-auto scale-[1.3] md:scale-[2.2] my-5 md:my-24"
              />
            </section>
            <Link href="/music" className="">
              <button className="z-20 cursor-pointer exploreBtn text-white px-10 md:px-14 py-3 py-3 md:py-3 my-4">
                Listen More{" "}
              </button>
            </Link>
          </section>
        </div>
      </Slide>
    </div>
  );
};

export default About;
