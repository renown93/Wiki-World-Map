import { SET_LOCATION_LINK } from "../constants";

const initialState = {
  lat: null,
  lng: null,
  isLoading: false,
  locations: null
};
export default (state = initialState, action) => {
  if (action.type === SET_LOCATION_LINK) {
    return { ...state, link: action.payload };
  }
  return state;
};
