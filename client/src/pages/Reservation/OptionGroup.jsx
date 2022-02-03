import React from "react";
import propTypes from "prop-types";
import "../../styles/FindStroller.css";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { useState } from "react";

const OptionGroup = ({ options, handleSelection }) => {
  const { currentUser } = useContext(userContext);
  const locationId = currentUser.activeOrder?.order.startLocationId;
  const endLocation = currentUser.activeOrder?.order.startLocation;
  const [value] = useState({ locationId, endLocation });

  return (
    <select
      data-loaded={options != null}
      onChange={handleSelection}
      className="select-city-name"
      defaultValue={JSON.stringify(value)}
    >
      {options.map((group, index) => {
        return (
          <optgroup key={index} label={group.city}>
            {group.locations.map((option) => {
              return (
                <option
                  key={option._id}
                  value={JSON.stringify({
                    locationId: option._id,
                    endLocation: option.centerName,
                  })}
                >
                  {option.centerName}
                </option>
              );
            })}
          </optgroup>
        );
      })}
    </select>
  );
};

OptionGroup.propTypes = {
  options: propTypes.array,
  title: propTypes.string,
  handleSelection: propTypes.func,
};
export default OptionGroup;
