import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "next/link";
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
    list1: "flex list-none cursor-pointer  text-neutral-400 my-3  mx-auto md:mx-4 hover:opacity-[0.8] text-sm font-normal",
    input: "bg-transparent mx-4",
  };
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
        <div className="h-[40vh] font flex flex-col my-8  bg-[#0b0b0b] items-center">
          <img src='/assets/home/logo.png' />

          {/* adding the navs */}
          <ul className="flex  flex-col  bg-[#0b0b0b] mt-12">
            <Link to={"/"}>
              <li className={style.list}>Home</li>
            </Link>
            <Link to={"/music"}>
              <li
                className={style.list}
                onClick={() => props.onScroll("services")}
              >
                Music
              </li>
            </Link>
            <Link to={"/swags"}>
              <li
                className={style.list}
                onClick={() => props.onScroll("about")}
              >
                Swags
              </li>
            </Link>
            <Link to={"/horoscope"}>
              <li
                className={style.list}
                onClick={() => props.onScroll("email")}
              >
                Horoscope
              </li>
            </Link>
            <Link to={"/live"}>
              <li
                className={style.list1}
                onClick={() => props.onScroll("email")}
              >
                Live
                <p className="w-2 h-2 bg-red-600 rounded-full"></p>
              </li>
            </Link>
          </ul>
          <a href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh">
            <button
              className="mx-auto exploreBtn text-white px-12 py-2 rounded-lg mt-48 cursor-pointer hover:opacity-[0.9]"
              onClick={() => props.onScroll("contact")}
            >
              Listen Now
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
          <button className=" bg-[#0b0b0b] px-2 py-4 flex items-center justify-between w-[100vw] border-b-[1px]">
            <img src='/assets/home/logo.png' />

            <section className="flex">
              <div className="" onClick={toggleDrawer(anchor, true)}>
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
