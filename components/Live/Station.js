import React from "react";
import Link from "next/link";
const Station = () => {
  return (
    <div className="z-30">
      <div className="z-0">
        <img
          src="/assets/circle.png"
          alt=""
          className="absolute z-0 mt-[-28rem] w-[40rem] ml-[60rem] hidden md:flex"
        />
        <img
          src="/assets/circle2.png"
          alt=""
          className="absolute z-0 mt-[-20rem] w-[40rem] ml-[-50rem] hidden md:flex"
        />
        <img
          src="/assets/blue.png"
          alt=""
          className="absolute z-0 md:ml-[70rem] mt-[20rem] md:mt-[-40rem] hidden md:flex"
        />{" "}
      </div>
      <div className="flex flex-col items-center justify-center z-30 flex-col md:flex-row">
        <section className="w-[95%] md:w-[50%]">
          <section className="mt-24 md:mt-2">
            <p className="homeTextColorStation m-1 text-4xl md:text-7xl text-center md:text-left">
            Hey Miss Mayor Carter
            </p>
          </section>
          <Link href="https://planetradio.co.uk/mellow-magic/">
            <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-8 mx-auto md:mx-1 flex items-center justify-center z-50 md:text-2xl">
              MellowMagic 105.4
              <img src="/assets/play.png" alt="" className="w-4 md:w-5 ml-4" />
            </button>
          </Link>
        </section>
        <section className="w-[95%] md:w-[50%]">
          <img
            src="/main.png"
            alt=""
            className="mx-auto w-[20rem] md:w-[25rem] my-6 md:my-20"
          />
        </section>
      </div>
    </div>
  );
};

export default Station;
