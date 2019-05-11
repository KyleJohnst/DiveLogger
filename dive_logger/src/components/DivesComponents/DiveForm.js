import React, {Component} from 'react';


class DiveForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            locations: [],
            dive: {
                siteName: "",
                location: "",
                gasType: "",
                startGas: null,
                endGas: null,
                tankVol: null,
                diveTime: null,
                maxDepth: null,
                avgDepth: null,
                latitude: "",
                longitude: ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            })
        }


    render(){
        const locationNode = this.props.locations.map((location, index) => {
            return <option key = {index} value = {location["_links"].self.href} >{location.name}</option>
        })

        return(
            <>
            <div>
                <h3>DiveForm</h3>
            </div>
            <div>
                <form>
                    <div>
                        <label htmlFor = "siteName">Site Name</label>
                        <input type = "text" onChange = {this.handleChange} name = "siteName" value = {this.state.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor = "location">Location</label>
                        <select name = "location" onChange = {this.handleChange} >
                            <option disabled selected>Select Location</option>
                            {locationNode}
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "gasType">Gas Type</label>
                        <select name = "gasType" onChange = {this.handleChange} >
                            <option disabled selected>Choose Gas</option>
                            <option>AIR</option>
                            <option>NITROX</option>
                            <option>TRIMIX</option>
                            <option>HELIOX</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "startPres">Start Pressure</label>
                        <input name = "startGas" type = "number" onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor = "endPres">End Pressure</label>
                        <input name = "endGas" type = "number" onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor = "tankVol">Tank Vol</label>
                        <input name = "tankVol" type = "number" onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor = "maxDepth">Max Depth</label>
                        <input name = "maxDepth" type = "number" onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor = "avgDepth">Average Depth</label>
                        <input name = "avgDepth" type = "number" onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor = "diveTime">Dive Time</label>
                        <input name = "diveTime" type = "number" onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor = "latitude">Location Latitude</label>
                        <input name = "latitude" type = "text" onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor = "longitude">Location Longitude</label>
                        <input name = "longitude" type = "text" onChange = {this.handleChange} />
                    </div>
                    <div>
                        <button>Save</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default DiveForm;