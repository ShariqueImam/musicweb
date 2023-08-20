import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import useWindowSize from "../../hooks/useWindowSize";
const About = () => {
  const style = {};
  const { width } = useWindowSize();
  const AboutHeading = styled.div`
    background: url('/assets/home/aboutheading.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    margin: ${width < 500 ? "5rem 0" : "8rem 0"};
    height: ${width < 500 ? "4vh" : "20vh"};
    width: 70vw;
  `;

  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <img src='/assets/pink.png' alt="" className="absolute z-0 ml-[-90rem] " />{" "}
      <AboutHeading className="flex items-center justify-center">
        <p className="text-4xl md:text-8xl text-white text-center md:text-auto">
          About Me
        </p>
      </AboutHeading>
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center"
      >
        <div className="my-8 md:my-16 flex flex-col md:flex-row mx-auto w-[95%] md:w-[80%] lg:w-[70%] items-center justify-between">
          <section className="md:w-[50%] flex flex-col items-center md:items-start">
            <p className="homeTextColor text-5xl md:text-6xl text-center md:text-auto">TM Juelz</p>
            <p className="text-white my-4 text-2xl  text-center md:text-auto">Rapper, musician</p>
            <p className="text-white my-4 w-[95%] md:w-[70%]  text-center md:text-left text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <Link href="/music">
              <button className="exploreBtn text-white px-10 md:px-14 py-3 py-3 md:py-3 my-4">
                Learn More{" "}
              </button>
            </Link>
          </section>
          <section className="w-[70%] md:w-[40%] my-8 md:my-2">
            <img src='/assets/home/about.png' alt="" />
          </section>
        </div>
      </Slide>
    </div>
  );
};

export default About;
