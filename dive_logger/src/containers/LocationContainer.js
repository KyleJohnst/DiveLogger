import React, {Component} from 'react';
import LocationList from '../components/LocationList';

class LocationContainer extends Component {
    render(){
        return(
            <>
            <h3>LocationContainer</h3>
            < LocationList viewLocation = {this.props.viewLocation} 
            locations = {this.props.locations}
            /> 
            </>
        )
    }
}
export default LocationContainer;