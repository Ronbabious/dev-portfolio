import { parallax1, parallax2 } from "./parallax";
import React from "react";

const Home = () => {
  return (
    <div class="static content-center p-5 flex flex-col items-center border h-screen max-h-screen align-items-center">
      <div class="inline-block w-40 h-40 p-0 w-96 h-96 border align-center">
        <p>Hello, My Name is Aron</p>
      </div>
      <div class="inline-block ">{parallax1}</div>
      {/*       <p>This is where main content is</p>
      <img className="" src="/src/images/developer.jpg" />
      <div>Text on images</div> */}
    </div>
  );
};

export default Home;
