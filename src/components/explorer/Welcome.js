import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="title">Welcome to Wiki world map!</h1>
      <p className="about">
        Press anywhere on the map and find more about the location!
      </p>
      <div className="info">
        <div className="github">
          <GitHubIcon />
          <a
            href="https://github.com/renown93/Wiki-World-Map"
            className="github-link"
          >
            renown93/Wiki-World-Map
          </a>
        </div>
        <p className="version">1.0.0-alpha</p>
      </div>
    </div>
  );
};

export default Welcome;
