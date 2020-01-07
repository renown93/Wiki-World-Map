import { TOGGLE_EXPLORER, TOGGLE_EXPLORER_WITH_PAYLOAD } from "../constants";
const initialState = {
  toggleExplorer: true
};
export default (state = initialState, action) => {
  if (action.type === TOGGLE_EXPLORER) {
    return { ...state, toggleExplorer: !state.toggleExplorer };
  }
  if (action.type === TOGGLE_EXPLORER_WITH_PAYLOAD) {
    return { ...state, toggleExplorer: action.payload };
  }
  return state;
};
