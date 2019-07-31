import React from 'react';
import {Link} from 'react-router-dom';

const Location = (props) =>{

    // Counts the dives in the array.
    let diveCounter = 0
    props.location.dives.forEach(dive => {
        diveCounter += 1
    });

    return(
        <>
        <p>{props.location.name}</p>
        <p>Dives in country: {diveCounter}</p>
        < Link to = "/location_detail" > <button onClick = {
            () => props.viewLocation(props.location)
        } > View </button></Link >
        </>
    )
}
export default Location;