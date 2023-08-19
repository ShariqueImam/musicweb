import React from "react";
import styled from "styled-components";
import img from "../../assets/swags/heading.png";
import img1 from "../../assets/music/homeimg.png";
const Title = () => {
  const AboutHeading = styled.div`
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 40vh;
    width: 70vw;
    transform: scale(0.5);
  `;

  return (
    <div className="flex items-center justify-center flex-col w-[100%] md:w-[70%]">
      {" "}
      <AboutHeading className="flex items-center justify-center mt-24 md:mt-32">
        <p className="text-6xl md:text-8xl text-white">Swags</p>
      </AboutHeading>
    </div>
  );
};

export default Title;
