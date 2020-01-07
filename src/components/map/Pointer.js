import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import PointerLocationPicker from "./PointerLocationPicker";
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
        <PointerLocationPicker isLoading={isLoading} locations={locations} />
      ) : null}
    </>
  );
};

export default Pointer;
