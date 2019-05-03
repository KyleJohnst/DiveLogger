import React from 'react';

const Location = (props) =>{

    let diveCounter = 0
    props.location.dives.forEach(dive => {
        diveCounter += 1
    });

    return(
        <>
        <p>{props.location.name}</p>
        <p>Dives in location: {diveCounter}</p>
        <button>View</button>
        </>
    )
}
export default Location;