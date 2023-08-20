import React from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
const Title = () => {
  const style = {
    white: "homeTextWhite m-1 text-5xl md:text-8xl",
    color: "homeTextColor m-1 text-5xl md:text-8xl",
  };
  return (
    <div className="bg1">
      <div className="flex items-center justify-center h-full mx-auto flex-col">
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center"
        >
          <div className="flex-wrap w-[80%] md:w-[60%] flex items-center justify-center">
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Let
            </p>
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              The
            </p>
            <p
              className={style.color}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Music
            </p>
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Ignite
            </p>
            <p
              className={style.white}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Your
            </p>
            <p
              className={style.color}
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Imagination
            </p>
          </div>
          <Link href="/music">
            <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-12">
              Explore No
            </button>
          </Link>
        </Slide>
      </div>
    </div>
  );
};

export default Title;
