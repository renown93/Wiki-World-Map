import {
  SET_LOCATION_LINK,
  TOGGLE_EXPLORER,
  TOGGLE_EXPLORER_WITH_PAYLOAD
} from "../constants";

const initialState = {
  toggleExplorer: true,
  link: null,
  isLoading: false
};
export default (state = initialState, action) => {
  if (action.type === SET_LOCATION_LINK) {
    return { ...state, link: action.payload };
  }
  if (action.type === TOGGLE_EXPLORER) {
    return { ...state, toggleExplorer: !state.toggleExplorer };
  }
  if (action.type === TOGGLE_EXPLORER_WITH_PAYLOAD) {
    return { ...state, toggleExplorer: action.payload };
  }
  return state;
};
