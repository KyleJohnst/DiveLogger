import React, {Component} from 'react';
import Request from '../../helpers/Request';
import Countries from '../../helpers/countries.json';
let countryJson = require('../../helpers/countries.json');

class LocationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            dives: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {this.setState({name: event.target.value})}

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.name === "") {return }
        //if (!countryJson.name.include(this.state.name)) {return console.log("Country name did not match: ", countryJson[0].name);}
        const request = new Request();
        request.post('/api/locations', this.state);
        this.props.handleNewLocation(this.state);
        this.setState({
            name: ""
        });
    }

    render(){
        return(
            <div>
                <h4>Add new country</h4>
                <form>
                    <label htmlFor = "name"> Location Name </label>
                    <input 
                    placeholder = "Indonesia, etc"
                    required
                    value = {this.state.name}
                    name = "name"
                    type = "text"
                    onChange = {this.handleChange}/>
                    <button type = "submit" onClick = {this.handleSubmit}>Save</button>
                </form>
            </div>
        )
    }
}
export default LocationForm;