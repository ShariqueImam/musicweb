import React from "react";
import Title from "../Swags/Title";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import { Slide } from "react-awesome-reveal";
import SwagsList from "./SwagsList";
import Animator from "../UI/Animator";
import swagImg1 from "../../assets/swags/swags.png";
import pink from "../../assets/pink.png";
import blue from "../../assets/blue.png";
import circle from "../../assets/circle.png";
const Swags = () => {
  const onScroll = () => {};
  const swagData = [
    {
      id: 1,
      img: "/assets/swags/bag.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 2,
      img: "/assets/swags/bag2.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 3,
      img: "/assets/swags/bag3.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 4,
      img: "/assets/swags/bag4.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 5,
      img: "/assets/swags/black-shorts-1.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 6,
      img: "/assets/swags/black-shorts-2.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 7,
      img: "/assets/swags/black-shorts-3.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 8,
      img: "/assets/swags/black-shorts-4.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 9,
      img: "/assets/swags/grey-short.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 10,
      img: "/assets/swags/grey-short1.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 11,
      img: "/assets/swags/grey-short2.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 12,
      img: "/assets/swags/grey-short3.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 13,
      img: "/assets/swags/Hoodie_Mockup.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 14,
      img: "/assets/swags/Hoodie_Mockup1.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 15,
      img: "/assets/swags/Hoodie_Mockup2.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 16,
      img: "/assets/swags/Hoodie_Mockup4.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 17,
      img: "/assets/swags/polof.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 18,
      img: "/assets/swags/shirt-design-4f.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 19,
      img: "/assets/swags/shirt-design.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 20,
      img: "/assets/swags/shirt-design2.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 21,
      img: "/assets/swags/shirt-design3.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
    {
      id: 22,
      img: "/assets/swags/umbrella-final.jpg",
      name: "Green Hoodie",
      price: "$70",
      rating: "5",
      info: "This is the great product and we like it.",
    },
  ];
  window.scrollTo(0, 0);
  return (
    <Animator>
      <div className="bg-[#0b0b0b] flex flex-col items-center z-10">
        <img src={pink} alt="" className="absolute z-0 ml-[-70rem]" />
        <img
          src={pink}
          alt=""
          className="absolute z-0 ml-[-70rem] mt-[180rem]"
        />
        <img src={blue} alt="" className="absolute z-0 ml-[50rem] mt-[60rem]" />{" "}
        <Navbar onScroll={onScroll} />
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center w-[100%] h-[100%]"
        >
          <Title />
        </Slide>
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center w-[100%] h-[100%]"
        >
          <SwagsList swagData={swagData} />
        </Slide>
        <Footer />
      </div>
    </Animator>
  );
};

export default Swags;
