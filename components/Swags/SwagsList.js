import React from "react";
import SingleCard from "./SingleCard";
import Link from "next/link";
import { scroller } from "react-scroll";
const SwagsList = ({ swagData }) => {
  let shirts = swagData.slice(0, 5);
  let hoodies = swagData.slice(5, 9);
  let shorts = swagData.slice(9, 17);
  let bags = swagData.slice(17, 22);
  const onScroll = (value) => {
    if (typeof window !== "undefined") {
      scroller.scrollTo(`${value}`, {
        duration: 900,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <div className="flex flex-wrap w-[100%] md:w-[80%] mx-auto items-center justify-center z-20">
      {/* <img src={blue} alt="" className="absolute z-0 ml-[50rem]" />{" "} */}
      <img
        src="/assets/circle.png"
        alt=""
        className="scale-[0.8] absolute ml-[80rem] z-0"
      />
      <img
        src="/assets/circle2.png"
        alt=""
        className="scale-[0.8] absolute ml-[-80rem] mt-[150rem] z-0"
      />
      <div className="flex flex-wrap w-[100vw] md:w-[95vw] items-center justify-center z-30">
        <div className="flex items-center justify-center mt-12 md:mt-1 z-30 mt-12 items-center justify-center">
          <p
            className="border-move-animation text-xs  md:text-2xl text-white mx-4 md:mx-8 cursor-pointer my-5 md:my-0"
            onClick={() => onScroll("a")}
          >
            Shirts
          </p>
          <p
            className="border-move-animation text-xs  md:text-2xl text-white mx-4 md:mx-8 cursor-pointer my-5 md:my-0"
            onClick={() => onScroll("b")}
          >
            Hoodies
          </p>
          <p
            className="border-move-animation text-xs  md:text-2xl text-white mx-4 md:mx-8 cursor-pointer my-5 md:my-0"
            onClick={() => onScroll("c")}
          >
            Shorts
          </p>
          <p
            className="border-move-animation text-xs  md:text-2xl text-white mx-4 md:mx-8 cursor-pointer my-5 md:my-0"
            onClick={() => onScroll("d")}
          >
            Bags and Umbrella
          </p>
        </div>
        <div className="a swagsHeadingShirts flex items-center justify-center mt-12 md:mt-32">
          <p className="text-4xl md:text-8xl text-white">Shirts</p>
        </div>
        <div className="z-30 flex flex-wrap items-center justify-center w-[100%] md:w-[80%] mx-auto">
          {shirts.map((singleItem) => {
            return (
              <Link href={`/shop/${singleItem.id}`} className="">
                <SingleCard swagData={singleItem} />
              </Link>
            );
          })}
        </div>
        <img
          src="/assets/blue.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0   ml-[0rem] mt-[-180rem]"
        />
        <img
          src="/assets/pink.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0   ml-[-10rem] mt-[-180rem]"
        />
        <div className="b swagsHeadingHoodies flex items-center justify-center mt-44 md:mt-32">
          <p className="text-4xl md:text-8xl text-white">Hoodies</p>
        </div>
        <img
          src="/assets/blue.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0   ml-[0rem] mt-[150rem]"
        />
        <img
          src="/assets/pink.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0   ml-[-10rem] mt-[150rem]"
        />
        <div className="z-30 flex flex-wrap items-center justify-center w-[100%] md:w-[80%] mx-auto">
          {hoodies.map((singleItem) => {
            return (
              <Link href={`/shop/${singleItem.id}`} className="">
                <SingleCard swagData={singleItem} />
              </Link>
            );
          })}
        </div>
        <div className="c swagsHeadingShorts flex items-center justify-center mt-44 md:mt-32">
          <p className="text-4xl md:text-8xl text-white">Shorts</p>
        </div>
        <div className="z-30 flex flex-wrap items-center justify-center w-[100%] md:w-[80%] mx-auto">
          {shorts.map((singleItem) => {
            return (
              <Link href={`/shop/${singleItem.id}`} className="">
                <SingleCard swagData={singleItem} />
              </Link>
            );
          })}
        </div>
        <img
          src="/assets/blue.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0   ml-[0rem] mt-[400rem]"
        />
        <img
          src="/assets/pink.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0   ml-[-10rem] mt-[400rem]"
        />
        <div className="d swagsHeadingBags flex items-center justify-center mt-44 md:mt-32">
          <p className="text-4xl md:text-8xl text-white">Bags and Umbrella</p>
        </div>
        <div className="z-30 flex flex-wrap items-center justify-center w-[100%] md:w-[80%] mx-auto">
          {bags.map((singleItem) => {
            return (
              <Link href={`/shop/${singleItem.id}`} className="">
                <SingleCard swagData={singleItem} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SwagsList;
