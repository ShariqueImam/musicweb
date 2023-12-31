import React from "react";
import Title from "../Swags/Title";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import { Slide } from "react-awesome-reveal";
import SwagsList from "./SwagsList";
import Animator from "../UI/Animator";
import Featured from "./Featured";
const Swags = () => {
  const onScroll = () => {};
  const swagData = [
    {
      id: 18,
      img: "/assets/swags/shirt-design-4.jpg",
      name: "Joehannesburg T-shirt",
      price: 25,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 19,
      img: "/assets/swags/shirt-design.jpg",
      name: "S2 T Shirt",
      price: 25,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 20,
      img: "/assets/swags/shirt-design2.jpg",
      name: "Rhea Ripley T Shirt",
      price: 25,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 21,
      img: "/assets/swags/shirt-design3.jpg",
      name: "S1 T Shirt",
      price: 25,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 17,
      img: "/assets/swags/polo-final.jpg",
      name: "Joehannesburg Blue Polo Shirt",
      price: 40,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 13,
      img: "/assets/swags/hoodie2.jpg",
      name: "Rhea Ripley Hoodie",
      price: 45,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 14,
      img: "/assets/swags/hoodie3.jpg",
      name: "S1 Hoodie",
      price: 45,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 15,
      img: "/assets/swags/hoodie.jpg",
      name: "S2 Hoodie",
      price: 45,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 16,
      img: "/assets/swags/Hoodie_Mockup4.jpg",
      name: "Joehannesburg Hoodie",
      price: 45,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },

    {
      id: 10,
      img: "/assets/new/3.jpg",
      name: "S1 Black Shorts",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 11,
      img: "/assets/new/2.jpg",
      name: "Rhea Ripley Black Shorts",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 12,
      img: "/assets/new/1.jpg",
      name: "S2 Black Shorts",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 23,
      img: "/assets/new/5.jpg",
      name: "S2 Grey Shorts",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 5,
      img: "/assets/new/6.jpg",
      name: "S1 Grey Shorts",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 6,
      img: "/assets/new/4.jpg",
      name: "Rhea Ripley Grey Shorts",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 51,
      img: "/assets/swags/black-shorts-design.jpg",
      name: "Simple Black Shorts",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 51,
      img: "/assets/swags/grey-shorts-design.jpg",
      name: "Simple Grey Shorts",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },

    {
      id: 1,
      img: "/assets/swags/bag.jpg",
      name: "S2 Bag",
      price: 25,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 2,
      img: "/assets/swags/bag2.jpg",
      name: "Rhea Ripley Bag",
      price: 25,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 3,
      img: "/assets/swags/bag3.jpg",
      name: "S1 Bag",
      price: 25,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 4,
      img: "/assets/swags/bag4.jpg",
      name: "Joehannesburg Bag",
      price: 25,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },

    {
      id: 22,
      img: "/assets/swags/umbrella.jpg",
      name: "Joehannesburg Umbrella",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 100,
      img: "/assets/swags/featured/1.jpeg",
      name: "PYKRETE RECORDS T-SHIRT",
      price: 40,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 101,
      img: "/assets/swags/featured/33.png",
      name: "F3 LOGO T-SHIRT",
      price: 40,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 102,
      img: "/assets/swags/featured/22.png",
      name: "F3 LOGO SHORTS",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 103,
      img: "/assets/swags/featured/44.png",
      name: "F3 LOGO T-SHIRT",
      price: 40,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 104,
      img: "/assets/swags/featured/55.png",
      name: "F3 LOGO SHORTS",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
  ];
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
  return (
    <Animator>
      <div className="bg-[#0b0b0b] flex flex-col items-center z-30">
        <img
          src="/assets/pink.png"
          alt=""
          className="absolute z-0 md:ml-[-70rem]"
        />
        <img
          src="/assets/pink.png"
          alt=""
          className="absolute z-0 md:ml-[-70rem] mt-[180rem]"
        />
        <img
          src="/assets/blue.png"
          alt=""
          className="absolute z-0 md:ml-[50rem] mt-[60rem]"
        />{" "}
        <div className="z-20 w-[100%] flex items-center justify-center mt-16">
          <Navbar onScroll={onScroll} />
        </div>
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center w-[100%] h-[100%] z-10"
        >
          <Title />
        </Slide>
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center w-[100%] h-[100%] z-20"
        >
          <SwagsList swagData={swagData} />
        </Slide>
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center w-[100%] h-[100%] z-30"
        >
          <Featured />
        </Slide>
        <img
          src="/assets/blue.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden  md:ml-[50rem]"
        />{" "}
        <img
          src="/assets/circle2.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-80rem] mt-[-10rem]"
        />
        <img
          src="/assets/pink.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden md:ml-[-70rem]"
        />
        <div className="z-20 w-[100%]">
          <Footer />
        </div>
      </div>
    </Animator>
  );
};

export default Swags;
