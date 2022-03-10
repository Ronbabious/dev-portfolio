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
      <a href={gitHubLink}>
        <div class={styling}>
          <FontAwesomeIcon className={iconStyle} icon={faGithub} />
        </div>
      </a>
      <a href={linkedInLink}>
        <div class={styling}>
          <FontAwesomeIcon className={iconStyle} icon={faLinkedin} />
        </div>
      </a>
      <a href={InstagramLink}>
        <div class={styling}>
          <FontAwesomeIcon className={iconStyle} icon={faInstagram} />
        </div>
      </a>
    </div>
  );
};

const Home = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-1  h-screen max-h-screen ">
      <div class="h-60 w-60 ">
        <img src="./src/images/profilephoto.jpg" class="rounded-full"></img>
      </div>
      <div class="pt-2 text-center text-4xl font-bebasN">
        <p>Hello, My Name is Aron</p>
      </div>
      <a>
        <SocialLine styling={stylingForIcons} iconStyle={iconStyling} />
      </a>
    </div>
    /*       <p>This is where main content is</p>
      <img className="" src="/src/images/developer.jpg" />
      <div>Text on images</div> */
  );
};

export default Home;
