import React from "react";
const Upcoming = () => {
  

  const [Up1, setUp1] = React.useState(false);
  const [Up2, setUp2] = React.useState(false);
  return (
    <div>
      <div className="upcomingTitle flex items-center justify-center">
        <p className="text-6xl md:text-8xl text-white">Upcoming Music</p>
      </div>{" "}
      <div className="flex items-center justify-center ">
        <div
          onMouseEnter={() => setUp1(true)}
          onMouseLeave={() => setUp1(false)}
          className="upcomingBg1  flex items-center justify-center flex flex-col hover:scale-[0.9]"
        >
          <p className=" borderColor border-2 w-[15vw] h-[50vh] rounded-full "></p>
          <img src='/assets/music/lock.png' alt="" className="scale-[8] w-2" />
          {Up1 && (
            <p className="text-white fixed text-xl bg-gray-300 rounded-xl p-2 imgHoverText">
              Available Soon
            </p>
          )}
        </div>
        <div 
          onMouseEnter={() => setUp2(true)}
          onMouseLeave={() => setUp2(false)}
          className="upcomingBg2  flex items-center justify-center flex flex-col hover:scale-[0.9]"
        >
          {" "}
          <p className=" borderColor border-2 w-[15vw] h-[50vh] rounded-full "></p>{" "}
          {Up2 && (
            <p className="text-white fixed text-xl bg-gray-300 rounded-xl p-2 imgHoverText">
              Available Soon
            </p>
          )}
          <img src='/assets/music/lock.png' alt="" className="scale-[8] w-2" />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
