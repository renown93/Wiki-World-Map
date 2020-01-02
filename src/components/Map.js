import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import axios from "axios";

function Map(props) {
  const _onClick = async ({ latLng }) => {
    const lat = latLng.lat();
    const lng = latLng.lng();
    try {
      const sunriseAPI = await axios.get(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
      );
      const timezoneAPI = await axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=1458000000&key=AIzaSyBPl70glkvfatK6X-UxG7YNMC1gM4TFFjY
`);
      const dateOptions = {
        timeZone: timezoneAPI.data.timeZoneId,
        hour: "2-digit",
        minute: "2-digit"
      };
      const sunrizeDate = new Date(
        sunriseAPI.data.results.sunrise
      ).toLocaleDateString("en-GB", dateOptions);
      const sunSetDate = new Date(
        sunriseAPI.data.results.sunset
      ).toLocaleDateString("en-GB", dateOptions);
      const localDate = new Date().toLocaleDateString("en-GB", dateOptions);

      const result =
        localDate > sunrizeDate && localDate > sunSetDate
          ? " it's night time "
          : "It's morning time";
      props.setState(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <GoogleMap
        onClick={event => _onClick(event)}
        defaultZoom={3}
        defaultCenter={{ lat: 44.433818, lng: 26.105616 }}
      />
    </>
  );
}

export default withScriptjs(withGoogleMap(Map));
