import React, { useState, useEffect } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import client from "../../../pages/api/client";
import NavDrawer from "./NavDrawer";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "animate.css";
const Navbar = (props) => {
  const style = {
    wrapper:
      "text-gray-900  md:py-6 w-[100%] md:w-[85%] bg-opacity-[0.9] mx-auto  font absolute ",
    navDrawer: "flex sm:hidden items-center text-white",
    mainNav:
      "flex items-center justify-between py-1 md:py-1 hidden sm:flex w-[100%] md:w-[90%] mx-auto",
    navList: "w-[60%] flex items-center justify-center ",
    list: "font-light border-move-animation list-none cursor-pointer text-white mx-4 md:mx-4  text-md tracking-wide",
    navContainer: "flex items-center justify-center",
    cartButton:
      "contactHover contactNow border-gradient-purple  border w-[15%] font-light rounded-lg text-white tracking-wider flex items-center justify-center mx-5 px-3 py-2 text-md",
    img: "cursor-pointer w-[15%] md:w-[25%]",
    input: "bg-transparent text-white cursor-pointer",
  };
  const [Item, setItem] = useState("home");
  const [Live, setLive] = useState(Boolean);
  useEffect(() => {
    const getProduct = async () => {
      const youtubeLink = await client.fetch(`*[_type=='youtube']`);
      if (youtubeLink && youtubeLink.length > 0) {
        setLive(youtubeLink[0].live);
      }
    };
    getProduct();
  }, []);
  props.onScroll(Item);
  const handleScroll = (val) => {
    setItem(val);
  };
  const pathname = usePathname();

  return (
    // install the mui first for the Navdrawer
    <div className={style.wrapper}>
      <nav className={style.mainNav}>
        <div className={style.img}>
          <img
            src="/assets/white.svg"
            alt="logo for website"
            className={style.img}
          />
        </div>
        <div className={style.navList}>
          <ul className={style.navContainer}>
            <Link href="/">
              <li
                className={`${
                  pathname == "/" ? "text-[#EA2587]" : "text-white"
                } font-light border-move-animation list-none cursor-pointer mx-4 md:mx-4  text-md tracking-wide`}
              >
                Home
              </li>
            </Link>
            <Link href="/music">
              <li
                className={`${
                  pathname == "/music" ? "text-[#EA2587]" : "text-white"
                } font-light border-move-animation list-none cursor-pointer mx-4 md:mx-4  text-md tracking-wide`}
                onClick={() => setItem("services")}
              >
                Music
              </li>
            </Link>
            <Link href="/shop">
              <li
                className={`${
                  pathname == "/swags" ? "text-[#EA2587]" : "text-white"
                } font-light border-move-animation list-none cursor-pointer mx-4 md:mx-4  text-md tracking-wide`}
                onClick={() => setItem("about")}
              >
                Shop
              </li>
            </Link>
            <Link href="/horoscope">
              <li
                className={`${
                  pathname == "/horoscope" ? "text-[#EA2587]" : "text-white"
                } font-light border-move-animation list-none cursor-pointer mx-4 md:mx-4  text-md tracking-wide`}
                onClick={() => setItem("email")}
              >
                Horoscope
              </li>
            </Link>
            <Link href="/live">
              <li
                className={`${
                  pathname == "/live" ? "text-[#EA2587]" : "text-white"
                } flex font-light  list-none cursor-pointer mx-4 md:mx-4  text-md tracking-wide`}
                onClick={() => setItem("email")}
              >
                Live
                <p
                  className={`w-2 h-2 ${
                    Live ? "bg-red-700" : "bg-red-400"
                  } rounded-full`}
                ></p>
              </li>
            </Link>
          </ul>
        </div>
        <button className={style.cartButton} onClick={() => setItem("contact")}>
          <a href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh">
            Listen Now
          </a>
        </button>
      </nav>
      <div className={style.navDrawer}>
        <NavDrawer onScroll={handleScroll} />
      </div>
    </div>
  );
};

export default Navbar;
