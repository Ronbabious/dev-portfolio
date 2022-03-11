import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="pt-8">
      <div class="w-full bg-gray-200 h-3 mb-6 rounded-full">
        <div class="bg-blue-500 h-3 rounded-full" style={{ width: props.percentage }}></div>
      </div>
    </div>
  );
};

const SkillItems = ({ text1, text2, barPercentage}) => {
  return (
    <div name="progressWrapper">
      <div name="SkillItems">
        <div name="SkillItemPrefix" className="">
          <p className="float-left">{text1}</p>
          <span className="float-right">{text2}</span>
          <ProgressBar percentage={barPercentage} />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div name="About-me">
      <section name="Section-me">
        <div name="container">
          <div class="text-4xl font-bebasN">
            <p className="pl-2">About Me</p>
          </div>
          <div name="Spacer" className="width-full h-10"></div>
          <div
            name="rows"
            className="flex flex-row justify-center items-center"
          >
            <div name="collumns" className="grid grid-cols-3 gap-10">
              <div class="">
                <p className="text-center">I'm from Iceland!</p>
                <img
                  src="./src/images/icelandFlag.png"
                  className="rounded-full h-44 w-44"
                ></img>
              </div>
              <div class="border rounded-md col-span-2">
                <div class="grid grid-rows-4 grid-flow-col gap-4 p-2">
                  <SkillItems text1={"Back-end Development"} text2={"85%"} barPercentage={'85%'} />
                  <SkillItems text1={"Front-End Development"} text2={"80%"} barPercentage={'80%'} />
                  <SkillItems text1={"Adobe Creative Suite"} text2={"75%"} barPercentage={'75%'} />
                  <SkillItems text1={"3D Modelling & Printing"} text2={"70%"} barPercentage={'70%'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
