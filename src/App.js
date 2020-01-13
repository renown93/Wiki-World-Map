import React from "react";
import Map from "./components/map";
import Explorer from "./components/explorer";
import "./scss/main.scss";
import { getMapURL } from "./utils/apiCalls";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  const toggleExplorer = useSelector(state => state.explorer.toggleExplorer);

  const AppComponent = props => {
    return (
      <div test-id="app-container" className="app-container">
        <div
          className={`map-container ${
            toggleExplorer === false ? "map-container-toggled" : ""
          }`}
        >
          <Map
            test-id="map"
            loadingElement={<div className="loadingElement" />}
            containerElement={<div className="containerElement" />}
            mapElement={<div style={{ height: `100vh` }} />}
            googleMapURL={getMapURL()}
            {...props}
          />
        </div>

        <Explorer {...props} test-id="explorer" />
      </div>
    );
  };
  return (
    <Router>
      <Helmet>
        <title>Wiki World Map</title>
      </Helmet>
      <Switch>
        <Route exact path="/" render={AppComponent} />
        <Route exact path="/:lat/:lng" render={AppComponent} />
        <Route exact path="/:lat/:lng/:cityName" render={AppComponent} />
        <Route exact path="*" render={AppComponent} />
      </Switch>
    </Router>
  );
}

export default React.memo(App);
