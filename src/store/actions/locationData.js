import {
  SET_COORDINATES,
  SET_LOCATIONS,
  SET_LOADING,
  SET_MAP_CENTER
} from "../constants";
export const setPointer = payload => {
  return { type: SET_COORDINATES, payload };
};
export const setRegionList = payload => {
  return { type: SET_LOCATIONS, payload };
};
export const changeLoadingState = payload => {
  return { type: SET_LOADING, payload };
};
export const changeMapCenter = payload => {
  return { type: SET_MAP_CENTER, payload };
};
