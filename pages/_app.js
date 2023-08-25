import "../styles/globals.css";
import React, { useState } from "react";
// import HttpsRedirect from "react-https-redirect";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="overflow-x-hidden bg-[#0b0b0b] w-[100vw] relative">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
