import React, {Component} from 'react';
import Request from '../../helpers/Request';
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
        this.countryValidation = this.countryValidation.bind(this);
    }

    handleChange(event) {this.setState({name: event.target.value})}

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.name === "" || !this.countryValidation(this.state.name)) {return}
        const request = new Request();
        request.post('/api/locations', this.state);
        this.props.handleNewLocation(this.state);
        this.setState({
            name: ""
        });
    }

    countryValidation(countryName) {
        let validCountry = false;
        for (let i = 0; i < countryJson.length; i++) {
            const country = countryJson[i];
            if (country.name === countryName) {
                validCountry = true;
                break;
            }
        }
        return validCountry;
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