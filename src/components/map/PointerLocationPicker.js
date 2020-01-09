import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch } from "react-redux";
import { setLocationLink } from "../../store/actions/explorer";
import { toggleExplprerWithPayload } from "../../store/actions/main";
import {
  changeLoadingState,
  setLocationsForPicker
} from "../../store/actions/locationData";

const PointerLocationPicker = props => {
  const dispatch = useDispatch();
  return (
    <>
      {props.isLoading ? (
        <CircularProgress />
      ) : (
        <div className="pointer-container">
          {props.locations.map(location => (
            <div
              key={location.title}
              className="pointer-element"
              onClick={e => {
                e.stopPropagation();
                dispatch(setLocationLink(location.page));
                dispatch(changeLoadingState(false));
                dispatch(setLocationsForPicker(false));
                dispatch(toggleExplprerWithPayload(true));
              }}
            >
              <h1 className="title"> {location.title}</h1>
              <p className="description">{location.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default PointerLocationPicker;
