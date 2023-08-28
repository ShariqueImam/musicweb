import { AiFillInstagram, AiFillYoutube, AiFillApple } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { PiTidalLogoFill } from "react-icons/pi";
import { BsTiktok } from "react-icons/bs";
import { BiLogoSnapchat } from "react-icons/bi";

const Footer = (props) => {
  const style = {
    wrapper:
      " font text-neutral-100 flex flex-col w-[100%] md:w-[80%] mx-auto items-center justify-between py-6 md:py-12 mt-44 z-30",
    para: "font-light border-move-animation list-none cursor-pointer text-white mx-2 md:mx-[0.3rem] md:mx-3  text-md tracking-wide",
  };

  return (
    <div className={style.wrapper}>
      <img
        src="/assets/blue.png"
        alt=""
        className="w-[100vw] overflow-hidden absolute z-0 md:h-[80vh]  ml-[10rem] mt-[-30rem]"
      />{" "}
      <img
        src="/assets/pink.png"
        alt=""
        className="w-[100vw] overflow-hidden absolute z-0 md:h-[80vh]  ml-[-10rem] mt-[-30rem]"
      />
      <div className="flex items-start justify-between w-[100%] flex-col md:flex-row items-center md:items-start  z-30">
        <section className="flex flex-col items-start justify-center mb-16 md:my-0">
          <img src="/assets/home/logo.png" alt="" />
        </section>
        <div className="flex text-xs md:text-lg w-full md:w-[80%] items-around justify-around">
          <section>
            <a href="/">
              <h2 className="font-semibold">Home</h2>
            </a>
            <a href="/">
              <p className="font-thin my-4">About</p>
            </a>
            <a href="/">
              <p className="font-thin my-4">Music Album</p>
            </a>{" "}
            <a href="/">
              <p className="font-thin my-4">Wedrobe</p>
            </a>
          </section>
          <section className="">
            <a href="/music">
              <h2 className="font-semibold">Music</h2>
            </a>{" "}
            <a href="/music">
              <p className="font-thin my-4">Featured</p>
            </a>{" "}
            <a href="/music">
              <p className="font-thin my-4">Upcoming</p>
            </a>{" "}
            <a href="/music">
              <p className="font-thin my-4">Wedrobe</p>
            </a>
          </section>
          <section>
            <a href="/shop">
              <h2 className="font-semibold">Shop</h2>
            </a>{" "}
            <a href="/shop">
              <p className="font-thin my-4">Hoodies</p>
            </a>{" "}
            <a href="/shop">
              <p className="font-thin my-4">Shirts</p>
            </a>{" "}
            <a href="/shop">
              <p className="font-thin my-4">Shorts</p>
            </a>{" "}
            <a href="/shop">
              <p className="font-thin my-4">Polo</p>
            </a>{" "}
            <a href="/shop">
              <p className="font-thin my-4">Umbrella</p>
            </a>
          </section>
          <section>
            <a href="/horoscope">
              <h2 className="font-semibold">Horoscope</h2>
            </a>{" "}
            <a href="/horoscope">
              <p className="font-thin my-4">Horoscope</p>
            </a>
          </section>
          <section>
            <a href="/live">
              <h2 className="font-semibold">Live</h2>
            </a>{" "}
            <a href="/live">
              <p className="font-thin my-4">Live</p>
            </a>
          </section>
        </div>
      </div>
      <div className="mt-16 flex items-center justify-between w-[100%] flex-col md:flex-row">
        <h2 className="my-3 md:my-1">
          All rights reserved @mysteriousmusic.co.uk
        </h2>
        <section className="flex items-center justify-center">
          <a href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh">
            <BsSpotify className="text-white text-2xl mx-[0.3rem] md:mx-3" />
          </a>
          <a href="https://music.apple.com/gb/artist/tmjuelz/1234991292">
            <AiFillApple className="text-white text-2xl mx-[0.3rem] md:mx-3" />
          </a>
          <a href="https://tidal.com/artist/16021686">
            <PiTidalLogoFill className="text-white text-2xl mx-[0.3rem] md:mx-3" />
          </a>
          <a href="https://www.youtube.com/@TMJuelzAnimalSafari">
            <AiFillYoutube className="text-white text-2xl mx-[0.3rem] md:mx-3" />
          </a>
          <a href="https://www.tiktok.com/@tmjuelz555?_t=8fBRDPznqQT&_r=1">
            <BsTiktok className="text-white text-2xl mx-[0.3rem] md:mx-3" />
          </a>
          <a href="https://www.instagram.com/lordegothicyoute/?igshid=MzRlODBiNWFlZA%3D%3D">
            <AiFillInstagram className="text-white text-2xl mx-[0.3rem] md:mx-3" />
          </a>
          <a href="https://www.snapchat.com/add/tmjuelz?share_id=eMzsauUBmSQ&locale=en-US">
            <BiLogoSnapchat className="text-white text-2xl mx-[0.3rem] md:mx-3" />
          </a>
          <a href="https://twitter.com/lordeGoth" className="flex items-center justify-start">
            <img src="/assets/xx.png" alt="" className="w-10 flex items-center justify-start" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Footer;
