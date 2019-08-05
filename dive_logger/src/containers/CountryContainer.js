import React from "react";
import LocationList from "../components/LocationComponents/LocationList";
import CountryForm from "../components/LocationComponents/CountryForm";
import "./CSS/CountryContainer.css";

const LocationContainer = props => {
  return (
    <div className="country_display">
      <div className="component_header_holder">
        <h2>Countries</h2>
      </div>

      <div className="country_form_container">
        <CountryForm
          locations={props.locations}
          handleNewLocation={props.handleNewLocation}
        />
      </div>

      <div className="panelDivider" />

      <div className="country_list_container">
        <LocationList
          viewLocation={props.viewLocation}
          locations={props.locations}
        />
      </div>
    </div>
  );
};
export default LocationContainer;
