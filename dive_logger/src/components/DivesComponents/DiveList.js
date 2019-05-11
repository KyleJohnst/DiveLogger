import React from 'react';
import Dive from './Dive';

const DiveList = (props) => {

    const diveNode = props.dives.map((dive, index) => {
        return(
            <div key = {index}>
                <Dive dive = {dive}/>
            </div>
        )
    })

    return(
        <>
        <p>Dive List</p>
        {diveNode}
        </>
    )
}
export default DiveList;