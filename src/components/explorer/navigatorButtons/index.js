import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "../../../store/actions/explorer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const NavigatorButtons = () => {
  const toggleExplorer = useSelector(state => state.explorer.toggleExplorer);
  const dispatch = useDispatch();

  return (
    <div
      className={`explorer-toggle-button ${
        toggleExplorer === false ? "explorer-toggle-button-toggled" : ""
      }`}
      onClick={() => dispatch(toggleSettings())}
    >
      <ArrowForwardIosIcon className="arrow" />
    </div>
  );
};

export default NavigatorButtons;
