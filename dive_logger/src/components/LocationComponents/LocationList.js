import React from 'react';
import Country from './Country';

const LocationList = (props) => {

    const locationNode = props.locations.map((location, index) => {
        return(
            <div key = {index}>
                <Country location = {location}
                viewLocation = {props.viewLocation}
                />
            </div>
        )
    })

    return(
        <div>
        <h4>Country List</h4>
        {locationNode}
        </div>
    )
}
export default LocationList;