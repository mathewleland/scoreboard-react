import React from 'react';
import './App.css';
import $ from 'jquery';

//set an interval here to check the API every second or so?
 // $.getJSON('https://example.com').then(function(data) {
 //   incrementScoreA(data.playerAScore);
 //   incrementScoreB(data.playerBScore);
 // });

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
      playerAimgSrc: 'https://s3-us-west-1.amazonaws.com/personalprojectfiles/profile.jpg',
      playerBimgSrc: 'https://s3-us-west-1.amazonaws.com/orphankittenproject/kmvernau.jpeg'
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
          <br/>
          <img src={this.state.playerAimgSrc}></img>
        </div>
        <div className='playerInfo'>
          {this.state.playerBName}
          <br/>
          <img src={this.state.playerBimgSrc}></img>
        </div>
      </div>
    );
  }
}

export default App;
