import axios from "axios";
import crds from "./credentials";
export const getTimezone = async (lat, lng) =>
  axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=1458000000&key=${crds.GOOGLE_MAPS_API_KEY}
`);

export const getSunrise = async (lat, lng) =>
  axios.get(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
  );
export const getMapURL = () =>
  `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${crds.GOOGLE_MAPS_API_KEY}&language=en`;
