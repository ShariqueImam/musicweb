import React from "react";
import SingleCard from "./SingleCard";
import Link from "next/link";

const SwagsList = ({ swagData }) => {
  let shirts = swagData.slice(0, 5);
  let hoodies = swagData.slice(5, 9);
  let shorts = swagData.slice(9, 17);
  let bags = swagData.slice(17, 22);
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
      <div className="flex flex-wrap w-[100vw] md:w-[95vw] items-center justify-center z-30 ">
        <div className="swagsHeadingShirts flex items-center justify-center mt-44 md:mt-32">
          <p className="text-4xl md:text-8xl text-white">Shirts</p>
        </div>
        {shirts.map((singleItem) => {
          return (
            <Link href={`/swags/${singleItem.id}`} className="">
              <SingleCard swagData={singleItem} />
            </Link>
          );
        })}
        <div className="swagsHeadingHoodies flex items-center justify-center mt-44 md:mt-32">
          <p className="text-4xl md:text-8xl text-white">Hoodies</p>
        </div>
        {hoodies.map((singleItem) => {
          return (
            <Link href={`/swags/${singleItem.id}`} className="">
              <SingleCard swagData={singleItem} />
            </Link>
          );
        })}
        <div className="swagsHeadingShorts flex items-center justify-center mt-44 md:mt-32">
          <p className="text-4xl md:text-8xl text-white">Shorts</p>
        </div>
        {shorts.map((singleItem) => {
          return (
            <Link href={`/swags/${singleItem.id}`} className="">
              <SingleCard swagData={singleItem} />
            </Link>
          );
        })}
        <div className="swagsHeadingBags flex items-center justify-center mt-44 md:mt-32">
          <p className="text-4xl md:text-8xl text-white">Bags and Umbrella</p>
        </div>
        {bags.map((singleItem) => {
          return (
            <Link href={`/swags/${singleItem.id}`} className="">
              <SingleCard swagData={singleItem} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SwagsList;
