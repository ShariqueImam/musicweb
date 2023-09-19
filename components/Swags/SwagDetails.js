import React, { useState, useEffect } from "react";
import Navbar from "../../components/UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import { Slide } from "react-awesome-reveal";
import { useRouter } from "next/router";
import axios from "axios";
import ReactStars from "react-stars";
import { loadStripe } from "@stripe/stripe-js";
import Title from "./Title";
const SwagDetails = ({ match }) => {
  const [Size, setSize] = useState("S");
  const [Color, setColor] = useState("1");
  const onScroll = () => {};

  // window.scrollTo(0,0)
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
      name: "The Light Hoodie",
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
      name: "The Light Black Shorts",
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
      name: "The Light Grey Shorts",
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
      name: "The Light Bag",
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
  const router = useRouter();
  const { id: params } = router.query;
  let product = swagData[0];
  const [item, setItem] = useState({
    name: "Swags Purchase",
    description: "This is checkout page for Swags",
    // image:
    //   "https://res.cloudinary.com/dwsjylbja/image/upload/v1675514066/logo/logo_colour_h4cmwr.svg",
    quantity: 1,
    price: 100,
  });
  useEffect(() => {
    if (params) {
      product = swagData.find((item) => item.id === parseInt(params));
      setItem(product);
    }
  }, [params]);
  const checkoutStripe = () => {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(`${publishableKey}`);
    const createCheckOutSession = async () => {
      const stripe = await stripePromise;
      const checkoutSession = await axios.post("/api/create-stripe-session", {
        item: item,
      });
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });
      if (result.error) {
        alert(result.error.message);
      }
    };
    createCheckOutSession();
  };
  return (
    <div className="bg-[#0b0b0b] flex flex-col items-center  z-20">
      <Navbar onScroll={onScroll} />
      <Title />
      <Slide
        direction="up"
        triggerOnce
        className="flex items-center justify-center mt-24  z-20"
      >
        <div className="flex flex-col md:flex-row  ">
          {/* <img src={blue} alt="" className="absolute z-0 ml-[20rem] mt-[-40rem]" /> */}
          <img
            src="/assets/pink.png"
            alt=""
            className="absolute z-0 ml-[-50rem] mt-[-60rem]"
          />

          <img
            src={item.img}
            alt=""
            className="rounded-2xl w-64 mx-auto md:w-[24rem]"
          />

          <section className="text-white mx-12 md:mx-24 flex flex-col items-center md:items-start z-30">
            <h2 className="text-4xl md:text-4xl font-thin my-7 md:my-3 text-center md:text-left">
              {item.name}
            </h2>
            <h2 className="font-thin my-4">{item.description}</h2>
            {/* <h2 className="font-semibold text-5xl md:text-6xl my-4">
              SOLD OUT
            </h2>{" "} */}
            <h2 className="font-semibold text-5xl md:text-6xl my-4">
              &#xa3; {item.price}
            </h2>{" "}
            <section className="flex my-4  z-30">
              {" "}
              <p
                onClick={() => setSize("XS")}
                className={`${
                  Size == "XS" && "bg-[#fb2b92] bg-opacity-[0.3]"
                } mr-5  border-[1px] border-[#FB2B92] w-14 h-14 flex items-center justify-center text-white rounded-full text-xl`}
              >
                XS
              </p>
              <p
                onClick={() => setSize("S")}
                className={`${
                  Size == "S" && "bg-[#fb2b92] bg-opacity-[0.3]"
                } mr-5 border-[1px] border-[#FB2B92] w-14 h-14 flex items-center justify-center text-white rounded-full text-xl`}
              >
                S
              </p>
              <p
                onClick={() => setSize("M")}
                className={`${
                  Size == "M" && "bg-[#fb2b92] bg-opacity-[0.3]"
                } mr-5  border-[1px] border-[#FB2B92] w-14 h-14 flex items-center justify-center text-white rounded-full text-xl`}
              >
                M
              </p>
              <p
                onClick={() => setSize("L")}
                className={` ${
                  Size == "L" && "bg-[#fb2b92] bg-opacity-[0.3]"
                } mr-5  border-[1px] border-[#FB2B92] w-14 h-14 flex items-center justify-center text-white rounded-full text-xl`}
              >
                L
              </p>
            </section>
            <section className="flex my-4  z-30">
              <div
                className={`${
                  Color == "1" && "border-2"
                } border-pink-500 rounded-full w-10 h-10  mr-5 flex items-center justify-center`}
              >
                <p
                  onClick={() => setColor("1")}
                  className={`bg-yellow-300 border-[1px] w-8 h-8 flex items-center justify-center text-white rounded-full text-xl`}
                ></p>
              </div>
              <div
                className={`${
                  Color == "3" && "border-2"
                } border-pink-500 rounded-full w-10 h-10  mr-5 flex items-center justify-center`}
              >
                <p
                  onClick={() => setColor("3")}
                  className={`bg-white border-[1px]  w-8 h-8 flex items-center justify-center text-white rounded-full text-xl`}
                ></p>{" "}
              </div>

              <div
                className={`${
                  Color == "4" && "border-2"
                } border-pink-500 rounded-full w-10 h-10  mr-5 flex items-center justify-center`}
              >
                <p
                  onClick={() => setColor("4")}
                  className={` bg-black border-[1px]  w-8 h-8 flex items-center justify-center text-white rounded-full text-xl`}
                ></p>{" "}
              </div>
            </section>
            <button
              className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-4  z-30"
              onClick={() => checkoutStripe()}
            >
              SHOP NOW{" "}
            </button>
          </section>
        </div>
      </Slide>
      <div className="w-[100%] ">
        <Footer />
      </div>
    </div>
  );
};

export default SwagDetails;
