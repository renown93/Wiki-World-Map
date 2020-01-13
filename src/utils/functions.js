import axios from "axios";

export const generateNightOrDayResponse = (sunrise, sunset, timeZoneId) => {
  /*
  Function Description:
   Takes 3 paramaters which are sunrise time(UTC), sunset time(UTC) and timezoneid(Atlantic/Azores) of desired location.
   returns if it's the night time or day time at the location.
  */

  const options = {
    // When a new Date object created you can convert UTC date to another time zone by timeZone option.
    timeZone: timeZoneId,
    hour: "2-digit",
    minute: "2-digit"
  };
  // three dates are created to be compared.
  const createDateString = (options, time) =>
    new Date(time).toLocaleDateString("en-GB", options);

  const { sunrizeDate, sunSetDate, localDate } = {
    sunrizeDate: new Date(createDateString(options, sunrise)).getTime(),
    sunSetDate: new Date(createDateString(options, sunset)).getTime(),
    localDate: new Date(
      new Date().toLocaleDateString("en-GB", options)
    ).getTime()
  };

  return localDate > sunrizeDate && localDate > sunSetDate
    ? " it's night time"
    : "It's morning time";
};
export const adressReducer = async result => {
  result.results[1].address_components.reduce(
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
};
