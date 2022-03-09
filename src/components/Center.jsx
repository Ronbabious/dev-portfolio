import React from "react";
import About from "./About";
import Education from "./Education";
import Home from "./Home";

const Center = () => {
  return (
    <div className=" text-green-400 overscroll-contain scrollbar-hide">
      <section>
        <Home />
        <About />
        <Education />
      </section>
    </div>
  );
};

export default Center;
