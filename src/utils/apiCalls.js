import axios from "axios";
import { reduceAsync } from "./functions";
export const getTimezone = async (lat, lng) =>
  axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=1458000000&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
`);

export const getSunrise = async (lat, lng) =>
  axios.get(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
  );
export const getMapURL = () =>
  `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&language=en`;

export const geocodeAPI = async (lat, lng) =>
  axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&language=en`
  );
export const getRegions = async (lat, lng) => {
  const geocodeResults = await (await geocodeAPI(lat, lng)).data;
  const locationNotFound = [
    {
      title: "Location not found",
      description: "There are no results for this location",
      coordinates: { lat: 0, lon: 0 },
      page: null
    }
  ];
  if (geocodeResults.results[1] === undefined) {
    return locationNotFound;
  }
  const result = geocodeResults.results[1].address_components.reduce(
    reduceAsync,
    Promise.resolve([])
  );
  console.log(result);
  return (await result) == false ? locationNotFound : result;
};
