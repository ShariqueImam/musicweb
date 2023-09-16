import React from "react";
import SingleCard from "./FeaturedSingleCard";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
const Featured = () => {
  const { width } = useWindowSize();
  const featuredData = [
    {
      id: 100,
      img: "/assets/swags/featured/1.jpeg",
      name: "PYKRETE RECORDS T-SHIRT",
      price: 40,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 101,
      img: "/assets/swags/featured/33.png",
      name: "F3 LOGO T-SHIRT",
      price: 40,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 102,
      img: "/assets/swags/featured/22.png",
      name: "F3 LOGO SHORTS",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 103,
      img: "/assets/swags/featured/44.png",
      name: "F3 LOGO T-SHIRT",
      price: 40,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 104,
      img: "/assets/swags/featured/55.png",
      name: "F3 LOGO SHORTS",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
  ];
  return (
    <div className="z-30 flex flex-col items-center justify-center">
      {" "}
      <div className="c swagsHeadingFeatured flex items-center justify-center mt-44 md:mt-32">
        <p className="text-2xl md:text-8xl text-white edgy text-center">
          Featured Products
        </p>
      </div>
      <div className="flex items-center justify-center w-[80vw] md:w-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={width < 500 ? 1 : 4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          className="flex items-center justify-center py-12 md:py-24 z-20 mx-auto w-[100vw] md:w-[80vw] "
        >
          <SwiperSlide className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms] mx-auto">
            <Link href={`/shop/${featuredData[0].id}`} className="mx-auto flex items-center justify-center">
              <SingleCard swagData={featuredData[0]} />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms] ">
            {" "}
            <Link href={`/shop/${featuredData[1].id}`} className="mx-auto flex items-center justify-center">
              <SingleCard swagData={featuredData[1]} />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms]">
            <Link href={`/shop/${featuredData[2].id}`} className="mx-auto flex items-center justify-center">
              <SingleCard swagData={featuredData[2]} />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms]">
            <Link href={`/shop/${featuredData[3].id}`} className="mx-auto flex items-center justify-center">
              <SingleCard swagData={featuredData[3]} />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center hover:scale-[0.95] transition duration-[300ms]">
            <Link href={`/shop/${featuredData[4].id}`} className="mx-auto flex items-center justify-center">
              <SingleCard swagData={featuredData[4]} />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
