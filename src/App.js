import React from "react";
import Map from "./components/Map";
import "./App.css";
function App() {
  const [dayOrNightTime, setDayOrNightTime] = React.useState(false);

  return (
    <div style={{ height: `100vh`, width: `100vw` }}>
      <>
        <div
          className="notification"
          style={{
            display: dayOrNightTime ? "" : "none",
            position: "absolute",
            zIndex: 1000,
            right: "50%",
            top: "5%"
          }}
        >
          {dayOrNightTime}
        </div>
        <Map
          setState={setDayOrNightTime}
          loadingElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          containerElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          mapElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBPl70glkvfatK6X-UxG7YNMC1gM4TFFjY`}
        />
      </>
    </div>
  );
}

export default App;
