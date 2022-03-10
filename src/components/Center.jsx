import React from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Home from "./Home";
import Projects from "./Projects";

const Center = () => {
  return (
    <div className=" text-green-400 overscroll-contain scrollbar-hide">
      <section className="scrollbar-hide">
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
      </section>
    </div>
  );
};

export default Center;
