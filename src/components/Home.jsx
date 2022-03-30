import { parallax1, parallax2 } from "./parallax";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { gitHubLink, linkedInLink, InstagramLink } from "./links";
import headShotImgUrl from "../images/profilephoto.jpg";
import Temp from "./Temp";

const stylingForIcons = "text-center";
const iconStyling = "pr-10 h-8 w-8";

const SocialLine = ({ styling, iconStyle }) => {
  return (
    <div className="flex">
      <div class={styling}>
        <a href={gitHubLink}>
          <FontAwesomeIcon className={iconStyle} icon={faGithub} />
        </a>
      </div>
      <div class={styling}>
        <a href={linkedInLink}>
          <FontAwesomeIcon className={iconStyle} icon={faLinkedin} />
        </a>
      </div>
      <div class={styling}>
        <a href={InstagramLink}>
          <FontAwesomeIcon className={iconStyle} icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div
      id="home"
      class="flex flex-col justify-center relative items-center gap-1  h-screen max-h-screen "
    >
      <div class="h-60 w-60 ">
        <img src={headShotImgUrl} class="rounded-full"></img>
      </div>
      <div class="pt-2 text-center text-4xl font-bebasN">
        <p>Hello, My Name is Aron</p>
      </div>
      <SocialLine styling={stylingForIcons} iconStyle={iconStyling} />

      {/*       <div name="parallaxContainer" className="absolute h-full w-full">
        <svg
          width="200px"
          height="200px"
          class="test"
          viewBox="0 0 16.79 261.43"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path class="cls-1" d="M16.79,261.43,0,246.08V0L16.79,12.2Z" />
        </svg>
      </div> */}
    </div>
  );
};

export default Home;
