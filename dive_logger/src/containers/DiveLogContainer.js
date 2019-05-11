import React, {Component} from 'react';
import LocationContainer from './LocationContainer';
import LocationDetail from '../components/LocationComponents/LocationDetail';
import Request from '../helpers/Request';
import NavBar from '../NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DiveContainer from './DiveContainer';
import DiveForm from '../components/DivesComponents/DiveForm';
import { timingSafeEqual } from 'crypto';



class DiveLogContainer extends Component {
        constructor(props) {
            super(props)
            this.state = {
                locations: [],
                dives: [],
                locationView: null
            }
            this.handleViewLocation = this.handleViewLocation.bind(this);
            this.handleNewLocation = this.handleNewLocation.bind(this);
            this.counter = this.counter.bind(this);
            this.handleNewDive = this.handleNewDive.bind(this);
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

        handleNewDive(newDive){
            const prevDives = this.state.dives;
            const newDives = [...prevDives, newDive];
            this.setState({dives: newDives})
        }

        counter(){
            let x = 0
            this.state.locations.forEach(location => {
                x += 1;
            })
            return x;
        }

        handleViewLocation(location){
            this.setState({locationView: location})
        }

        handleNewLocation(newLocation){
            const prevState = this.state.locations;
            const x = this.counter() + 1;
            const locationLink = {...newLocation, "_links": {
                                        "self": {
                                            "href": `http://localhost:8080/api/locations/${x}`}
                                        }}
            const newState = [...prevState, locationLink];
            this.setState({locations: newState})
        }

    render(){
        return(
            <>
            <h2>DiveLogMain</h2>
            <Router>
            <NavBar/>

            <Switch>
                <Route exact path = "/locations" render = {() => {
                    return <LocationContainer 
                    viewLocation = {this.handleViewLocation}
                    locations = {this.state.locations}
                    handleNewLocation = {this.handleNewLocation}/>
                    }}/>
                
                <Route exact path = "/location_detail" render = {() => {
                    return <LocationDetail location = {this.state.locationView} />
                }} />

                <Route exact path = "/alldives" render = {() => {
                    return <DiveContainer dives = {this.state.dives} />
                }} />

                <Route exact path = "/newdive" render = {() => {
                    return <DiveForm locations = {this.state.locations} handleNewDive = {this.handleNewDive}/>
                }}/>
            </Switch>

            </Router>
            </>
        )
    }
}

export default DiveLogContainer;