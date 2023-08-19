import React, { useEffect, useState } from "react";
import client from "../../client";
import Footer from "../UI/Footer/Footer";
import Navbar from "../UI/Navbar/Navbar";
import styled from "styled-components";
import Animator from "../UI/Animator";
import { Slide } from "react-awesome-reveal";
import liveImg from "../../assets/liveheading.png";
import pink from "../../assets/pink.png";
import blue from "../../assets/blue.png";
const Live = () => {
  const onScroll = () => {};
  const [Link, setLink] = useState("");
  const [Live, setLive] = useState("");
  const AboutHeading = styled.div`
    background: url(${liveImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 30vh;
    // margin: 6rem;
    width: 100vw;
    transform: scale(0.5);
  `;
  useEffect(() => {
    const getProduct = async () => {
      const youtubeLink = await client.fetch(`*[_type=='youtube']`);
      if (youtubeLink && youtubeLink.length > 0) {
        setLink(youtubeLink[0].youtubeLink);
        setLive(youtubeLink[0].live);
      }
    };
    getProduct();
  }, []);

  return (
    <Animator>
      <div></div>
      <div className="flex flex-col items-center bg-[#0b0b0b] z-10">
        <Navbar onScroll={onScroll} />
        <img
          src={pink}
          alt=""
          className="absolute z-0 ml-[-70rem] mt-[-40rem]"
        />
        <img
          src={blue}
          alt=""
          className="absolute z-0 ml-[70rem] mt-[-40rem]"
        />{" "}
        <AboutHeading className="flex items-center justify-center mt-24 md:mt-32">
          <p className="text-6xl md:text-8xl text-white">Live Lobby</p>
        </AboutHeading>
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center "
        >
          <div className="live w-[80vw] h-[80vh] flex items-center justify-center text-white text-5xl md:text-6xl">
            {Live ? (
              <iframe
                id="stream"
                width="100%"
                height="100%"
                src={Link}
                frameborder="10"
                allowfullScreen
                className="rounded-xl live"
              ></iframe>
            ) : (
              <p className="text-center">Will be Live Soon....</p>
            )}
          </div>
        </Slide>
        <Footer />
      </div>
    </Animator>
  );
};

export default Live;
