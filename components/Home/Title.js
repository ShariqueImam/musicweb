import React from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
const Title = () => {
  const style = {
    white: "homeTextWhite m-1 text-4xl md:text-7xl",
    color: "homeTextColor m-1 text-4xl md:text-7xl",
  };
  return (
    <div className="bg1">
      <div className="flex items-center justify-center h-full mx-auto flex-col">
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center"
        >
          <div className="flex-wrap w-[80%] md:w-[60%] flex items-center justify-center my-5 ">
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Mysterious
            </p>
            <p className={style.color}>Music</p>
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              It's
            </p>
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Like
            </p>
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              A
            </p>
            <p className={style.color}>Blessing</p>{" "}
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              And
            </p>{" "}
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              A
            </p>{" "}
            <p className={style.color}>Reward</p>{" "}
          </div>
          <Link href="/music">
            <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-12">
              Explore Now
            </button>
          </Link>
        </Slide>
      </div>
    </div>
  );
};

export default Title;
