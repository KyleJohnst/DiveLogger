import React, {Component} from 'react';
import Request from '../../helpers/Request';



class EditDive extends Component{
    constructor (props){
        super(props);
        this.state = {
                siteName: this.props.dive.siteName,
                location: this.props.dive.location,
                gasType: this.props.dive.gasType,
                startGasPres: this.props.dive.startGasPres,
                endGasPres: this.props.dive.endGasPres,
                tankVol: this.props.dive.tankVol,
                diveTime: this.props.dive.diveTime,
                maxDepth: this.props.dive.maxDepth,
                avgDepth: this.props.dive.avgDepth,
                latitude: this.props.dive.latitude,
                longitude: this.props.dive.longitude
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
            this.setState({
                [event.target.name]: event.target.value
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const request = new Request();
        let diveId = this.props.dive.id;
        request.update(`/api/dives /${diveId}`, this.state);
        this.props.editedDive(this.props.dive)
        this.props.handleNewDive(this.state);
        // this.props.redirect();
        this.props.history.push("/alldives");
    };

    render(){

        const locationNode = this.props.locations.map((location, index) => {
            return <option key = {index} value = {location["_links"].self.href} >{location.name}</option>
        })

        return(
            <>
            <div>
                <h3>Edit Dive</h3>
            </div>
            <div>
                <form>
                    <div>
                        <label htmlFor = "siteName">Site Name</label>
                        <input type = "text" onChange = {this.handleChange} name = "siteName" defaultValue = {this.state.siteName}/>
                    </div>
                    <div>
                        <label htmlFor = "location">Location</label>
                        <select name = "location" onChange = {this.handleChange} >
                            <option disabled defaultValue>Select Location</option>
                            {locationNode}
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "gasType">Gas Type</label>
                        <select name = "gasType" onChange = {this.handleChange} >
                            <option disabled defaultValue> Current gas: {this.props.dive.gasType}</option>
                            <option>AIR</option>
                            <option>NITROX</option>
                            <option>TRIMIX</option>
                            <option>HELIOX</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "startPres">Start Pressure</label>
                        <input name = "startGasPres" type = "number" onChange = {this.handleChange} defaultValue = {this.state.startGasPres} />
                    </div>
                    <div>
                        <label htmlFor = "endPres">End Pressure</label>
                        <input name = "endGasPres" type = "number" onChange = {this.handleChange} defaultValue = {this.state.endGasPres} />
                    </div>
                    <div>
                        <label htmlFor = "tankVol">Tank Vol</label>
                        <input name = "tankVol" type = "number" onChange = {this.handleChange} defaultValue = {this.state.tankVol} />
                    </div>
                    <div>
                        <label htmlFor = "maxDepth">Max Depth</label>
                        <input name = "maxDepth" type = "number" onChange = {this.handleChange} defaultValue = {this.state.maxDepth} />
                    </div>
                    <div>
                        <label htmlFor = "avgDepth">Average Depth</label>
                        <input name = "avgDepth" type = "number" onChange = {this.handleChange} defaultValue = {this.state.avgDepth} />
                    </div>
                    <div>
                        <label htmlFor = "diveTime">Dive Time</label>
                        <input name = "diveTime" type = "number" onChange = {this.handleChange} defaultValue = {this.state.diveTime} />
                    </div>
                    <div>
                        <label htmlFor = "latitude">Location Latitude</label>
                        <input name = "latitude" type = "text" onChange = {this.handleChange} defaultValue = {this.state.latitude} />
                    </div>
                    <div>
                        <label htmlFor = "longitude">Location Longitude</label>
                        <input name = "longitude" type = "text" onChange = {this.handleChange} defaultValue = {this.state.longitude} />
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
export default EditDive;