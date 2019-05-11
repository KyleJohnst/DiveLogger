import React, {Component} from 'react';
import LocationList from '../components/LocationComponents/LocationList';
import LocationForm from '../components/LocationComponents/LocationForm';

class LocationContainer extends Component {
    render(){
        return(
            <>
            <h3>LocationContainer</h3>
            <LocationForm handleNewLocation = {this.props.handleNewLocation} />
            <LocationList viewLocation = {this.props.viewLocation} 
            locations = {this.props.locations}
            /> 
            </>
        )
    }
}
export default LocationContainer;