import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { toggleSettings } from "../../store/actions/explorer";
import NavigatoButtons from "./navigatorButtons";

const Welcome = () => {
  const dispatch = useDispatch();
  return (
    <div className="welcome-container">
      <h1 className="title">Welcome to Wiki world map!</h1>
      <p className="about">
        Press anywhere on the map and find more about the location!
      </p>
      <Button
        onClick={() => dispatch(toggleSettings())}
        className="go-to-map-button"
        variant="contained"
        color="default"
      >
        Go to Map
      </Button>
      <div className="info">
        <div className="license">
          This application uses materials from Wikipedia , which is released
          under the{" "}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/">
            Creative Commons Attribution-Share-Alike License 3.0
          </a>
          .
        </div>
        <div>
          <div className="github">
            <GitHubIcon />
            <a
              href="https://github.com/renown93/Wiki-World-Map"
              className="github-link"
            >
              renown93/Wiki-World-Map
            </a>
          </div>
        </div>
        <p className="version">1.0.0-alpha</p>
      </div>
    </div>
  );
};

export default React.memo(Welcome);
