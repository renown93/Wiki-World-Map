import {
  SET_LOCATIONS,
  SET_COORDINATES,
  SET_LOADING,
  SET_MAP_CENTER
} from "../constants";

const initialState = {
  lat: null,
  lng: null,
  isLoading: false,
  locations: null,
  center: {
    lat: 44.433818,
    lng: 26.105616
  }
};
export default (state = initialState, action) => {
  if (action.type === SET_COORDINATES) {
    return { ...state, ...action.payload };
  }
  if (action.type === SET_LOCATIONS) {
    return { ...state, isLoading: false, locations: action.payload };
  }
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: action.payload };
  }
  if (action.type === SET_MAP_CENTER) {
    return { ...state, center: action.payload };
  }
  return state;
};
