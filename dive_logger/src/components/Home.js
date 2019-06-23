import React from 'react';

  const Home = (props) => {
      const countryCount = props.countries.length;
      const diveCount = props.dives.length;
      
      //calculates hours spent underwater
      let timer = 0;
      props.dives.forEach(dive => {
          let time = 0;
          time = dive.diveTime/60;
          timer += time
      });

      const totDiveTime = timer.toFixed(2);

      return(
          <div>
              <h2>This is a general overview of your dive log</h2>
              <p>You have dived in {countryCount} countries.</p>
              <p>You have a total logged dive count of {diveCount}.</p>
              <p>You have spent a total of {totDiveTime} hours under water!</p>
          </div>
      )
  }

  export default Home;