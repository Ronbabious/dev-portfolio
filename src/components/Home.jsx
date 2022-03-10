import { parallax1, parallax2 } from "./parallax";
import React from "react";
import { HomeIcon } from "@heroicons/react/outline";

const Home = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-1 border h-screen max-h-screen">
      <div class="h-60 w-60 ">
        <img src="./src/images/profilephoto.jpg" class="rounded-full"></img>
      </div>
      <div class="text-center text-4xl font-bebasN ">
        <p>Hello, My Name is Aron</p>
      </div>
      <div class="text-center  ">
        <HomeIcon class="h-4 w-4" />
      </div>
    </div>
    /*       <p>This is where main content is</p>
      <img className="" src="/src/images/developer.jpg" />
      <div>Text on images</div> */
  );
};

export default Home;
