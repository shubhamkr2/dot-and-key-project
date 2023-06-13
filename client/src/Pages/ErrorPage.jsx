import React from "react";
import { NavigationBar } from "../Components/NavigationBar";
import { Footer } from "../Components/Footer";

function ErrorPage() {
  return (
    <div style={{maxWidth: "1024px",margin:"auto", backgroundColor:"white"}}>
    <NavigationBar />
    <div style={{  display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img
        style={{ width: "100%", margin: "auto" }}
        src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"
        alt="error"
      />
    </div>
    <Footer />
    </div>
  );
}

export { ErrorPage };
