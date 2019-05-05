import React, {Component} from 'react';
import LocationList from '../components/LocationList';
import LocationForm from '../components/LocationForm';

class LocationContainer extends Component {
    render(){
        return(
            <>
            <h3>LocationContainer</h3>
            <LocationForm/>
            <LocationList viewLocation = {this.props.viewLocation} 
            locations = {this.props.locations}
            /> 
            </>
        )
    }
}
export default LocationContainer;