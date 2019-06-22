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
        <div>
          <Chart
            chartType = "GeoChart"
            data = {chartData}
            options = {{backgroundColor: '#81d4fa'}}
          /> 
        </div>
        <div>
          <Chart
            chartType = "BarChart"
            data = {chartData}
          />
        </div>

      </div>
    )
  }
}

export default Charts;