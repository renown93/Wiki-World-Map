import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Welcome from "./Welcome";
import Iframe from "./Iframe";
import NavigatoButtons from "./navigatorButtons";

const Explorer = props => {
  const toggleExplorer = useSelector(state => state.explorer.toggleExplorer);
  const link = useSelector(state => state.explorer.link);
  return (
    <div
      test-id="explorer-container"
      className={`explorer-container ${
        toggleExplorer === false ? "explorer-container-toggled" : ""
      }`}
    >
      <NavigatoButtons />

      <header className="header">
        <h1>Wiki World Map</h1>
      </header>

      {link ? <Iframe link={link} /> : <Welcome />}
    </div>
  );
};
export default React.memo(Explorer);
