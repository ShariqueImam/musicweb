import React from "react";
import styled from "styled-components";

const MoreMusic = () => {
  return (
    <div className="flex flex-col justify-center w-[100%] md:w-[90%] z-10">
      {" "}
      <img
        src="/assets/pink.png"
        alt=""
        className="absolute z-0 ml-[-20rem] mb-[-50rem]"
      />{" "}
      <div className="flex items-center justify-center flex-col my-8 my-16">
        <p className="text-4xl md:text-5xl text-white my-16">More Music</p>
        <p className="underlineColor w-[10vw] h-[0.3vh]"></p>
      </div>
      <section className="flex items-center justify-center flex-col md:flex-row">
        <SingleCard1 heading={"Green Hoodie"} price={"$150"} />
        <SingleCard2 heading={"Green Hoodie"} price={"$150"} />
        <SingleCard3 heading={"Green Hoodie"} price={"$150"} />
      </section>
    </div>
  );
};

export default MoreMusic;

const style = {
  wrapper1:
    "h-[45vh] md:h-[55vh] moreMusic1 mx-5 md:mx-3 my-4 p-6 md:p-12 flex flex-col items-start justify-end w-[80%] md:w-[23%] hover:scale-[0.9] transition duration-[300ms]",
  wrapper2:
    "h-[45vh] md:h-[55vh] moreMusic2 mx-5 md:mx-3 my-4 p-6 md:p-12 flex flex-col items-start justify-end w-[80%] md:w-[23%] hover:scale-[0.9] transition duration-[300ms]",
  wrapper3:
    "h-[45vh] md:h-[55vh] moreMusic3 mx-5 md:mx-3 my-4 p-6 md:p-12 flex flex-col items-start justify-end w-[80%] md:w-[23%] hover:scale-[0.9] transition duration-[300ms]",
  heading: "font-thin text-2xl md:text-2xl text-white w-[100%] md:w-[80%]",
  para: " text-sm md:text-xl mt-2 text-white font-semibold",
  line: "underline cursor-pointer",
  button:
    "bg-white flex items-center justify-center text-black px-5 md:px-8 py-2 md:py-3 rounded-full mt-7",
  btnText: "bg-white flex items-center justify-center text-black",
};
const SingleCard1 = ({ price, heading, image }) => {
  return (
    <div className={style.wrapper1}>
      <h2 className={style.heading}>{heading}</h2>
      <h2 className={style.para}>{price}</h2>
    </div>
  );
};
const SingleCard2 = ({ price, heading, image }) => {
  return (
    <div className={style.wrapper2}>
      <h2 className={style.heading}>{heading}</h2>
      <h2 className={style.para}>{price}</h2>
    </div>
  );
};
const SingleCard3 = ({ price, heading, image }) => {
  return (
    <div className={style.wrapper3}>
      <h2 className={style.heading}>{heading}</h2>
      <h2 className={style.para}>{price}</h2>
    </div>
  );
};
