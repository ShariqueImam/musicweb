import React from "react";
const Upcoming = () => {
  const [Up1, setUp1] = React.useState(false);
  const [Up2, setUp2] = React.useState(false);
  return (
    <div className="z-20">
      <img src="/assets/pink.png" alt="" className="absolute z-0 ml-[-10rem]" />
      
      <div className="upcomingTitle flex items-center justify-center z-20">
        <p className="text-4xl md:text-8xl text-white edgy">Upcoming Music</p>
      </div>{" "}
      <div className="z-20 flex items-center justify-center flex items-center justify-center flex-col md:flex-row">
        <div
          onMouseEnter={() => setUp1(true)}
          onMouseLeave={() => setUp1(false)}
          className="z-20 upcomingBg1  flex items-center justify-center flex flex-col hover:scale-[0.9] w-[80vw] md:w-[25vw]"
        >
          <p className=" borderColor border-2 w-[60vw] md:w-[15vw] h-[50vh] rounded-full "></p>
          <img src="/assets/music/lock.png" alt="" className="scale-[8] w-2" />
          {Up1 && (
            <p className="text-white fixed text-xl bg-gray-300 rounded-xl p-2 imgHoverText">
              Available Soon
            </p>
          )}
        </div>
        {" "}
      <img src='/assets/blue.png' alt="" className="absolute z-0 md:hidden ml-[10rem] md:ml-[50rem]" />{" "}
      <img src='/assets/circle2.png' alt="" className="absolute z-0 md:hidden md:ml-[-80rem] mt-[-10rem]" />
      <img src='/assets/pink.png' alt="" className="absolute z-0 md:hidden md:ml-[-70rem]" />
        <div
          onMouseEnter={() => setUp2(true)}
          onMouseLeave={() => setUp2(false)}
          className="z-20 upcomingBg2  flex items-center justify-center flex flex-col hover:scale-[0.9] w-[80vw] md:w-[25vw]"
        >
          {" "}
          <p className=" borderColor border-2 w-[60vw] md:w-[15vw] h-[50vh] rounded-full "></p>{" "}
          {Up2 && (
            <p className="text-white fixed text-xl bg-gray-300 rounded-xl p-2 imgHoverText">
              Available Soon
            </p>
          )}
          <img src="/assets/music/lock.png" alt="" className="scale-[8] w-2" />
          
        </div>
      </div>
      
    </div>
  );
};

export default Upcoming;
