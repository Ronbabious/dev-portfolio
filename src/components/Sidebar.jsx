import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChatIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="border-r-[1px]">
      <div className="pt-5 h-20 w-20 flex justify-content items-center">
        <img src="./src/images/logo.svg"></img>
      </div>
      <div className="text-icelandBlue flex flex-grow border-gray-600 text-white text-gray-500 p-5 text-xl  flex border-gray-500 overflow-y-auto scrollbar-hide h-screen items-center justify-center">
        <div className="space-y-2">
          <div>
            <button className="flex items-center space-x-2 hover:text-white">
              <HomeIcon className="h-5 w-5" />
              <p>Home</p>
            </button>
          </div>
          <button className="flex items-center space-x-2 hover:text-white">
            <UserIcon className="h-5 w-5" />
            <p>About</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <AcademicCapIcon className="h-5 w-5" />
            <p>Education</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <BriefcaseIcon className="h-5 w-5" />
            <p>Projects</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <ChatIcon className="h-5 w-5" />
            <p>Contact</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
