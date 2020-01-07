import { TOGGLE_EXPLORER, TOGGLE_EXPLORER_WITH_PAYLOAD } from "../constants";
export const toggleSettings = () => {
  return { type: TOGGLE_EXPLORER };
};
export const toggleExplprerWithPayload = payload => {
  return { type: TOGGLE_EXPLORER_WITH_PAYLOAD, payload };
};
