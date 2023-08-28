import React from "react";
import Link from "next/link";
const Station = () => {
  return (
    <div className="z-30">
       <img
          src="/assets/circle.png"
          alt=""
          className="absolute z-0 mt-[-48rem] ml-[-0rem]"
        />
       <img
          src="/assets/circle2.png"
          alt=""
          className="absolute z-0 mt-[-48rem] ml-[-80rem]"
        />
        <img
          src="/assets/blue.png"
          alt=""
          className="absolute z-0 md:ml-[70rem] mt-[20rem] md:mt-[-40rem]"
        />{" "}
      <img src="/assets/white.svg" alt="" className="mx-auto mt-36 w-48" />
      <Link href="/music">
        <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-16 flex items-center justify-center">
          <img src="/assets/light.png" alt="" className="w-8 mr-4"/>
          Explore
          <img src="/assets/light.png" alt="" className="w-8 ml-4"/>
        </button>
      </Link>
    </div>
  );
};

export default Station;
