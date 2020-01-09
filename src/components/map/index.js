import React from "react";

import { getPlaces } from "../../utils/apiCalls";
import GoogleMapReact from "google-map-react";
import mapStyle from "./mapstyle";
import Pointer from "./Pointer";
import { useDispatch, useSelector } from "react-redux";
import {
  setPointer,
  setLocationsForPicker
} from "../../store/actions/locationData";

function Map(props) {
  const dispatch = useDispatch();
  //selectors
  const coordinates = useSelector(state => {
    return { lat: state.locationData.lat, lng: state.locationData.lng };
  });

  //

  const onClick = async ({ lat, lng }) => {
    dispatch(setPointer({ lat, lng, isLoading: true }));
    dispatch(setLocationsForPicker(await getPlaces(lat, lng)));
  };
  return (
    <GoogleMapReact
      onClick={onClick}
      bootstrapURLKeys={{
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        language: "en"
      }}
      defaultCenter={{ lat: 44.433818, lng: 26.105616 }}
      defaultZoom={3}
      options={{
        styles: mapStyle,
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: true,
        rotateControl: false,
        fullscreenControl: false
      }}
    >
      {coordinates.lat ? (
        <Pointer lat={coordinates.lat} lng={coordinates.lng} />
      ) : null}
    </GoogleMapReact>
  );
}

export default Map;
