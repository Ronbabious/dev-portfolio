import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChatIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/outline";

const buttonCss = "flex items-center space-x-2 hover:text-icelandBlue"

const SidebarItems = () => {
  return (
    <div className="space-y-2 text-black">
      <div>
        <button className={buttonCss}>
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
      </div>
      <button className={buttonCss}>
        <UserIcon className="h-5 w-5" />
        <p>About</p>
      </button>
      <button className={buttonCss}>
        <AcademicCapIcon className="h-5 w-5" />
        <p>Education</p>
      </button>
      <button className={buttonCss}>
        <BriefcaseIcon className="h-5 w-5" />
        <p>Projects</p>
      </button>
      <button className={buttonCss}>
        <ChatIcon className="h-5 w-5" />
        <p>Contact</p>
      </button>
    </div>
  );
}

const Sidebar = () => {
  return (
    <div name="Sidebar" className="border-r-[1px]">
      <div name="Sidebar-Container" className="flex flex-col justify-center items-center">
        <div name="Logo-Image">
          <img src="./src/images/logo.svg" className="pt-5 h-32 w-32 "></img>
        </div>
        <div name="Space" className="pt-40"></div>
        <SidebarItems />
      </div>
    </div>
  );
}

export default Sidebar;
