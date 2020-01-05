import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "../../store/actions/main";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Explorer = props => {
  const toggleExplorer = useSelector(state => state.main.toggleExplorer);
  const dispatch = useDispatch();
  return (
    <div
      className={`explorer-container ${
        toggleExplorer === false ? "explorer-container-toggled" : ""
      }`}
    >
      <div
        className={`explorer-toggle-button ${
          toggleExplorer === false ? "explorer-toggle-button-toggled" : ""
        }`}
        onClick={() => dispatch(toggleSettings())}
      >
        <ArrowForwardIosIcon className="arrow" />
      </div>
      <header className="header">
        <h1>Wiki World Map</h1>
      </header>
      <iframe
        src="https://en.m.wikipedia.org/wiki/Kar%C5%9F%C4%B1yaka"
        width="100%"
        height="90%"
        frameborder="0"
      ></iframe>
    </div>
  );
};
export default Explorer;
