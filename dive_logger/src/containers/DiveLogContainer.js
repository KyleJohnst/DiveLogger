import React, {Component} from 'react';
import LocationContainer from './LocationContainer';
import LocationDetail from '../components/LocationComponents/LocationDetail';
import Request from '../helpers/Request';
import NavBar from '../NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DiveContainer from './DiveContainer';
import DiveForm from '../components/DivesComponents/DiveForm';
import EditDive from '../components/DivesComponents/EditDive';



class DiveLogContainer extends Component {
        constructor(props) {
            super(props)
            this.state = {
                locations: [],
                dives: [],
                locationView: null,
                diveEdit: null,
                redirectPage: false
            }
            this.handleViewLocation = this.handleViewLocation.bind(this);
            this.handleNewLocation = this.handleNewLocation.bind(this);
            this.counter = this.counter.bind(this);
            this.handleNewDive = this.handleNewDive.bind(this);
            this.findWithAttr = this.findWithAttr.bind(this);
            this.deleteDive = this.deleteDive.bind(this);
            this.setEditDive = this.setEditDive.bind(this);
            this.addEditedDive = this.addEditedDive.bind(this);
            this.setRedirect = this.setRedirect.bind(this);
            this.renderRedirect = this.renderRedirect.bind(this);
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
            this.findWithAttr(this.state.locations, "name", newDive)
        }

        // Counts how many locations exist in the location array to help create the temp links
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

        // Creates a new location
        handleNewLocation(newLocation){
            const prevState = this.state.locations;
            const x = this.counter() + 1;
            // creates a temporary link that can be used within the app to avoid hitting the DB again.
            const fixedLocation = {...newLocation, "_links": {
                                        "self": {
                                            "href": `http://localhost:8080/api/locations/${x}`}
                                        }}
            const newState = [...prevState, fixedLocation];
            this.setState({locations: newState})
        }

        deleteDive(id){
            const request = new Request();
            const url = `api/dives/${id}`;
            request.delete(url);
            let prevState = this.state.dives;
            let ind = this.findWithAttr(prevState, "id", id);
            prevState.splice(ind, 1);
            this.setState({dives: prevState});
        }

        setEditDive(dive){
            this.setState({diveEdit: dive})
        }

        addEditedDive(dive){
            let prevState = this.state.dives;
            let index = this.findWithAttr(prevState, "id", dive.id);
            prevState.splice(index, 1);
            this.setState({dives: prevState});
        }

        setRedirect(){
            this.setState({redirectPage: true});
            this.renderRedirect();
            this.setState({redirectPage: false});
        }

        renderRedirect(){
            if (this.state.redirectPage) {
                console.log("Render Redirect is been fired");
                // return <Redirect to = '/alldives' />
            }
        }

        // Finds an object in arrays that match our needs. 
          findWithAttr(array, attr, value) {
              for (var i = 0; i < array.length; i += 1) {
                  if ((array[i][attr]) === value) {
                      return i;
                  }
              }
              return -1;
          }

    render(){
        return(
            <>
            <h2>DiveLogMain</h2>
            <Router>
            {this.renderRedirect()}
            <NavBar/>
            <Switch>
                <Route exact path = "/locations" render = {() => {
                    return <LocationContainer 
                    viewLocation = {this.handleViewLocation}
                    locations = {this.state.locations}
                    handleNewLocation = {this.handleNewLocation}/>
                    }}/>
                
                <Route exact path = "/location_detail" render = {() => {
                    return <LocationDetail location = {this.state.locationView} setEditDive = {this.setEditDive} deleteDive = {this.deleteDive} />
                }} />
                
                <Route exact path = "/alldives" render = {() => {
                    return <DiveContainer dives = {this.state.dives} deleteDive = {this.deleteDive} setEditDive = {this.setEditDive} />
                }} />

                <Route exact path = "/newdive" render = {() => {
                    return <DiveForm locations = {this.state.locations} handleNewDive = {this.handleNewDive}/>
                }}/>

                <Route exact path = "/editdive" render = {() => {
                    return <EditDive dive = {this.state.diveEdit} locations = {this.state.locations} handleNewDive = {this.handleNewDive} editedDive = {this.addEditedDive} redirect = {this.setRedirect} history={this.history} />
                }} />

            </Switch>

            </Router>
            </>
        )
    }
}

export default DiveLogContainer;