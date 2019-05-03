import React, {Component} from 'react';
import LocationList from '../components/LocationList';
import LocationDetail from '../components/LocationDetail';

class LocationContainer extends Component {
    render(){
        return(
            <>
            <h3>LocationContainer</h3>
            <LocationList locations = {this.props.locations}/>
            <LocationDetail/>
            </>
        )
    }
}
export default LocationContainer;