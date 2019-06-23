import React, {
  Component
} from 'react';
import Chart from 'react-google-charts';



class Charts extends Component {

  render() {

    let GeoBarData = [
      ['Country', 'Dives'],
    ];

    let lineGraphData = [
      ['Dive', 'Dive Time' , 'Average Depth', 'MaxDepth'],
    ]

    //This builds our data structure for the GeoMaps chart
    this.props.locations.map(location => {
      let locationName = location.name;
      let diveCounter = 0;

      location.dives.forEach(dive => {
        diveCounter += 1;
      });
      
      return (
        GeoBarData.push([locationName, diveCounter])
      );
    })

    // builds the lineChart data structure
    let diveNo = 0;
    this.props.dives.forEach(dive => { 
      let time = dive.diveTime;
      let depth = dive.maxDepth;
      let avgDepth = dive.avgDepth;
      diveNo += 1;
      lineGraphData.push([diveNo, time, avgDepth, depth])
    })



    return (

      <div>
        <div>
          <div>
            <h3>World view showing all your dives</h3>
          </div>
          <Chart
            loader={<div>Loading GeoChart</div>}
            chartType = "GeoChart"
            data = {GeoBarData}
            options = {{backgroundColor: '#81d4fa'}}
          /> 
        </div>
        <div>
          <div>
            <h3>Country and dives</h3>
          </div>
          <Chart
            loader={<div>Loading Bar Chart</div>}
            chartType = "BarChart"
            data = {GeoBarData}
          />
        </div>
        <div>
          <div>
            <h3>Dive Statistics</h3>
          </div>
          <Chart
          loader={<div>Loading Dive Time Chart</div>}
          chartType = "LineChart"
          data = {lineGraphData}
          options={{
            hAxis: {
              title: 'Dive Number',
            },
            vAxis: {
              title: 'Dive Time, depth and avg depth',
            },
          }}
          />
        </div>

      </div>
    )
  }
}

export default Charts;