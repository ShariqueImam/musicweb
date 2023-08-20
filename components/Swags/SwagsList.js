import React from "react";
import SingleCard from "./SingleCard";
import Link from "next/link";
const SwagsList = ({ swagData }) => {
  return (
    <div className="flex flex-wrap w-[100%] md:w-[80%] mx-auto items-center justify-center z-20">
      {/* <img src={blue} alt="" className="absolute z-0 ml-[50rem]" />{" "} */}
      <img
        src="/assets/circle.png"
        alt=""
        className="scale-[0.8] absolute ml-[40rem] z-0"
      />
      <div className="flex flex-wrap w-[100vw] md:w-[95vw] items-center justify-center z-30 ">
        {swagData.map((singleItem) => {
          return (
            <Link href={`/swags/${singleItem.id}`} className="">
              <SingleCard swagData={singleItem} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SwagsList;
