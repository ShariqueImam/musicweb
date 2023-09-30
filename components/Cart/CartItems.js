import React from "react";
import { Slide } from "react-awesome-reveal";
const CartItems = () => {
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
      name: "Joehannesburg T-shirt",
      price: 25,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 20,
      img: "/assets/swags/shirt-design2.jpg",
      name: "Joehannesburg T-shirt",
      price: 25,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
  ];
  return (
    <div className="flex flex-col">
      {swagData.map((item) => (
        <Slide
          direction="up"
          triggerOnce
          className="flex items-center justify-center mt-24  z-20 border-b-[1px] border-gray-700 py-12"
        >
          <div className="flex flex-col md:flex-row  ">
            <img
              src="/assets/pink.png"
              alt=""
              className="absolute z-0 ml-[-50rem] mt-[-60rem]"
            />
            <img
              src="/assets/blue.png"
              alt=""
              className="absolute z-0 ml-[50rem] mt-[-60rem]"
            />

            <img
              src={item.img}
              alt=""
              className="rounded-2xl w-64 mx-auto md:w-[24rem]"
            />

            <section className="text-white mx-12 md:mx-24 flex flex-col items-center md:items-start z-30">
              <h2 className="text-3xl md:text-3xl font-thin my-7 md:my-3 text-center md:text-left">
                {item.name}
              </h2>
              <h2 className="font-semibold text-2xl md:text-2xl my-4">
                XS - &#xa3; {item.price}
              </h2>{" "}
              <section className="flex items-center justify-center">
                <p className="py-2 pr-4 text-2xl cursor-pointer">-</p>
                <p className="bg-[#f33c9a] py-2 px-4">1</p>
                <p className="py-2 pl-4 text-2xl cursor-pointer">+</p>
              </section>
              <h2 className="font-semibold text-md md:text-md my-4 cursor-pointer">
                Remove
              </h2>{" "}
            </section>
          </div>
        </Slide>
      ))}
      <button className=" text-white px-12 md:px-16 py-3 md:py-6  z-30 text-2xl border-b-[1px] border-gray-700 cursor-default	">
        Total : <span className="text-[#f33c9a] mx-3">$210</span>
      </button>
      <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-6 my-8  z-30 w-[60%] md:w-auto mx-auto text-xl">
        Checkout!{" "}
      </button>
    </div>
  );
};

export default CartItems;
