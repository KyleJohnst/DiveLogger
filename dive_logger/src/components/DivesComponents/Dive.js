import React from 'react';
import {Link} from 'react-router-dom';

const Dive = (props) => {

                let gasCons = props.dive.startGasPres - props.dive.endGasPres;
                let atm = props.dive.avgDepth / 10 + 1;
                let sacRate = (((props.dive.tankVol * gasCons) / props.dive.diveTime) / atm).toFixed(2);

    return ( 
        <>
        <p> Dive Site: {props.dive.siteName} </p> 
        <p> Gas Fill: {props.dive.gasType} </p>  
        <p> Start Pressure: {props.dive.startGasPres}bar </p>  
        <p> End Pressure: {props.dive.endGasPres}bar </p>  
        <p> Tank vol: {props.dive.tankVol}l </p>  
        <p> Max depth: {props.dive.maxDepth}m </p>
        <p> Avg depth: {props.dive.avgDepth}m </p>
        <p> Dive time: {props.dive.diveTime}min </p>
        <p> SAC rate: {sacRate}liters per minute </p>

        <div>
        <button onClick = {() => {
            if (window.confirm(`Are you sure you wish to remove this dive at ${props.dive.siteName}?`)) 
            props.deleteDive(props.dive.id)}}>Delete Dive</button>
        </div>
        <div>
        <Link to = "/editdive">
            <button onClick = {() => {props.setEditDive(props.dive)}}>Edit</button>
        </Link>
        </div>
        </>
        
    )
}
export default Dive;

