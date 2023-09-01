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
      img: "/assets/swags/shirt-design-4f.jpg",
      name: "Eye Illustration  T-shirt",
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
      img: "/assets/swags/polof.jpg",
      name: "Eye Illustration Blue Polo Shirt",
      price: 50,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 13,
      img: "/assets/swags/Hoodie_Mockup.jpg",
      name: "Sacred Heart Hoodie",
      price: 65,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 14,
      img: "/assets/swags/Hoodie_Mockup1.jpg",
      name: "The Light Hoodie",
      price: 65,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 15,
      img: "/assets/swags/Hoodie_Mockup2.jpg",
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
      img: "/assets/swags/umbrella-final.jpg",
      name: "Eye Illustration Umbrella",
      price: 70,
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
            <h2 className="font-semibold text-5xl md:text-6xl my-4">
              SOLD OUT
            </h2>{" "}
            {/* <h2 className="font-semibold text-5xl md:text-6xl my-4">
              $ {item.price}
            </h2>{" "} */}
            <ReactStars count={5} size={24} color1={"#4E88FA"} edit={false} />
            <section className="flex my-4  z-30">
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
              <p
                onClick={() => setSize("XL")}
                className={`${
                  Size == "XL" && "bg-[#fb2b92] bg-opacity-[0.3]"
                } mr-5  border-[1px] border-[#FB2B92] w-14 h-14 flex items-center justify-center text-white rounded-full text-xl`}
              >
                XL
              </p>
            </section>
            <section className="flex my-4  z-30">
              <p
                onClick={() => setColor("1")}
                className={`${
                  Color == "1" && "bg-yellow-600 "
                } mr-5 ring-2 ring-offset-2  w-8 h-8 flex items-center justify-center text-white rounded-full text-xl`}
              ></p>
              <p
                onClick={() => setColor("2")}
                className={`${
                  Color == "2" && "bg-cyan-500"
                } mr-5  ring-2 ring-offset-2  w-8 h-8 flex items-center justify-center text-white rounded-full text-xl`}
              ></p>
              <p
                onClick={() => setColor("3")}
                className={` ${
                  Color == "3" && "bg-blue-600 "
                } mr-5  ring-2 ring-offset-2  w-8 h-8 flex items-center justify-center text-white rounded-full text-xl`}
              ></p>
              <p
                onClick={() => setColor("4")}
                className={`${
                  Color == "4" && "bg-green-500 "
                } mr-5  ring-2 ring-offset-2  w-8 h-8 flex items-center justify-center text-white rounded-full text-xl`}
              ></p>
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
