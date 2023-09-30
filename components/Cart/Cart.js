import React from "react";
import Animator from "../UI/Animator";
import Footer from "../UI/Footer/Footer";
import Navbar from "../UI/Navbar/Navbar";
import Image from "next/image";
import CartItems from "./CartItems";
const Cart = () => {
  const onScroll = () => {};
  return (
    <div>
      <Animator>
        <div className="flex flex-col items-center bg-[#0b0b0b] z-10 ">
          <div className="flex items-center justify-center mt-20 z-30">
            <Navbar onScroll={onScroll} />
          </div>
          <div className="flex items-center justify-center flex-col w-[100%] md:w-[70%] z-20">
            <div className="cartTitle flex items-center justify-center mt-44 md:mt-32">
              <p className="text-5xl md:text-8xl text-white edgy">Cart</p>
            </div>
          </div>
          <CartItems />
          <div className="w-[100%] z-10">
            <Footer />
          </div>
        </div>
      </Animator>
    </div>
  );
};

export default Cart;
