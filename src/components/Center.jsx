import React from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Home from "./Home";
import Projects from "./Projects";
import Temp from "./Temp";

const Center = () => {
  return (
    <div className="overscroll-contain scrollbar-hide">
      <section className="scrollbar-hide">
        <Home />
        <Temp />

        {/*         <About />
        <Education />
        <Projects />
        <Contact /> */}
      </section>
    </div>
  );
};

export default Center;
