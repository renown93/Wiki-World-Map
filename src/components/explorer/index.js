import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "../../store/actions/main";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Welcome from "./Welcome";
const Explorer = props => {
  const toggleExplorer = useSelector(state => state.main.toggleExplorer);
  const link = useSelector(state => state.explorer.link);
  const dispatch = useDispatch();
  console.log(props);
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
      {link ? (
        <iframe src={link} width="100%" height="90%" frameborder="0"></iframe>
      ) : (
        <Welcome />
      )}
    </div>
  );
};
export default Explorer;
