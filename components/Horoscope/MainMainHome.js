import React, { useState } from "react";

const MainPage = () => {
  const [Sign, setSign] = useState("0");
  const style = {
    item: "w-16 md:w-24 scale-[0.8] text-white",
    iconText: "text-white text-xl md:text-xl text-center",
    iconTextHide: "text-white text-xl md:text-xl text-center opacity-[0]",
  };
  return (
    <div className="flex flex-col items-center justify-center z-50">
      <div className="horoscopeMainImg flex items-center justify-center flex-col py-24 z-50">
        {" "}
        <div className="horoscopeBg flex items-center justify-center mt-24 md:mt-32  z-50">
          <p className="text-4xl md:text-8xl text-white  edgy">Horoscope</p>
        </div>
        <img
          src="/assets/pink.png"
          alt=""
          className="absolute z-0 ml-[-100rem] mb-[30rem] h-[100vh]"
        />
        <div className="flex items-center justify-center flex-col my-8  z-50">
          <p className="text-4xl md:text-5xl text-white my-4 text-center md:text-center">
            To Know About Your Daily Horoscope
          </p>
          <p className="underlineColor w-[45vw] md:w-[15vw] h-[0.3vh]"></p>
        </div>
        <div className="flex flex-wrap w-[90%] md:w-[80%] mx-auto items-center justify-around z-20">
          <a
            href="https://www.elle.com/horoscopes/daily/a107/aquarius-daily-horoscope/"
            className="rounded-full"
          >
            <div
              onMouseEnter={() => setSign("1")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "1" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
            >
              <img
                src="/assets/horoscope/aquarius-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "1" && <p className={style.iconText}>Aquarius</p>}
            </div>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/aries-daily-horoscope/">
            <div
              onMouseEnter={() => setSign("2")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "2" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
            >
              <img
                src="/assets/horoscope/aries-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "2" && <p className={style.iconText}>Aries</p>}
            </div>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/cancer-daily-horoscope/">
            <div
              onMouseEnter={() => setSign("3")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "3" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
            >
              <img
                src="/assets/horoscope/cancer-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "3" && <p className={style.iconText}>Cancer</p>}
            </div>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/capricon-daily-horoscope/">
            <div
              onMouseEnter={() => setSign("4")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "4" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8`}
            >
              <img
                src="/assets/horoscope/capricorn-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "4" && <p className={style.iconText}>Capricon</p>}
            </div>
          </a>
        </div>
        <a href="/horoscope">
          <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-12">
            Explore Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default MainPage;
