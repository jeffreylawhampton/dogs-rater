import React from "react";
import { Link } from "react-router-dom";

import DeveloperTile from "./DeveloperTile";

const About = (props) => {
  const ben = {
    name: "Ben (Taehoon) Lim",
    email: "thlim940913@gmail.com",
    github: "https://github.com/benlimer",
    linkedin: "https://www.linkedin.com/in/taehoon-lim/",
    image:
      "https://launchpass-production.s3.amazonaws.com/uploads/user/profile_photo/3419/BenLim__1_.jpeg",
    soloProjectUrl: "https://tennis-meetup.herokuapp.com/",
    soloProjectName: "Tennis Meetup",
    profile: "https://launchpass.launchacademy.com/users/BenTaehoonLim2953/launcher_profile",
  };

  const tom = {
    name: "Tom Fuller",
    email: "tomfuller71@gmail.com",
    github: "https://github.com/tomfuller71",
    linkedin: "https://www.linkedin.com/in/tom-fuller-w/",
    image:
      "https://launchpass-production.s3.amazonaws.com/uploads/user/profile_photo/3427/slckprofile.jpeg",
    soloProjectUrl: "https://boston-craft-cocktails.herokuapp.com/",
    soloProjectName: "Boston Craft Cocktails",
    profile: "https://launchpass.launchacademy.com/users/TomFuller2961/launcher_profile",
  };

  const steven = {
    name: "Steven Savitt",
    email: "steven.savitt@gmail.com",
    github: "https://github.com/ssavitt12",
    linkedin: "https://www.linkedin.com/in/ssavitt/",
    image:
      "https://launchpass-production.s3.amazonaws.com/uploads/user/profile_photo/3435/1897001_10201654833081101_655292678_n.jpeg",
    soloProjectUrl: "https://tax-estimator.herokuapp.com/",
    soloProjectName: "Tax Master",
    profile: "https://launchpass.launchacademy.com/users/StevenSavitt2969/launcher_profile",
  };

  const jeff = {
    name: "Jeff Hampton",
    email: "jeffreylawhampton@gmail.com",
    github: "https://github.com/jeffreylawhampton",
    linkedin: "https://www.linkedin.com/in/jeffreylawhampton/",
    image:
      "https://launchpass-production.s3.amazonaws.com/uploads/user/profile_photo/3437/jeff_hampton.jpeg",
    soloProjectUrl: "http://www.getinventory.co/",
    soloProjectName: "Inventory",
    profile: "https://launchpass.launchacademy.com/users/JeffHampton2971/launcher_profile",
  };

  const developers = [ben, jeff, steven, tom];

  const developerTiles = developers.map((developer) => {
    return <DeveloperTile key={developer.name} developer={developer} />;
  });
  return (
    <div className="grid-container about">
      <h1>About Pupperater</h1>
      <p>
        Pupperater is the result of a{" "}
        <a href="https://launchacademy.com/" target="_blank">
          Launch Academy
        </a>{" "}
        group project. Our team was given a two-week sprint and the task of creating a review site
        of our choosing. After ~30 seconds of deliberation, we chose an homage to Twitter's{" "}
        <a href="https://twitter.com/dog_rates">@dog_rates</a>. (Which, if you're not familiar,
        check it out. It's a ray of sunshine in a world that desperately needs one.)
      </p>
      <p>
        We've since moved on to solo projects and job searches, but feel free to use and share
        Pupperater as much as you'd like, and definitely feel free to reach out. Especially if
        you're hiring. Enjoy!
      </p>
      <div className="developer-grid">
        <h2>Meet the developers</h2>
        <div className="grid-x grid-margin-x">{developerTiles}</div>
      </div>
    </div>
  );
};

export default About;
