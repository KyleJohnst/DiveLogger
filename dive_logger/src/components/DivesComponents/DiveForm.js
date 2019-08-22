import React, {Component} from 'react';
import Request from '../../helpers/Request';


class DiveForm extends Component {
    constructor(props){
        super(props);
        this.state = {
                siteName: "",
                location: "",
                gasType: "",
                startGasPres: "",
                endGasPres: "",
                tankVol: "",
                diveTime: "",
                maxDepth: "",
                avgDepth: "",
                latitude: "",
                longitude: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        handleSubmit(event){
            event.preventDefault();
            const request = new Request();
            request.post('/api/dives', this.state);
            this.props.handleNewDive(this.state);
            this.setState({
                siteName: "",
                location: "",
                gasType: "",
                startGasPres: "",
                endGasPres: "",
                tankVol: "",
                diveTime: "",
                maxDepth: "",
                avgDepth: "",
                latitude: "",
                longitude: ""
            })
        }


    render(){
        const locationNode = this.props.locations.map((location, index) => {
            return <option key = {index} value = {location["_links"].self.href} >{location.name}</option>
        })

        return(
            <>
            <div>
                <h3>Add New Dive</h3>
            </div>
            <div>
                <form>
                    <div>
                        <label htmlFor = "siteName">Site Name</label>
                        <input type = "text" onChange = {this.handleChange} name = "siteName" value = {this.state.siteName}/>
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
                        <input name = "startGasPres" type = "number" value = {this.state.startGasPres} onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor = "endPres">End Pressure</label>
                        <input name = "endGasPres" type = "number" value = {this.state.endGasPres} onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor = "tankVol">Tank Vol</label>
                        <input name = "tankVol" type = "number" onChange = {this.handleChange} value = {this.state.tankVol}/>
                    </div>
                    <div>
                        <label htmlFor = "maxDepth">Max Depth</label>
                        <input name = "maxDepth" type = "number" onChange = {this.handleChange} value = {this.state.maxDepth}/>
                    </div>
                    <div>
                        <label htmlFor = "avgDepth">Average Depth</label>
                        <input name = "avgDepth" type = "number" onChange = {this.handleChange} value = {this.state.avgDepth}/>
                    </div>
                    <div>
                        <label htmlFor = "diveTime">Dive Time</label>
                        <input name = "diveTime" type = "number" onChange = {this.handleChange} value = {this.state.diveTime}/>
                    </div>
                    <div>
                        <label htmlFor = "latitude">Location Latitude</label>
                        <input name = "latitude" type = "text" onChange = {this.handleChange} value = {this.state.latitude}/>
                    </div>
                    <div>
                        <label htmlFor = "longitude">Location Longitude</label>
                        <input name = "longitude" type = "text" onChange = {this.handleChange} value = {this.state.longitude}/>
                    </div>
                    <div>
                        <button onClick = {this.handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default DiveForm;