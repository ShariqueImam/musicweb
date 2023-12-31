import React from "react";
import { Slide } from "react-awesome-reveal";
import { BsArrowUpRight } from "react-icons/bs";
const FeaturedMusic = () => {
  return (
    <div className="z-30">
      {" "}
      <img
        src="/assets/blue.png"
        alt=""
        className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[5rem] md:ml-[50rem]"
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
      <Slide
        direction="up"
        className="flex items-center justify-center z-30"
        triggerOnce={false}
      >
        <div className="bg2 flex items-center justify-center md:mt-12 z-10">
          <p className="text-5xl md:text-8xl text-white text-center  edgy">
            Featured Music
          </p>
        </div>
      </Slide>
      <Slide
        direction="right"
        className="flex items-center justify-center z-30"
        triggerOnce={true}
      >
        <div className="flex items-center justify-around flex-col md:flex-row  w-[100%] md:w-[60%] mx-auto z-30 ">
          <div className="hover:scale-[0.95] transition duration-[300ms]">
            <img
              src="/assets/music/featured1.png"
              alt=""
              className="scale-x-[0.65] scale-y-[0.75] md:scale-[0.8] "
            />
          </div>
          <div className="flex flex-col items-start ">
            <img
              src="/assets/circle.png"
              alt=""
              className="scale-[0.8] w-[100vw] overflow-hidden absolute ml-[-30rem] z-0"
            />
            <section className="z-30">
              <img
                src="/assets/blue.png"
                alt=""
                className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[0rem]"
              />{" "}
              <img
                src="/assets/pink.png"
                alt=""
                className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[-10rem]"
              />
              {/* <img src='/assets/blue.png' alt="" className="w-[100vw] overflow-hidden absolute z-0 ml-[0rem]" />{" "} */}
              <h2 className="homeTextColor m-1 text-xl md:text-5xl font-bold">
                The Light
              </h2>
              <p className="text-white text-xl font-thin my-4 md:my-5">
                Song Type- EP
              </p>
              <p className="text-white text-xl font-thin my-4 md:my-5 edgy">
                TMjuelz
              </p>{" "}
              <img
                src="/assets/blue.png"
                alt=""
                className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[0rem]"
              />{" "}
              <img
                src="/assets/pink.png"
                alt=""
                className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[-10rem]"
              />
            </section>
            <div className="z-30">
              <a href="https://music.apple.com/gb/artist/tmjuelz/1234991292">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src="/assets/music/icon.png" alt="" />{" "}
                  <p className="mx-3 text-white ">Listen On Apple Music</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
              <a href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src="/assets/music/icon.png" alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Spotify</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
              <a href="https://tidal.com/artist/16021686">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src="/assets/music/icon.png" alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Tidal</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
            </div>
          </div>
        </div>
      </Slide>
      <Slide
        direction="left"
        className="flex items-center justify-center my-32 md:my-0 z-40"
        triggerOnce={true}
      >
        <div className="flex items-center justify-around flex-col md:flex-row flex-col-reverse  w-[100%] md:w-[60%] mx-auto z-30">
          <div className="flex flex-col items-start z-30">
            <section className="flex flex-col items-start z-30">
              <h2 className="homeTextColor m-1 text-xl md:text-5xl font-bold ">
                Rhea Ripley (Sacred Heart)
              </h2>
              <p className="text-white text-xl font-thin my-4 md:my-5 text-end">
                Song Type - Single
              </p>
              <p className="text-white text-xl font-thin my-4 md:my-5 edgy">
                TMjuelz
              </p>
            </section>
            <div className="z-30">
              <a
                href="https://music.apple.com/gb/artist/tmjuelz/1234991292"
                className="z-50"
              >
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src="/assets/music/icon.png" alt="" />{" "}
                  <p className="mx-3 text-white ">Listen On Apple Music</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
              <a
                href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh"
                className="z-50"
              >
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src="/assets/music/icon.png" alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Spotify</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
              <a href="https://tidal.com/artist/16021686" className="z-50">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src="/assets/music/icon.png" alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Tidal</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
            </div>
          </div>
          <section className="z-0">
          <img
            src="/assets/blue.png"
            alt=""
            className="w-[100vw] overflow-hidden absolute z-0 md:hidden mt-[5rem]"
          />{" "}
          <img
            src="/assets/circle2.png"
            alt=""
            className="w-[100vw] overflow-hidden absolute z-0 md:hidden  mt-[-30rem] ml-[-15rem]"
          />
          <img
            src="/assets/pink.png"
            alt=""
            className="w-[100vw] overflow-hidden absolute z-0 md:hidden mt-[5rem] ml-[-15rem] mb-[20rem]"
          />
        </section>
          <div className="hover:scale-[0.95] transition duration-[300ms]">
            <img
              src="/assets/music/featured2.png"
              alt=""
              className="scale-x-[0.65] scale-y-[0.75] md:scale-[0.8]"
            />
          </div>
        </div>
      </Slide>
      <Slide
        direction="right"
        className="flex items-center justify-center z-30"
        triggerOnce={true}
      >
      
        <div className="flex items-center justify-around flex-col md:flex-row w-[100%] md:w-[60%] mx-auto z-30">
          <div className="hover:scale-[0.95] transition duration-[300ms]">
            <img
              src="/assets/home/album2.png"
              alt=""
              className="scale-x-[0.65] scale-y-[0.75]  md:scale-[0.8]"
            />
          </div>
          <div className="flex flex-col items-start z-30">
            <section>
              <h2 className="homeTextColor m-1 text-xl md:text-5xl font-bold">
                Jagiello
                <img
                  src="/assets/blue.png"
                  alt=""
                  className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[0rem]"
                />
                <img
                  src="/assets/pink.png"
                  alt=""
                  className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[-10rem]"
                />
              </h2>
              <p className="text-white text-xl font-thin my-4 md:my-5">
                Song Type - Single
              </p>
              <p className="text-white text-xl font-thin my-4 md:my-5 edgy">
                TMjuelz
              </p>
            </section>

            <div className="z-30">
              <a href="https://music.apple.com/gb/artist/tmjuelz/1234991292">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src="/assets/music/icon.png" alt="" />{" "}
                  <p className="mx-3 text-white ">Listen On Apple Music</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
              <a href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src="/assets/music/icon.png" alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Spotify</p>{" "}
                  <BsArrowUpRight className="text-white " />
                </section>
              </a>
              <a href="https://tidal.com/artist/16021686">
                <section className="flex items-center justify-start my-3 md:my-5  ">
                  <img src="/assets/music/icon.png" alt="" />{" "}
                  <p className="mx-3 text-white ">Listen on Tidal</p>{" "}
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
