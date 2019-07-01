import React from 'react';
import Dive from './Dive';

const DiveList = (props) => {

    const diveNode = props.dives.map((dive, index) => {
        return(
            <div key = {index}>
                <Dive dive = {dive} deleteDive = {props.deleteDive} setEditDive = {props.setEditDive} />
            </div>
        )
    })

    return(
        <>
        {diveNode}
        </>
    )
}
export default DiveList;