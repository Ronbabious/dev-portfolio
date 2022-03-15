import { AcademicCapIcon } from "@heroicons/react/outline";
import { education, experience } from "./textCollection";
import React from "react";

const IndividualTimeLineElements = (props) => {
  return (
    <div>
      <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-200  rounded-full  ring-black ">
        <AcademicCapIcon class="stroke-icelandBlue" />
      </span>
      <p class="mb-4 text-base font-normal text-gray-500">{props.year}</p>
      <h3 class="flex items-center mb-1 text-lg font-semibold text-zinc-500">
        {props.nameEducation}
      </h3>
      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">
        {props.nameOfPlace}
      </time>
    </div>
  );
};

const TimelineComponent = (props) => {
  return (
    <div className="p-10  bg-gray-200 rounded-lg border">
      <ol class="relative border-l pt-3 border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-6">
          <div>
            <div>
              <IndividualTimeLineElements
                nameEducation={education.masterName}
                nameOfPlace={education.institution}
                year={education.masterYear}
              />
              <IndividualTimeLineElements
                nameEducation={education.bachelorName}
                nameOfPlace={education.institution}
                year={education.bachelorYear}
              />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

const Education = () => {
  return (
    <div class="flex justify-center items-center gap-1 border h-fit max-h-screen">
      <div></div>
      <TimelineComponent />
      <TimelineComponent />
    </div>
  );
};

export default Education;
