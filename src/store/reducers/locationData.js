import {
  SET_LOCATIONS,
  SET_POINTER_COORDINATES,
  SET_LOADING
} from "../constants";

const initialState = {
  lat: null,
  lng: null,
  isLoading: false,
  locations: null
};
export default (state = initialState, action) => {
  if (action.type === SET_POINTER_COORDINATES) {
    return { ...state, ...action.payload };
  }
  if (action.type === SET_LOCATIONS) {
    return { ...state, isLoading: false, locations: action.payload };
  }
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: action.payload };
  }
  return state;
};
