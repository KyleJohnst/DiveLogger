import React from 'react';
import Country from './Country';
import './CSS/CountryList.css';

const LocationList = (props) => {

    const CountyNode = props.locations.map((location, index) => {
        return(
            <React.Fragment key = {index}>
                <Country location = {location}
                viewLocation = {props.viewLocation}
                />
            </React.Fragment>
        )
    })

    return(
        <div>
            <div className = "pageHeader">
                <h4>Country List</h4>
            </div>
            <div className = "pageBody">
                {CountyNode}
            </div>
        </div>
    )
}
export default LocationList;