import React from "react";
import { Link } from "react-router-dom";
import './CSS/Country.css';

const Location = props => {
  // Counts the dives in the array.
  let diveCounter = 0;
  props.location.dives.forEach(dive => {
    diveCounter += 1;
  });

  return (
    <div className="dataBox">
      <div className="dataDisplay">{props.location.name}</div>

      <div className="dataDisplay">Dives: {diveCounter}</div>

      <div className="dataDisplay">
        <Link to="/location_detail">
          <button onClick={() => props.viewLocation(props.location)} className = "buttonControl">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Location;
