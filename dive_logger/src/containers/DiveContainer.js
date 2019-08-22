import React from 'react';
import DiveList from '../components/DivesComponents/DiveList';
import {Link} from 'react-router-dom';
import DiveForm from '../components/DivesComponents/DiveForm';



const DiveContainer = (props) => {


    return(
        <div className="country_display">
            <div className="component_header_holder">
                <h2>Dives</h2>
            </div>

            <div className="country_form_container">
                <DiveForm 
                    locations={props.locations}
                    handleNewDive={props.handleNewDive}
                />
            </div>

            <div className="panelDivider" />

            <div className="country_list_container">
                <DiveList dives = {props.dives} deleteDive = {props.deleteDive} setEditDive = {props.setEditDive} />
            </div>

                
        </div>
    )
}
export default DiveContainer;