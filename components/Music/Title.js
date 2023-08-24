import React from "react";
const Title = () => {
  return (
    <div className="flex items-center justify-center flex-col w-[100%] md:w-[70%] z-30">
      {" "}
      <div className="musicTitle flex items-center justify-center mt-44 md:mt-32">
        <p className="text-5xl md:text-8xl text-white">Discography</p>
      </div>
      <div className="flex items-center flex-col md:flex-row flex-col-reverse z-30">
        <section className="flex items-center flex-col md:items-start z-30">
          <h2 className="text-5xl md:text-7xl text-white font-semibold w-[70%] text-center md:text-left mx-auto md:mx-0">
            LISTEN IT ON SPOTIFY
          </h2>
          <a href="https://open.spotify.com/artist/0UFMrFPIyckNR4h3WefoJh?si=aCn4WdvFRzaFVwNXEKfQzg&nd=1">
            <button className="exploreBtn text-white px-12 md:px-16 py-3 md:py-4 my-12 md:my-16 mx-auto z-30">
              Listen Now
            </button>
          </a>
        </section>
        
        <img
          src="/assets/music/homeimg.png"
          alt=""
          className="scale-[0.7] w-[90%]"
        />
         <img
          src="/assets/blue.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[10rem]"
        />{" "}
        <img
          src="/assets/pink.png"
          alt=""
          className="w-[100vw] overflow-hidden absolute z-0 md:hidden  ml-[-10rem]"
        />  
      </div>
    </div>
  );
};

export default Title;
