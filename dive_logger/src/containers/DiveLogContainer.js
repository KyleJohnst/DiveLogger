import React, {Component} from 'react';
import LocationContainer from './LocationContainer';
import Request from '../helpers/Request';


class DiveLogContainer extends Component {
        constructor(props) {
            super(props)
            this.state = {
                locations: [],
                dives: []
            }
        }

        componentDidMount(){
            const request = new Request();

            const locationPromise = request.get("/api/locations");
            const divesPromise = request.get("/api/dives");

            const promises = [locationPromise, divesPromise];

            Promise.all(promises)
            .then(data => {
                this.setState({
                    locations:data[0]._embedded.locations,
                    dives: data[1]._embedded.dives
                })
            })
        }

    render(){
        return(
            <>
            <h2>DiveLogMain</h2>
            <LocationContainer locations = {this.state.locations}/>
            </>
        )
    }
}

export default DiveLogContainer;