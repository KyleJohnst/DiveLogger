import React from 'react';

  const Home = (props) => {
      const countryCount = props.countries.length;
      const diveCount = props.dives.length;
      
      //calculates hours spent underwater
      const totalTime = props.dives.forEach(dive => {
        let timer = 0;
        timer += dive.diveTime;
        let num = timer;
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        let x = rhours + " hour(s) and " + rminutes + " minute(s).";
        console.log("count", x);
        return x;
        });

        let x = totalTime;


      return(
          <div>
              <h2>This is a general overview of your dive log</h2>
              <p>You have dived in {countryCount} countries.</p>
              <p>You have a total logged dive count of {diveCount}.</p>
              <p>You have spent a total of {x} hours under water!</p>
          </div>
      )
  }

  export default Home;