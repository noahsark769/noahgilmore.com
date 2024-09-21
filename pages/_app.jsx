import "../src/global.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  console.log("MyApp rendering")
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
