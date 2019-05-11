import React from 'react';

const LocationDetail = (props) => {

    const diveNode = props.location.dives.map((dive, index) => {
            // Works out the dive air consumption rates. 
            let gasCons = dive.startGasPres - dive.endGasPres;
            let atm = dive.aveDepth/10 + 1;
            let sacRate = (((dive.tankVol * gasCons)/dive.diveTime)/atm).toFixed(2);
        
            return(
                <div key = {index}>
                 <p>Dive Site: {dive.siteName}</p>
                 <p>Gas Fill: {dive.gasType}</p>
                 <p>Start Pressure: {dive.startGasPres} bar</p>
                 <p>End Pressure: {dive.endGasPres} bar</p>
                 <p>Tank vol: {dive.tankVol}l </p>
                 <p>Max depth: {dive.maxDepth}m</p>
                 <p>Avg depth: {dive.aveDepth}m</p>
                 <p>Dive time: {dive.diveTime} min</p>
                 <p>SAC rate: {sacRate} liters per minute</p>
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