import React, { useState } from "react";

const MainPage = () => {
  const [Sign, setSign] = useState("0");
  const style = {
    item: "w-16 md:w-24 scale-[0.8] text-white",
    iconText: "text-white text-xl md:text-xl text-center",
    iconTextHide: "text-white text-xl md:text-xl text-center opacity-[0]",
  };
  return (
    <div className="flex flex-col items-center justify-center z-20">
      <div className="horoscopeMainImg flex items-center justify-center flex-col py-24">
        {" "}
        <div className="horoscopeBg flex items-center justify-center mt-24 md:mt-32">
          <p className="text-4xl md:text-8xl text-white edgy">Horoscope</p>
        </div>
        <img
          src="/assets/pink.png"
          alt=""
          className="absolute z-0 ml-[-70rem]"
        />
        <img
          src="/assets/blue.png"
          alt=""
          className="absolute z-0 ml-[70rem] mt-[60rem]"
        />{" "}
        <div className="flex items-center justify-center flex-col my-8">
          <p className="text-4xl md:text-5xl text-white my-4 text-center md:text-center">
            To Know About Your Daily Horoscope
          </p>
          <p className="underlineColor w-[45vw] md:w-[15vw] h-[0.3vh]"></p>
        </div>
        <div className="flex flex-wrap w-[90%] md:w-[80%] mx-auto items-center justify-around">
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
          <a href="https://www.elle.com/horoscopes/daily/a100/cancer-daily-horoscope/">
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
          <a href="https://www.elle.com/horoscopes/daily/a106/capricon-daily-horoscope/" className="z-40">
            <div
              onMouseEnter={() => setSign("4")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "4" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
            >
              <img
                src="/assets/horoscope/capricorn-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "4" && <p className={style.iconText}>Capricon</p>}
            </div>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a99/gemini-daily-horoscope/" className="z-40">
            <div
              onMouseEnter={() => setSign("5")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "5" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
            >
              <img
                src="/assets/horoscope/horoscope-gemini-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "5" && <p className={style.iconText}>Gemini</p>}
            </div>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a101/leo-daily-horoscope/" className="z-40">
            <div
              onMouseEnter={() => setSign("6")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "6" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
            >
              <img
                src="/assets/horoscope/leo-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "6" && <p className={style.iconText}>Leo</p>}
            </div>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a103/libra-daily-horoscope/" className="z-40">
            <div
              onMouseEnter={() => setSign("7")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "7" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
            >
              <img
                src="/assets/horoscope/libra-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "7" && <p className={style.iconText}>Libra</p>}
            </div>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a108/pisces-daily-horoscope/" className="z-40">
            <div
              onMouseEnter={() => setSign("8")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "8" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
            >
              <img
                src="/assets/horoscope/pisces-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "8" && <p className={style.iconText}>Pisces</p>}
            </div>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a105/sagittarius-daily-horoscope/" className="z-40">
            <div
              className={`${
                Sign == "9" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
              onMouseEnter={() => setSign("9")}
              onMouseLeave={() => setSign("0")}
            >
              <img
                src="/assets/horoscope/sagittarius-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "9" && <p className={style.iconText}>Sagittarius</p>}
            </div>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a104/scorpio-daily-horoscope/" className="z-40">
            <div
              className={`${
                Sign == "10" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3]  p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
              onMouseEnter={() => setSign("10")}
              onMouseLeave={() => setSign("0")}
            >
              <img
                src="/assets/horoscope/scorpio-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "10" && <p className={style.iconText}>Scorpio</p>}
            </div>
          </a>

          <a href="https://www.elle.com/horoscopes/daily/a98/taurus-daily-horoscope/" className="z-40">
            <div
              className={`${
                Sign == "11" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3]  p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
              onMouseEnter={() => setSign("11")}
              onMouseLeave={() => setSign("0")}
            >
              <img
                src="/assets/horoscope/taurus-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "11" && <p className={style.iconText}>Taurus</p>}
            </div>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a102/virgo-daily-horoscope/" className="z-40">
            <div
              className={`${
                Sign == "12" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3]  p-6 md:p-12 rounded-full mx-4 md:mx-8 md:mx-12 my-8 `}
              onMouseEnter={() => setSign("12")}
              onMouseLeave={() => setSign("0")}
            >
              <img
                src="/assets/horoscope/virgo-svgrepo-com.svg"
                alt=""
                className={style.item}
              />{" "}
              {Sign == "12" && <p className={style.iconText}>Virgo</p>}
            </div>
          </a>
        </div>
        <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-12 z-20">
          Elle Zodiac
        </button>
        <img
        src="/assets/blue.png"
        alt=""
        className="w-[100vw] overflow-hidden absolute z-0 md:hidden  md:ml-[50rem] mt-[70rem]"
      />{" "}
      <img
        src="/assets/circle2.png"
        alt=""
        className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-80rem]  mt-[70rem]"
      />
      <img
        src="/assets/pink.png"
        alt=""
        className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-70rem] mt-[70rem]"
      />
      </div>
    </div>
  );
};

export default MainPage;
