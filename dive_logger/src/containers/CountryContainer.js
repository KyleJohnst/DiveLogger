import React, {Component} from 'react';
import LocationList from '../components/LocationComponents/LocationList';
import CountryForm from '../components/LocationComponents/CountryForm';
import './CSS/CountryContainer.css';

class LocationContainer extends Component {
    render(){
        return(
            <div className = "country_display">
            <div className = "component_header_holder"><h3 className = "component_header">Countries</h3></div>
            <CountryForm className = "country_form_container" locations = {this.props.locations} handleNewLocation = {this.props.handleNewLocation} />
            <LocationList className = "country_list_container" viewLocation = {this.props.viewLocation} 
            locations = {this.props.locations}
            /> 
            </div>
        )
    }
}
export default LocationContainer;