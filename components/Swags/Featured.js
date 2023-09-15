import React from "react";
import SingleCard from "./SingleCard";
import Link from "next/link";
const Featured = () => {
  const featuredData = [
    {
      id: 100,
      img: "/assets/swags/featured/1.jpeg",
      name: "PYKRETE RECORDS T-SHIRT",
      price: 40,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 101,
      img: "/assets/swags/featured/2.jpeg",
      name: "F3 LOGO T-SHIRT",
      price: 40,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
    {
      id: 102,
      img: "/assets/swags/featured/3.jpeg",
      name: "F3 LOGO SHORTS",
      price: 35,
      rating: "5",
      quantity: 1,
      description: "This is the great product and we like it.",
    },
  ];
  return (
    <div className="z-30">
      {" "}
      <div className="c swagsHeadingFeatured flex items-center justify-center mt-44 md:mt-32">
        <p className="text-4xl md:text-8xl text-white edgy">
          Featured Products
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Link href={`/shop/${featuredData[0].id}`} className="">
          <SingleCard swagData={featuredData[0]} />
        </Link>
        <Link href={`/shop/${featuredData[1].id}`} className="">
          <SingleCard swagData={featuredData[1]} />
        </Link>
        <Link href={`/shop/${featuredData[2].id}`} className="">
          <SingleCard swagData={featuredData[2]} />
        </Link>
      </div>
    </div>
  );
};

export default Featured;
