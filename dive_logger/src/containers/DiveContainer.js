import React from 'react';
import DiveList from '../components/DivesComponents/DiveList';
import {Link} from 'react-router-dom';



const DiveContainer = (props) => {


    return(
        <>
        <h4>Dive Logs</h4>
        <Link to = "/newdive"><button> Add new dive!</button></Link>
        <DiveList dives = {props.dives} deleteDive = {props.deleteDive} setEditDive = {props.setEditDive} />
        </>
    )
}
export default DiveContainer;