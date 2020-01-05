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
