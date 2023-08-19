import React, { useState } from "react";
import styled from "styled-components";
import img from "../../assets/horoscope/horoscope.png";
import img1 from "../../assets/horoscope/background.png";
import sign1 from "../../assets/horoscope/aquarius-svgrepo-com.svg";
import sign2 from "../../assets/horoscope/aries-svgrepo-com.svg";
import sign3 from "../../assets/horoscope/cancer-svgrepo-com.svg";
import sign4 from "../../assets/horoscope/capricorn-svgrepo-com.svg";
import sign5 from "../../assets/horoscope/horoscope-gemini-svgrepo-com.svg";
import sign6 from "../../assets/horoscope/leo-svgrepo-com.svg";
import sign7 from "../../assets/horoscope/libra-svgrepo-com.svg";
import sign8 from "../../assets/horoscope/pisces-svgrepo-com.svg";
import sign9 from "../../assets/horoscope/sagittarius-svgrepo-com.svg";
import sign10 from "../../assets/horoscope/scorpio-svgrepo-com.svg";
import sign11 from "../../assets/horoscope/taurus-svgrepo-com.svg";
import sign12 from "../../assets/horoscope/virgo-svgrepo-com.svg";
import pink from '../../assets/pink.png'
import blue from '../../assets/blue.png'
const MainPage = () => {
  const AboutHeading = styled.div`
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 30vh;
    width: 100vw;
    transform: scale(0.5);
    margin: 5rem;
  `;
  const Heading1 = styled.div`
    background: url(${img1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    // height: 100vh;
    width: 100vw;
  `;
  const [Sign, setSign] = useState("1");
  const style = {
    item: "w-16 md:w-24 scale-[0.8] text-white",
    iconText: "text-white text-xl md:text-xl text-center",
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading1 className="flex items-center justify-center flex-col py-24">
        {" "}
        <AboutHeading className="flex items-center justify-center mt-24 md:mt-32">
          <p className="text-6xl md:text-8xl text-white">Horoscope</p>
        </AboutHeading>
        <img src={pink} alt="" className="absolute z-0 ml-[-70rem]" />
        <img src={blue} alt="" className="absolute z-0 ml-[70rem] mt-[60rem]" />{" "}
        <div className="flex items-center justify-center flex-col my-8">
          <p className="text-4xl md:text-5xl text-white my-4 text-center md:text-center">
            To Know About Your Daily Horoscope
          </p>
          <p className="underlineColor w-[15vw] h-[0.3vh]"></p>
        </div>
        <div className="flex flex-wrap w-[95%] md:w-[80%] mx-auto items-center justify-center">
          <a href="https://www.elle.com/horoscopes/daily/a107/aquarius-daily-horoscope/">
            <p
              onMouseEnter={() => setSign("1")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "1" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8 `}
            >
              <img src={sign1} alt="" className={style.item} />{" "}
              {Sign == "1" && <p className={style.iconText}>Aquarius</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/aries-daily-horoscope/">
            <p
              onMouseEnter={() => setSign("2")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "2" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8 `}
            >
              <img src={sign2} alt="" className={style.item} />{" "}
              {Sign == "2" && <p className={style.iconText}>Aries</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/cancer-daily-horoscope/">
            <p
              onMouseEnter={() => setSign("3")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "3" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8 `}
            >
              <img src={sign3} alt="" className={style.item} />{" "}
              {Sign == "3" && <p className={style.iconText}>Cancer</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/capricon-daily-horoscope/">
            <p
              onMouseEnter={() => setSign("4")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "4" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8 `}
            >
              <img src={sign4} alt="" className={style.item} />{" "}
              {Sign == "4" && <p className={style.iconText}>Capricon</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/gemini-daily-horoscope/">
            <p
              onMouseEnter={() => setSign("5")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "5" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8 `}
            >
              <img src={sign5} alt="" className={style.item} />{" "}
              {Sign == "5" && <p className={style.iconText}>Gemini</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/leo-daily-horoscope/">
            <p
              onMouseEnter={() => setSign("6")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "6" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8 `}
            >
              <img src={sign6} alt="" className={style.item} />{" "}
              {Sign == "6" && <p className={style.iconText}>Leo</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/libra-daily-horoscope/">
            <p
              onMouseEnter={() => setSign("7")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "7" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8 `}
            >
              <img src={sign7} alt="" className={style.item} />{" "}
              {Sign == "7" && <p className={style.iconText}>Libra</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/pisces-daily-horoscope/">
            <p
              onMouseEnter={() => setSign("8")}
              onMouseLeave={() => setSign("0")}
              className={`${
                Sign == "8" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8 `}
            >
              <img src={sign8} alt="" className={style.item} />{" "}
              {Sign == "8" && <p className={style.iconText}>Pisces</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a60/sagittarius-daily-horoscope/">
            <p
              className={`${
                Sign == "9" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3] p-12 rounded-full  mx-8 md:mx-12 my-8 `}
              onMouseEnter={() => setSign("9")}
              onMouseLeave={() => setSign("0")}
            >
              <img src={sign9} alt="" className={style.item} />{" "}
              {Sign == "9" && <p className={style.iconText}>Sagittarius</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a108/scorpio-daily-horoscope/">
            <p
              className={`${
                Sign == "10" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3]  p-12 rounded-full mx-8 md:mx-12 my-8 `}
              onMouseEnter={() => setSign("10")}
              onMouseLeave={() => setSign("0")}
            >
              <img src={sign10} alt="" className={style.item} />{" "}
              {Sign == "10" && <p className={style.iconText}>Scorpio</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a108/taurus-daily-horoscope/">
            <p
              className={`${
                Sign == "11" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3]  p-12 rounded-full mx-8 md:mx-12 my-8 `}
              onMouseEnter={() => setSign("11")}
              onMouseLeave={() => setSign("0")}
            >
              <img src={sign11} alt="" className={style.item} />{" "}
              {Sign == "11" && <p className={style.iconText}>Taurus</p>}
            </p>
          </a>
          <a href="https://www.elle.com/horoscopes/daily/a108/virgo-daily-horoscope/">
            <p
              className={`${
                Sign == "12" && "horo  rounded-full"
              } bg-gray-500 bg-opacity-[0.3]  p-12 rounded-full mx-8 md:mx-12 my-8 `}
              onMouseEnter={() => setSign("12")}
              onMouseLeave={() => setSign("0")}
            >
              <img src={sign12} alt="" className={style.item} />{" "}
              {Sign == "12" && <p className={style.iconText}>Virgo</p>}
            </p>
          </a>
        </div>
        <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-12">
          Explore Now
        </button>
      </Heading1>
    </div>
  );
};

export default MainPage;
