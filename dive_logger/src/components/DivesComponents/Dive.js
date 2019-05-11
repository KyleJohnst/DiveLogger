import React from 'react';

const Dive = (props) => {

                let gasCons = props.dive.startGasPres - props.dive.endGasPres;
                let atm = props.dive.aveDepth / 10 + 1;
                let sacRate = (((props.dive.tankVol * gasCons) / props.dive.diveTime) / atm).toFixed(2);

    return ( 
        <>
        <p> Dive Site: {props.dive.siteName} </p> 
        <p> Gas Fill: {props.dive.gasType} </p>  
        <p> Start Pressure: {props.dive.startGasPres}bar </p>  
        <p> End Pressure: {props.dive.endGasPres}bar </p>  
        <p> Tank vol: {props.dive.tankVol}l </p>  
        <p> Max depth: {props.dive.maxDepth}m </p>
        <p> Avg depth: {props.dive.aveDepth}m </p>
        <p> Dive time: {props.dive.diveTime}min </p>
        <p> SAC rate: {sacRate}liters per minute </p>
        </>
    )
}
export default Dive;