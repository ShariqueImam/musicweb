import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
const Album = () => {
  const { width } = useWindowSize();
  const AlbumHeading = styled.div`
    background: url("/assets/home/album.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    margin: ${width < 500 ? "4rem 0" : "9rem 0"};
    height: ${width < 500 ? "5vh" : "20vh"};
    width: 90vw;
  `;
  return (
    <div className="z-20 flex flex-col items-center justify-center z-30">
      
      <img
        src="/assets/blue.png"
        alt=""
        className="absolute z-0 md:ml-[70rem] "
      />{" "}
      <AlbumHeading className="flex items-center justify-center">
        <p className="text-4xl md:text-8xl text-white text-center md:text-auto">
          Music Albums
        </p>
      </AlbumHeading>
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center z-20"
      >
        <section className="w-[90vw] flex z-20">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // effect={"coverflow"}
            // centeredSlides={true}
            // coverflowEffect={{ rotate: 0, stretch: 0, depth: 0, modifier: 2.5 }}
            spaceBetween={0}
            slidesPerView={width < 500 ? 1 : 4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            className="flex items-center justify-center py-12 md:py-24 z-20"
          >
            <SwiperSlide className="flex items-center justify-center">
              <a href="/music">
                <div className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms] ">
                  <img
                    src="/assets/music/featured1.png"
                    alt=""
                    className=" scale-[0.8] md:scale-[0.9] w-[25rem] h-[28rem] md:h-[32rem] rounded-xl"
                  />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms] ">
              <a href="/music">
                <div className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms] ">
                  <img
                    src="/assets/music/featured2.png"
                    alt=""
                    className=" scale-[0.8] md:scale-[0.9] w-[25rem] h-[28rem] md:h-[32rem] rounded-xl"
                  />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms]">
              <a href="/music">
                <div className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms] ">
                  <img
                    src="/assets/home/album2.png"
                    alt=""
                    className=" scale-[0.8] md:scale-[0.9] w-[25rem] h-[28rem] md:h-[32rem] rounded-xl"
                  />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms]">
              <a href="/music">
                <div className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms] ">
                  <img
                    src="/assets/home/album4.png"
                    alt=""
                    className=" scale-[0.8] md:scale-[0.9] w-[25rem] h-[28rem] md:h-[32rem] rounded-xl"
                  />
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </section>
        <Link href="/music">
          <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-12">
            Explore Now
          </button>
        </Link>
      </Slide>
    </div>
  );
};

export default Album;
