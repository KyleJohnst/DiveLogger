import React, {Component} from 'react';
import Request from '../../helpers/Request';
import { Dropdown } from 'semantic-ui-react'
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

        const worky = [
            { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
            { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
            { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
            { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
            { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
            { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
            { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
            { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
            { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
            { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
            { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
            { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
            { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
            { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
            { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
            { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
            { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
            { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
            { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
            { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
            { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
            { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
            { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
          ]

        return(
            <Dropdown
              placeholder='Select Country'
              fluid
              search
              selection
              options={worky}
            />
        )
    }
}
export default LocationForm;



//   return(
//     <div>
//         <h4>Add new country</h4>
//         <form>
//             <label htmlFor = "name"> Location Name </label>
//             <input 
//             placeholder = "Indonesia, etc"
//             required
//             value = {this.state.name}
//             name = "name"
//             type = "text"
//             onChange = {this.handleChange}/>
//             <button type = "submit" onClick = {this.handleSubmit}>Save</button>
//         </form>
//     </div>
// )