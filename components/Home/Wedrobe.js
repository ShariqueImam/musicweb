import React from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import SingleCard from "./SingleCard";
const Wedrobe = () => {
  const { width } = useWindowSize();
  const WedrobeHeading = styled.div`
    background: url("/assets/home/swagsheading.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    margin: ${width < 500 ? "4rem 0" : "8rem 0"};
    height: ${width < 500 ? "5vh" : "20vh"};
    width: 70vw;
  `;
  return (
    <div className="flex flex-col  justify-center z-20 items-center my-8 z-30">
      {" "}
      <img
        src="/assets/pink.png"
        alt=""
        className="absolute z-0 ml-[-80rem] mb-36"
      />{" "}
      <img
        src="/assets/circle.png"
        alt=""
        className="absolute z-0 md:ml-[30rem] w-[100vw] h-[150vh]"
      />{" "}
      <div className="swagsHeading flex items-center justify-center">
        <p className="text-4xl md:text-8xl text-white text-center md:text-start  edgy">
          Shop
        </p>
      </div>
      <img
        src="/assets/blue.png"
        alt=""
        className="w-[100vw] overflow-hidden absolute z-0 md:hidden  md:ml-[50rem]"
      />{" "}
      <img
        src="/assets/pink.png"
        alt=""
        className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-70rem]"
      />
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center w-[100%] h-[100%] z-30"
      >
        <section className="flex items-center justify-center w-[100%] flex-col md:flex-row z-30">
          <SingleCard
            img={"/assets/new/6.jpg"}
            name={"The Light Gray Shorts"}
            price={"35"}
          />
          <SingleCard
            img={"/assets/swags/hoodie2.jpg"}
            name={"Sacred Heart Hoodie"}
            price={"45"}
          />
          <SingleCard
            img={"/assets/swags/shirt-design2.jpg"}
            name={"Sacred Heart T Shirt"}
            price={"25"}
          />
        </section>{" "}
        <button className="mx-auto exploreBtn shopNow px-14 md:px-20 py-3 md:py-4 mt-20 text-white mx-auto self-center z-30">
          <Link href="/shop">Shop Now</Link>
        </button>
        <img
          src="/assets/blue.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[10rem]"
        />{" "}
        <img
          src="/assets/pink.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[-10rem]"
        />
      </Slide>
    </div>
  );
};

export default Wedrobe;

const style1 = {
  wrapper:
    "wedrobe1 h-[45vh] md:h-[55vh] w-[105%] md:w-[26%] mx-5 md:mx-3 my-4 p-6 md:p-12 flex flex-col items-start justify-end hover:scale-[0.9] transition duration-[300ms]",
  heading: "font-thin text-2xl md:text-2xl text-white w-[100%] md:w-[80%]",
  para: " text-sm md:text-xl mt-2 text-white font-semibold",
  line: "underline cursor-pointer",
  button:
    "bg-white flex items-center justify-center text-black px-5 md:px-8 py-2 md:py-3 rounded-full mt-7",
  btnText: "bg-white flex items-center justify-center text-black",
};
const SingleCard1 = ({ price, heading, image }) => {
  return (
    <div className={style1.wrapper}>
      <h2 className={style1.heading}>{heading}</h2>
      <h2 className={style1.para}>{price}</h2>
    </div>
  );
};
const style2 = {
  wrapper:
    "wedrobe2 h-[45vh] md:h-[55vh] w-[105%] md:w-[26%] mx-5 md:mx-3 my-4 p-6 md:p-12 flex flex-col items-start justify-end hover:scale-[0.9] transition duration-[300ms]",
  heading: "font-thin text-2xl md:text-2xl text-white w-[100%] md:w-[80%]",
  para: " text-sm md:text-xl mt-2 text-white font-semibold",
  line: "underline cursor-pointer",
  button:
    "bg-white flex items-center justify-center text-black px-5 md:px-8 py-2 md:py-3 rounded-full mt-7",
  btnText: "bg-white flex items-center justify-center text-black",
};
const SingleCard2 = ({ price, heading, image }) => {
  return (
    <div className={style2.wrapper}>
      <h2 className={style2.heading}>{heading}</h2>
      <h2 className={style2.para}>{price}</h2>
    </div>
  );
};
const style3 = {
  wrapper:
    "wedrobe3 h-[45vh] md:h-[55vh] w-[105%] md:w-[26%] mx-5 md:mx-3 my-4 p-6 md:p-12 flex flex-col items-start justify-end hover:scale-[0.9] transition duration-[300ms]",
  heading: "font-thin text-2xl md:text-2xl text-white w-[100%] md:w-[80%]",
  para: " text-sm md:text-xl mt-2 text-white font-semibold",
  line: "underline cursor-pointer",
  button:
    "bg-white flex items-center justify-center text-black px-5 md:px-8 py-2 md:py-3 rounded-full mt-7",
  btnText: "bg-white flex items-center justify-center text-black",
};
const SingleCard3 = ({ price, heading, image }) => {
  return (
    <div className={style3.wrapper}>
      <h2 className={style3.heading}>{heading}</h2>
      <h2 className={style3.para}>{price}</h2>
    </div>
  );
};
