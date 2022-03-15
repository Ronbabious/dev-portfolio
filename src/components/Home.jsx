import { parallax1, parallax2 } from "./parallax";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { gitHubLink, linkedInLink, InstagramLink } from "./links";

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
      class="flex flex-col justify-center items-center gap-1  h-screen max-h-screen "
    >
      <div class="h-60 w-60 ">
        <img src="./src/images/profilephoto.jpg" class="rounded-full"></img>
      </div>
      <div class="pt-2 text-center text-4xl font-bebasN">
        <p>Hello, My Name is Aron</p>
      </div>
      <SocialLine styling={stylingForIcons} iconStyle={iconStyling} />
    </div>
    /*       <p>This is where main content is</p>
      <img className="" src="/src/images/developer.jpg" />
      <div>Text on images</div> */
  );
};

export default Home;
