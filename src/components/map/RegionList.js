import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, batch } from "react-redux";
import {
  toggleExplprerWithPayload,
  setLocationLink
} from "../../store/actions/explorer";
import {
  changeLoadingState,
  setRegionList
} from "../../store/actions/locationData";

const PointerLocationPicker = props => {
  const dispatch = useDispatch();

  const setLocation = (e, location) => {
    e.stopPropagation();
    batch(() => {
      dispatch(setLocationLink(location.page));
      dispatch(changeLoadingState(false));
      dispatch(setRegionList(false));
      dispatch(toggleExplprerWithPayload(true));
    });
  };
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
                setLocation(e, location);
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
export default React.memo(PointerLocationPicker);
