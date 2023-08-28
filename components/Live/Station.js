import React from "react";
import Link from "next/link";
const Station = () => {
  return (
    <div className="z-0">
      <div className="z-0">
        <img
          src="/assets/circle.png"
          alt=""
          className="absolute z-0 mt-[-28rem]  w-[40rem] ml-[30rem]"
        />
        <img
          src="/assets/circle2.png"
          alt=""
          className="absolute z-0 mt-[-20rem] w-[40rem] ml-[-50rem]"
        />
        <img
          src="/assets/blue.png"
          alt=""
          className="absolute z-0 md:ml-[70rem] mt-[20rem] md:mt-[-40rem]"
        />{" "}
      </div>
      <div className="flex flex-col items-center justify-center z-30">
        <img src="/assets/white.svg" alt="" className="mx-auto mt-36 w-48" />
        {/* <img
          src="/assets/station.png"
          alt=""
          className="mx-auto w-[20rem] md:w-[25rem] my-20"
        /> */}
        <Link href="https://youtu.be/UqmUxkRPBS0?si=sXtpbAMUPj-foVYe">
          <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-8 flex items-center justify-center z-50">
            <img src="/assets/light.png" alt="" className="w-8 mr-4" />
            Live
            <img src="/assets/light.png" alt="" className="w-8 ml-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Station;
