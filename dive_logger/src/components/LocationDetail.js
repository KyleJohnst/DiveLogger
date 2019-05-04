import React from 'react';

const LocationDetail = (props) => {

    const diveNode = props.location.dives.map((dive, index) => {
        return(
            <div key = {index}>
                <p>{dive.siteName}</p>
            </div>
        )
    })

    return(
        <div>
        <h5>{props.location.name}</h5>
        {diveNode}
        </div>
    )
}
export default LocationDetail;