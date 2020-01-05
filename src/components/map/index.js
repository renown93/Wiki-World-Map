import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { getTimezone, getSunrise } from "../../utils/apiCalls";
import { generateNightOrDayResponse } from "../../utils/functions";
import mapStyle from "./mapstyle";

function Map(props) {
  // prettier-ignore
  const onClick = async ({ latLng }) => {
    const {data: { results: { sunrise, sunset } } } = await getSunrise(latLng.lat(), latLng.lng());
    const {data: { timeZoneId } } = await getTimezone(latLng.lat(), latLng.lng());
    const result = generateNightOrDayResponse(sunrise, sunset, timeZoneId)   
    console.log(result)
  };

  return (
    <>
      <GoogleMap
        onClick={event => onClick(event)}
        defaultZoom={3}
        defaultCenter={{ lat: 44.433818, lng: 26.105616 }}
        defaultOptions={{
          styles: mapStyle,
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: true,
          rotateControl: false,
          fullscreenControl: false
        }}
        disableDefaultUI
      />
    </>
  );
}

export default withScriptjs(withGoogleMap(Map));
