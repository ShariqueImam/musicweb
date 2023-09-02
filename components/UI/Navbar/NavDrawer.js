import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "next/link";
import client from "../../../pages/api/client";
import useWindowSize from "../../../hooks/useWindowSize";
const NavDrawer = (props) => {
  const { width } = useWindowSize();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const style = {
    list: "list-none cursor-pointer  text-neutral-400 my-3  mx-auto md:mx-4 hover:opacity-[0.8] text-sm font-normal",
    list1:
      "flex list-none cursor-pointer  text-neutral-400 my-3  mx-auto md:mx-4 hover:opacity-[0.8] text-sm font-normal",
    input: "bg-transparent mx-4",
  };
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
  const list = (anchor) => (
    <Box
      sx={{
        zIndex: "0",
        color: "rgb(255,255,255)",
        backgroundColor: " #0b0b0b",

        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : width < 500
            ? 240
            : width > 500 && width < 1000
            ? 380
            : 350,
        height: 1200,
        letterSpacing: "1px",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="h-[40vh] font flex flex-col my-8  bg-[#0b0b0b] items-center w-[50vw] md:w-auto">
          <img src="/assets/white.svg" className="w-[10%] md:w-[45%]" />

          {/* adding the navs */}
          <ul className="flex  flex-col  bg-[#0b0b0b] mt-12">
            <Link href={"/"}>
              <li className={style.list}>Home</li>
            </Link>
            <Link href={"/music"}>
              <li
                className={style.list}
                onClick={() => props.onScroll("services")}
              >
                Music
              </li>
            </Link>
            <Link href={"/shop"}>
              <li
                className={style.list}
                onClick={() => props.onScroll("about")}
              >
                Shop
              </li>
            </Link>
            <Link href={"/horoscope"}>
              <li
                className={style.list}
                onClick={() => props.onScroll("email")}
              >
                Elle Zodiac
              </li>
            </Link>
            <Link href={"/live"}>
              <li
                className={style.list1}
                onClick={() => props.onScroll("email")}
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
          <a href="mailto:purplesixtysix6@gmail.com">
            <button
              className="mx-auto exploreBtn text-white px-12 py-2 rounded-lg mt-48 cursor-pointer hover:opacity-[0.9]"
              onClick={() => props.onScroll("contact")}
            >
              Leave a Message
            </button>
          </a>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {/* below string will set the location of the drawer */}
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className=" px-2  flex items-center justify-between w-[90vw] ">
            <img src="/assets/white.svg" className="w-[20%] md:w-[5%] " />
            <section className="flex">
              <div className="z-0" onClick={toggleDrawer(anchor, true)}>
                {
                  <svg
                    viewBox="0 0 100 80"
                    width="30"
                    height="20"
                    style={{ fill: "#fff" }}
                  >
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                  </svg>
                }
              </div>
            </section>
          </button>
          <div className="">
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              hideBackdrop={false}
              style={{
                zIndex: 20,
              }}
            >
              {list(anchor)}
            </Drawer>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavDrawer;
