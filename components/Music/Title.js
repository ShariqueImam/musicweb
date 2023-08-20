import React from "react";
const Title = () => {
  return (
    <div className="flex items-center justify-center flex-col w-[100%] md:w-[70%]">
      {" "}
      <div className="musicTitle flex items-center justify-center mt-44 md:mt-32">
        <p className="text-5xl md:text-8xl text-white">My Music</p>
      </div>
      <div className="flex items-center flex-col md:flex-row flex-col-reverse">
        <section className="flex items-center flex-col md:items-start">
          <h2 className="text-5xl md:text-7xl text-white font-semibold w-[70%] text-center md:text-left mx-auto md:mx-0">
            LISTEN IT ON SOUND CLOUD{" "}
          </h2>
          <a href="https://soundcloud.com/tmjuelz">
            <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-12 md:my-16 mx-auto ">
              Listen Now
            </button>
          </a>
        </section>
        <img src='/assets/music/homeimg.png' alt="" className="scale-[0.7] w-[90%]" />
      </div>
    </div>
  );
};

export default Title;
