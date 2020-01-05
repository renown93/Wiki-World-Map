import { TOGGLE_EXPLORER } from "../constants";
const initialState = {
  toggleExplorer: true
};
export default (state = initialState, action) => {
  if (action.type === TOGGLE_EXPLORER) {
    return { ...state, toggleExplorer: !state.toggleExplorer };
  }
  return state;
};
