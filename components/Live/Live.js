import React, { useEffect, useState } from "react";
import client from "../../pages/api/client";
import Footer from "../UI/Footer/Footer";
import Navbar from "../UI/Navbar/Navbar";
import Animator from "../UI/Animator";
import { Slide } from "react-awesome-reveal";

const Live = () => {
  const onScroll = () => {};
  const [Link, setLink] = useState("");
  const [Live, setLive] = useState("");

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
console.log(Link)
  return (
    <Animator>
      <div></div>
      <div className="flex flex-col items-center bg-[#0b0b0b] z-10">
        <Navbar onScroll={onScroll} />
        <img
          src="/assets/pink.png"
          alt=""
          className="absolute z-0 ml-[-70rem] mt-[-40rem]"
        />
        <img
          src="/assets/blue.png"
          alt=""
          className="absolute z-0 ml-[70rem] mt-[-40rem]"
        />{" "}
        <div className="liveHeading flex items-center justify-center mt-24 md:mt-32">
          <p className="text-6xl md:text-8xl text-white">Live Lobby</p>
        </div>
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
