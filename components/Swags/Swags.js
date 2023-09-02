import React from "react";
import Title from "../Swags/Title";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import { Slide } from "react-awesome-reveal";
import SwagsList from "./SwagsList";
import Animator from "../UI/Animator";

const Swags = () => {
  const onScroll = () => {};
  const swagData = [
    {
      id: 18,
      img: "/assets/swags/shirt-design-4.jpg",
      name: "Eye Illustration T-shirt",
      price: 30,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 19,
      img: "/assets/swags/shirt-design.jpg",
      name: "Madam And Steve T Shirt",
      price: 30,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 20,
      img: "/assets/swags/shirt-design2.jpg",
      name: "Sacred Heart T Shirt",
      price: 30,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 21,
      img: "/assets/swags/shirt-design3.jpg",
      name: "The Light T Shirt",
      price: 30,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 17,
      img: "/assets/swags/polo-final.jpg",
      name: "Eye Illustration Blue Polo Shirt",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 13,
      img: "/assets/swags/hoodie2.jpg",
      name: "Sacred Heart Hoodie",
      price: 65,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 14,
      img: "/assets/swags/hoodie3.jpg",
      name: "The Light Hoodie",
      price: 65,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 15,
      img: "/assets/swags/hoodie.jpg",
      name: "Madam And Steve Hoodie",
      price: 65,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 16,
      img: "/assets/swags/Hoodie_Mockup4.jpg",
      name: "Eye Illustration Hoodie",
      price: 65,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },

    {
      id: 9,
      img: "/assets/swags/grey-short.jpg",
      name: "Eye Illustration Grey Shorts",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 10,
      img: "/assets/swags/grey-short1.jpg",
      name: "The Light Grey Shorts",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 11,
      img: "/assets/swags/grey-short2.jpg",
      name: "Sacred Heart Grey Shorts",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 12,
      img: "/assets/swags/grey-short3.jpg",
      name: "Madam And Steve Grey Shorts",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 23,
      img: "/assets/swags/grey-shorts-design.jpg",
      name: "Madam And Steve Grey Shorts",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 5,
      img: "/assets/swags/black-shorts-1.jpg",
      name: "Madam And Steve Black Shorts",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 6,
      img: "/assets/swags/black-shorts-2.jpg",
      name: "Sacred Heart Black Shorts",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 7,
      img: "/assets/swags/black-shorts-3.jpg",
      name: "The Light Black Shorts",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 8,
      img: "/assets/swags/black-shorts-4.jpg",
      name: "Eye Illustration Black Shorts",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 24,
      img: "/assets/swags/black-shorts-design.jpg",
      name: "Madam And Steve Grey Shorts",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 1,
      img: "/assets/swags/bag.jpg",
      name: "Madam And Steve Bag",
      price: 20,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 2,
      img: "/assets/swags/bag2.jpg",
      name: "Sacred Heart Bag",
      price: 20,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 3,
      img: "/assets/swags/bag3.jpg",
      name: "The Light Bag",
      price: 20,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 4,
      img: "/assets/swags/bag4.jpg",
      name: "Eye Illustration Bag",
      price: 20,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },

    {
      id: 22,
      img: "/assets/swags/umbrella.jpg",
      name: "Eye Illustration Umbrella",
      price: 70,
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
        <Footer />
      </div>
    </Animator>
  );
};

export default Swags;
