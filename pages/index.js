import Head from "next/head";
import React, { useState, useEffect } from "react";
import Animator from "../components/UI/Animator";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";
import client from "../pages/api/client";
import Home from "../components/Home/Home";
export default function Main() {
  const onScroll = (value) => {
    if (typeof window !== "undefined") {
      // browser code
      scroller.scrollTo(`${value}`, {
        duration: 900,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <Animator>
      <div className="">
        <Home />
      </div>
    </Animator>
  );
}
// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
