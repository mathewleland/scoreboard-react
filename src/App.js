import React from 'react';
import './App.css';
import $ from 'jquery';

//set an interval here to check the API every second or so?
 $.getJSON('https://example.com').then(function(data) {
   App.incrementScoreA(data.playerAScore);
   App.incrementScoreB(data.playerBScore);
 });

class App extends React.Component {

  constructor() {
    super();
    this.incrementScoreA = this.incrementScoreA.bind(this);
    this.incrementScoreB = this.incrementScoreB.bind(this);

    this.state = {
      playerAName: "Mathew",
      playerBName: "Alex",
      playerAScore: 0,
      playerBScore: 0,
      playerAimgSrc: '',
      playerBimgSrc: ''
    }
  }



  incrementScoreA(newScore) {
    this.setState({playerAScore: newScore});
  }

  incrementScoreB(newScore) {
    this.setState({playerBScore: newScore});
  }

  render() {
    return (
      <div className="App">
        <div className="playerScore">
          <h1>
            <span className="scoreNum">{this.state.playerAScore}</span>
              :
            <span className="scoreNum">{this.state.playerBScore}</span>

          </h1>
        </div>


        <div className='playerInfo'>
          {this.state.playerAName}
        </div>
        <div className='playerInfo'>
          {this.state.playerBName}
        </div>
      </div>
    );
  }
}

export default App;
