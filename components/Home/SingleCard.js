import React from "react";
import ReactStars from "react-stars";
import styled from "styled-components";
const style = {
  wrapper:
    "z-30 w-[42vw] md:w-[22vw] h-[35vh] md:h-[55vh] rounded-xl z-30 mx-2 md:mx-3 my-16  flex flex-col items-start justify-end hover:scale-[0.95] transition duration-[300ms]",
  heading: "font-thin text-lg md:text-lg text-white w-[100%] md:w-[80%]",
  para: " text-sm md:text-lg mt-0 text-white font-semibold",
  line: "underline cursor-pointer",
};
const SingleCard = ({ img, name, price }) => {
  const FeaturedBackground1 = styled.div`
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
  `;
  return (
    <a href="/swags" className="cursor-pointer hover:scale-[0.9] z-30">
      <FeaturedBackground1 className={style.wrapper}>
        <section className="w-full swagsItem border-t-[1px] border-t-[#F33C9A] p-2 md:px-3 rounded-tr-[20px] rounded-tl-[20px] ">
          <h2 className={style.heading}>{name}</h2>
          <h2 className={style.para}>{price}</h2>
          <ReactStars count={5} size={12} color1={"#ffff00"} edit={false} />
        </section>
      </FeaturedBackground1>
    </a>
  );
};
export default SingleCard;
