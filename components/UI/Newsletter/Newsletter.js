import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const Newsletter = () => {
  const style = {
    wrapper: "",
  };
  const [Email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const sendEmail = (e) => {
    let dataToBeSentToEmail = {
      // createdAt: new Date().toISOString(),
      email: Email,
    };
    emailjs
      .send(
        "service_l137cob",
        "template_ktdx5hq",
        dataToBeSentToEmail,
        "wh527Dqrt7Vy8-glV"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="newsletter flex items-center justify-center flex-col my-36">
      <section>
        <img src="/assets/music/mail.png" alt="" className="w-1 scale-[12]" />
      </section>
      <p className="text-white text-lg md:text-2xl my-8 md:my-7 font-thin w-[70%] text-center pt-12">
        Subscribe to get information, Get updates, drops, advance ticket
        information and more direct to your inbox.{" "}
      </p>
      <section className="px-8 md:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center">
        <input
          type="text"
          placeholder="Your Email"
          className="bg-white opacity-[0.5] px-12 px-14 py-2 md:py-3 rounded-xl placeholder:text-black mx-5"
          value={Email}
          onChange={handleEmailChange}
        />
        <button
          className="exploreBtn px-12 px-14 py-2 md:py-3 text-white my-8"
          onClick={() => sendEmail()}
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default Newsletter;
