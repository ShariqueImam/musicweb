import React from "react";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
import blue from "../../assets/blue.png";
import circle from "../../assets/circle.png";
const SwagsList = ({ swagData }) => {
  return (
    <div className="flex flex-wrap w-[95%] md:w-[80%] mx-auto items-center justify-center z-20">
      {/* <img src={blue} alt="" className="absolute z-0 ml-[50rem]" />{" "} */}
      <img
        src={circle}
        alt=""
        className="scale-[0.8] absolute ml-[40rem] z-0"
      />
      {swagData.map((singleItem) => {
        return (
          <Link to={`/swags/${singleItem.id}`}>
            <div className="flex flex-wrap w-[90vw] md:w-[23vw] items-center justify-center z-30">
              <SingleCard swagData={singleItem} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SwagsList;
