import React, { useEffect } from "react";
import { getRegions } from "../../utils/apiCalls";
import GoogleMapReact from "google-map-react";
import mapStyle from "../../utils/mapStyle";
import Marker from "./Marker";
import { useDispatch, useSelector, batch } from "react-redux";
import {
  setPointer,
  setRegionList,
  changeMapCenter
} from "../../store/actions/locationData";
import { isNumber } from "../../utils/functions";

function Map(props) {
  const dispatch = useDispatch();

  const { params } = props.match;
  const center = useSelector(state => state.locationData.center);

  useEffect(() => {
    const asyncEffect = async () => {
      if (isNaN(params.lat) || isNaN(params.lng)) {
        return props.history.push("/");
      }
      if (params != false) {
        dispatch(
          setPointer({
            isLoading: true
          })
        );
        dispatch(setRegionList(await getRegions(params.lat, params.lng)));
        dispatch(
          changeMapCenter({
            lat: Number(params.lat),
            lng: Number(params.lng)
          })
        );
      }
    };
    asyncEffect();
  }, []);

  const onClick = async ({ lat, lng }) => {
    dispatch(
      changeMapCenter({
        lat: Number(lat),
        lng: Number(lng)
      })
    );
    props.history.push(`/${lat}/${lng}`);
    dispatch(setPointer({ isLoading: true }));
    dispatch(setRegionList(await getRegions(lat, lng)));
  };

  return (
    <GoogleMapReact
      onClick={onClick}
      bootstrapURLKeys={{
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        language: "en"
      }}
      center={center}
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
      {// if both lat and lng is a number create a marker. Otherwise return null
      isNumber(params.lat) && isNumber(params.lng) ? (
        <Marker lat={params.lat} lng={params.lng} />
      ) : null}
    </GoogleMapReact>
  );
}

export default React.memo(Map);
