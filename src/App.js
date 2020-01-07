import React from "react";
import Map from "./components/map";
import Explorer from "./components/explorer";
import "./scss/main.scss";
import { getMapURL } from "./utils/apiCalls";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const toggleExplorer = useSelector(state => state.main.toggleExplorer);
  return (
    <div className="app-conainer">
      <div
        className={`map-container ${
          toggleExplorer === false ? "map-container-toggled" : ""
        }`}
      >
        <Map
          loadingElement={<div className="loadingElement" />}
          containerElement={<div className="containerElement" />}
          mapElement={<div style={{ height: `100vh` }} />}
          googleMapURL={getMapURL()}
        />
      </div>
      <Explorer />
    </div>
  );
}

export default App;
