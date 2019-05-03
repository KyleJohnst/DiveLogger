import React from 'react';
import Location from './Location';

const LocationList = (props) => {

    const locationNode = props.locations.map((location, index) => {
        return(
            <div key = {index}>
                <Location location = {location}/>
            </div>
        )
    })

    return(
        <>
        <h4>Location List</h4>
        {locationNode}
        </>
    )
}
export default LocationList;