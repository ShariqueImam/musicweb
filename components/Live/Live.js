import React, { useEffect, useState } from "react";
import client from "../../pages/api/client";
import Footer from "../UI/Footer/Footer";
import Navbar from "../UI/Navbar/Navbar";
import Animator from "../UI/Animator";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
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
  console.log(Link);
  return (
    <Animator>
      <div className="flex flex-col items-center bg-[#0b0b0b] z-50">
        <Navbar onScroll={onScroll} />
        <img
          src="/assets/pink.png"
          alt=""
          className="absolute z-0 md:ml-[-70rem] md:mt-[-40rem]"
        />
        <img
          src="/assets/blue.png"
          alt=""
          className="absolute z-0 md:ml-[70rem] mt-[20rem] md:mt-[-40rem]"
        />{" "}
        <div className="liveHeading flex items-center justify-center mt-44 md:mt-32">
          <p className="text-4xl md:text-8xl text-white edgy">Live Lobby</p>
        </div>
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center z-50"
        >
          <div className="live w-[95vw] md:w-[80vw] h-[60vh] md:h-[80vh] flex items-center justify-center text-white text-5xl md:text-6xl z-50">
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
              <p className="text-center text-3xl md:text-7xl">
                Will be Live Soon....
              </p>
            )}
          </div>
          <a href="https://youtube.com">
            <button className="exploreBtn text-white px-16 md:px-20 py-3 md:py-4 md:py-3 mt-20 text-xl">
              Load More
            </button>
          </a>
        </Slide>
        <div className="w-[100%] z-10">
          <Footer />
        </div>
      </div>
    </Animator>
  );
};

export default Live;
