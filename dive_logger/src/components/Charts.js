import React, {
  Component
} from 'react';
import Chart from 'react-google-charts';



class Charts extends Component {

  render() {

    let chartData = [
      ['Country', 'Dives'],
    ];

    //This builds our data structure for the GeoMaps chart
    this.props.locations.map((location, index) => {
      let locationName = location.name;
      let diveCounter = 0;
      location.dives.forEach(dive => {
        diveCounter += 1;
      });
      return (
        chartData.push([locationName, diveCounter])
      );
    })

    return (

      <div>
      <Chart width = {'500px'}
      height = {'300px'}
      chartType = "GeoChart"
      data = {chartData}
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey = "API Key Here"
      />  
      </div>
    )
  }
}

export default Charts;