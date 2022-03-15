import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChatIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/outline";

const buttonCss = "flex items-center space-x-2 py-1 hover:text-icelandBlue";

const SidebarItems = () => {
  return (
    <div className="space-y-2 text-black smooth-scroll">
      <a href="#home">
        <div>
          <button className={buttonCss}>
            <HomeIcon className="h-5 w-5" />
            <p>Home</p>
          </button>
        </div>
      </a>
      <a href="#about">
        <button className={buttonCss}>
          <UserIcon className="h-5 w-5" />
          <p>About</p>
        </button>
      </a>
      <a href="#education">
        <button className={buttonCss}>
          <AcademicCapIcon className="h-5 w-5" />
          <p>Education</p>
        </button>
      </a>
      <a href="#projects">
        <button className={buttonCss}>
          <BriefcaseIcon className="h-5 w-5" />
          <p>Projects</p>
        </button>
      </a>
      <a href="#contact">
        <button className={buttonCss}>
          <ChatIcon className="h-5 w-5" />
          <p>Contact</p>
        </button>
      </a>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div>
      <div
        name="Logo-Image"
        className="flex justify-center items-center border-r-[1px]"
      >
        <img src="./src/images/logo.svg" className="pt-5 h-32 w-32 "></img>
      </div>
      <div
        name="Sidebar"
        className="flex flex-col h-screen pb-[128px] justify-center items-center border-r-[1px]"
      >
        <div name="Sidebar-Container">
          <div className="text-xl">
            <SidebarItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
