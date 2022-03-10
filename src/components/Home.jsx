import { parallax1, parallax2 } from "./parallax";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { gitHubLink, linkedInLink, InstagramLink } from "./links";
const Home = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-1  h-screen max-h-screen ">
      <div class="h-60 w-60 ">
        <img src="./src/images/profilephoto.jpg" class="rounded-full"></img>
      </div>
      <div class="pt-2 text-center text-4xl font-bebasN">
        <p>Hello, My Name is Aron</p>
      </div>
      <a className="flex">
        <a className="flex" href={gitHubLink}>
          <div class="text-center p-1">
            <FontAwesomeIcon className="pr-3 h-8 w-8" icon={faGithub} />
          </div>
        </a>
        <a className="flex" href={linkedInLink}>
          <div class="text-center p-1">
            <FontAwesomeIcon className="pr-3 h-8 w-8" icon={faLinkedin} />
          </div>
        </a>
        <a className="flex" href={InstagramLink}>
          <div class="text-center p-1">
            <FontAwesomeIcon className="pr-3 h-8 w-8" icon={faInstagram} />
          </div>
        </a>
      </a>
    </div>
    /*       <p>This is where main content is</p>
      <img className="" src="/src/images/developer.jpg" />
      <div>Text on images</div> */
  );
};

export default Home;
