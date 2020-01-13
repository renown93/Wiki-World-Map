import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import RegionList from "./RegionList";
import { useSelector } from "react-redux";

const Pointer = props => {
  const locations = useSelector(state => state.locationData.locations);
  const isLoading = useSelector(state => state.locationData.isLoading);
  return (
    <>
      <div className="pointer-icon">
        <RoomIcon fontSize="large" />
      </div>
      {locations || isLoading ? (
        <RegionList isLoading={isLoading} locations={locations} />
      ) : null}
    </>
  );
};

export default React.memo(Pointer);
