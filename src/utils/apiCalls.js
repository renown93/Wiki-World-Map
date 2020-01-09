import axios from "axios";
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
export const getPlaces = async (lat, lng) => {
  const geocodeResults = await (await geocodeAPI(lat, lng)).data;
  if (
    geocodeResults.status !== "OK" ||
    geocodeResults.results[1] === undefined
  ) {
    return [
      {
        title: "Location not found",
        description: "There are no results for this location",
        coordinates: { lat: 0, lon: 0 },
        page: null
      }
    ];
  }
  const result = geocodeResults.results[1].address_components.reduce(
    async (previousPromise, { long_name }) => {
      const accumulator = await previousPromise;
      try {
        const { data } = await axios
          .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${long_name}`)
          .catch(err => {});
        if (data.coordinates) {
          //object destructuring
          const {
            title,
            description,
            coordinates,
            content_urls: {
              mobile: { page }
            }
          } = data;
          //object destructuring end

          //Push the value to the accumulator if the value is not duplicate
          if (accumulator.filter(value => value.title === title) == false) {
            accumulator.push({ title, description, coordinates, page });
          }
        }
      } catch (err) {
        //pass
      }

      return accumulator;
    },
    Promise.resolve([])
  );
  return result;
};
