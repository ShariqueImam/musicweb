import React, { useState } from "react";
import ReactStars from "react-stars";
import styled from "styled-components";
const style = {
  wrapper:
    "z-40 w-[80vw] md:w-[22vw] h-[50vh] md:h-[55vh] rounded-xl z-30 mx-2 md:mx-3 my-16  flex flex-col items-center justify-end hover:scale-[0.95] transition duration-[300ms] cursor-pointer",
  heading: "font-thin text-md md:text-md text-white w-[100%] md:w-[80%]",
  para: " text-sm md:text-lg mt-0 text-white font-semibold",
  line: "underline cursor-pointer",
};
const SingleCard = ({ img, name, price }) => {
  const FeaturedBackground1 = styled.div`
    background: url(${img});
    // background: linear-gradient(
    //     to bottom,
    //     rgba(0, 0, 0, 0.86),
    //     rgba(0, 0, 0, 0.86)
    //   ),
    //   url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    z-index: 30;
  `;
  const [Entered, setEntered] = useState(false);

  return (
    <a
      href="/swags"
      className="cursor-pointer z-40 flex items-center justify-center "
    >
      <FeaturedBackground1
        className={style.wrapper}
        onMouseEnter={() => setEntered(true)}
        onMouseLeave={() => setEntered(false)}
      >
        {/* <p className=" borderColor border-2 w-[60vw] md:w-[15vw] h-[50vh] rounded-full relative"></p>{" "}
        <img
          src="/assets/music/lock.png"
          alt=""
          className="scale-[8] w-2 z-20"
        />
        {Entered && (
          <p className="text-white fixed mb-[60%] text-xl bg-gray-300 rounded-xl p-2 imgHoverText">
            SOLD OUT
          </p>
        )} */}
        <section className="w-full swagsItem border-t-[1px] border-t-[#F33C9A] p-2 md:px-3 rounded-tr-[20px] rounded-tl-[20px] ">
          <h2 className={style.heading}>{name}</h2>
          {/* <h2 className={style.para}>SOLD OUT</h2> */}
          <h2 className={style.para}> &#xa3; {price}</h2>
          <ReactStars count={5} size={12} color1={"#ffff00"} edit={false} />
        </section>
      </FeaturedBackground1>
    </a>
  );
};
export default SingleCard;
