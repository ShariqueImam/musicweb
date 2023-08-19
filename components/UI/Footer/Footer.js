import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";

const Footer = (props) => {
  const style = {
    wrapper:
      "font text-neutral-100 flex flex-col w-[100%] md:w-[80%] mx-auto items-center justify-between py-6 md:py-12 mt-44",
    para: "font-light border-move-animation list-none cursor-pointer text-white mx-2 md:mx-3  text-md tracking-wide",
  };

  return (
    <div className={style.wrapper}>
      <div className="flex items-start justify-between w-[100%] flex-col md:flex-row items-center md:items-start">
        <section className="flex flex-col items-start justify-center mb-16 md:my-0">
          <img src='/assets/home/logo.png' alt="" />
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
            <a href="/swags">
              <h2 className="font-semibold">Swags</h2>
            </a>{" "}
            <a href="/swags">
              <p className="font-thin my-4">Hoodies</p>
            </a>{" "}
            <a href="/swags">
              <p className="font-thin my-4">Shirts</p>
            </a>{" "}
            <a href="/swags">
              <p className="font-thin my-4">Shorts</p>
            </a>{" "}
            <a href="/swags">
              <p className="font-thin my-4">Polo</p>
            </a>{" "}
            <a href="/swags">
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
        <section className="flex">
          <AiFillInstagram className="text-white text-2xl mx-3" />
          <AiFillFacebook className="text-white text-2xl mx-3" />
          <AiFillYoutube className="text-white text-2xl mx-3" />
          <AiFillLinkedin className="text-white text-2xl mx-3" />
          <BsTiktok className="text-white text-2xl mx-3" />
        </section>
      </div>
    </div>
  );
};

export default Footer;
