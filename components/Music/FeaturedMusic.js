import React from "react";
import { Slide } from "react-awesome-reveal";
import { BsArrowUpRight } from "react-icons/bs";
const FeaturedMusic = () => {


  return (
    <div>
      {" "}
      <Slide
        direction="up"
        className="flex items-center justify-center "
        triggerOnce={false}
      >
        <div className="bg2 flex items-center justify-center mt-12 md:mt-12 z-10">
          <p className="text-6xl md:text-8xl text-white">Featured Music</p>
        </div>
      </Slide>
      <Slide
        direction="right"
        className="flex items-center justify-center "
        triggerOnce={true}
      >
        <div className="flex items-center justify-around flex-col md:flex-row  w-[100%] md:w-[70%] mx-auto">
          <img src='/assets/music/featured1.png' alt="" className="scale-[0.8]" />
          <div className="flex flex-col items-start ">
            <img
              src='/assets/circle.png'
              alt=""
              className="scale-[0.8] absolute ml-[-30rem] z-0"
            />
            <section>
              <img src='/assets/blue.png' alt="" className="absolute z-0 ml-[0rem]" />{" "}
              <h2 className="homeTextColor m-1 text-5xl md:text-7xl font-bold">
                Falling In Love
              </h2>
              <p className="text-white text-xl font-thin my-4 md:my-5">
                Song Type
              </p>
              <p className="text-white text-xl font-thin my-4 md:my-5">
                Singer Name
              </p>
            </section>
            <div>
              <a href="https://soundcloud.com/tmjuelz">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src='/assets/music/icon.png' alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Sound Cloud</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
              <a href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src='/assets/music/icon.png' alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Spotify</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
            </div>
          </div>
        </div>
      </Slide>
      <Slide
        direction="left"
        className="flex items-center justify-center "
        triggerOnce={true}
      >
        <div className="flex items-center justify-around flex-col md:flex-row  w-[100%] md:w-[70%] mx-auto">
          <div className="flex flex-col items-end ">
            <section>
              <h2 className="homeTextColor m-1 text-5xl md:text-7xl font-bold">
                Falling In Love
              </h2>
              <p className="text-white text-xl font-thin my-4 md:my-5 text-end">
                Song Type
              </p>
              <p className="text-white text-xl font-thin my-4 md:my-5 text-end">
                Singer Name
              </p>
            </section>
            <div>
              <a href="https://soundcloud.com/tmjuelz">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src='/assets/music/icon.png' alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Sound Cloud</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
              <a href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src='/assets/music/icon.png' alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Spotify</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
            </div>
          </div>
          <img src='/assets/music/featured2.png' alt="" className="scale-[0.8]" />
        </div>
      </Slide>
      <Slide
        direction="right"
        className="flex items-center justify-center "
        triggerOnce={true}
      >
        <div className="flex items-center justify-around flex-col md:flex-row w-[100%] md:w-[70%] mx-auto">
          <img src='/assets/music/featured3.png' alt="" className="scale-[0.8]" />
          <div className="flex flex-col items-start ">
            <section>
              <h2 className="homeTextColor m-1 text-5xl md:text-7xl font-bold">
                Falling In Love
              </h2>
              <p className="text-white text-xl font-thin my-4 md:my-5">
                Song Type
              </p>
              <p className="text-white text-xl font-thin my-4 md:my-5">
                Singer Name
              </p>
            </section>
            <div>
              <a href="https://soundcloud.com/tmjuelz">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src='/assets/music/icon.png' alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Sound Cloud</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
              <a href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src='/assets/music/icon.png' alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Spotify</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default FeaturedMusic;
