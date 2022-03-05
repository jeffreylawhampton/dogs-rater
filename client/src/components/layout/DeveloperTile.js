import React from "react";
import { Link } from "react-router-dom";

import GithubIcon from "../assets/GitHubIcon";
import LinkedInIcon from "../assets/LinkedInIcon";
import EmailIcon from "../assets/EmailIcon";
import LaunchIcon from "../assets/LaunchIcon";

const DeveloperTile = ({ developer }) => {
  return (
    <div className="grid-x grid-margin-x developer-tile cell small-12 large-6">
      <div className="cell small-4">
        <img src={developer.image} alt={`Photo of ${developer.name}`} className="developer-pic" />
      </div>
      <div className="cell small-8">
        <h3>{developer.name}</h3>
        <p>
          See {developer.name.split(" ")[0]}'s solo project:{"  "}
          <a href={developer.soloProjectUrl} target="_blank">
            {developer.soloProjectName}
          </a>
        </p>
        <div className="contact-icons">
          <a
            href={`mailto: ${developer.email}`}
            title={`Email ${developer.name.split(" ")[0]}`}
            target="_top"
          >
            <div className="icon-container">{EmailIcon}</div>
          </a>
          <a href={developer.linkedin} title="Linkedin" target="_blank">
            <div className="icon-container">{LinkedInIcon}</div>
          </a>
          <a href={developer.github} title="Github" target="_blank">
            <div className="icon-container">{GithubIcon}</div>
          </a>
          <a href={developer.profile} title="Launch Academy profile" target="_blank">
            <div className="icon-container">{LaunchIcon}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTile;
