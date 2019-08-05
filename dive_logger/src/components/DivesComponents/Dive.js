import React from "react";
import { Link } from "react-router-dom";

const Dive = props => {
  let gasCons = props.dive.startGasPres - props.dive.endGasPres;
  let atm = props.dive.avgDepth / 10 + 1;
  let sacRate = (
    (props.dive.tankVol * gasCons) /
    props.dive.diveTime /
    atm
  ).toFixed(2);

  return (
    <div className="dataBox">
      <div className="dataDisplay"> Dive Site: {props.dive.siteName} </div>
      <div className="dataDisplay"> Gas Fill: {props.dive.gasType} </div>
      <div className="dataDisplay">
        Start Pressure: {props.dive.startGasPres}bar
      </div>
      <div className="dataDisplay">
        End Pressure: {props.dive.endGasPres}bar
      </div>
      <div className="dataDisplay"> Tank vol: {props.dive.tankVol}l </div>
      <div className="dataDisplay"> Max depth: {props.dive.maxDepth}m </div>
      <div className="dataDisplay"> Avg depth: {props.dive.avgDepth}m </div>
      <div className="dataDisplay"> Dive time: {props.dive.diveTime}min </div>
      <div className="dataDisplay"> SAC rate: {sacRate}liters per minute </div>

      <div className="dataDisplay">
        <button
          onClick={() => {
            if (
              window.confirm(
                `Are you sure you wish to remove this dive at ${
                  props.dive.siteName
                }?`
              )
            )
              props.deleteDive(props.dive.id);
          }}
          className = "buttonControl"
        >
          Delete Dive
        </button>
      </div>
      <div className="dataDisplay">
        <Link to="/editdive">
          <button
            onClick={() => {
              props.setEditDive(props.dive);
            }}
            className = "buttonControl"
          >
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Dive;
