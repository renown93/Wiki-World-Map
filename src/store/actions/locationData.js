import {
  SET_POINTER_COORDINATES,
  SET_LOCATIONS,
  SET_LOADING
} from "../constants";
export const setPointer = payload => {
  return { type: SET_POINTER_COORDINATES, payload };
};
export const setLocationsForPicker = payload => {
  return { type: SET_LOCATIONS, payload };
};
export const changeLoadingState = payload => {
  return { type: SET_LOADING, payload };
};
