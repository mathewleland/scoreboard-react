import React from 'react';
import './App.css';
// import $ from 'jquery';
import Leaders from './leaders';
import { Link } from 'react-router';


// let refreshScore = setInterval(function() {
//   $.getJSON('https://example.com').then(function(data) {
//     this.incrementScoreA(data.playerAScore);
//     this.incrementScoreB(data.playerBScore);
//   })
// },1000);

class App extends React.Component {

  constructor() {
    super();
    this.incrementScoreA = this.incrementScoreA.bind(this);
    this.incrementScoreB = this.incrementScoreB.bind(this);
    this.toggleLeaderboard = this.toggleLeaderboard.bind(this);

    this.state = {
      playerAName: "Mathew",
      playerBName: "Alex",
      playerAScore: 0,
      playerBScore: 0,
      playerAimgSrc: 'https://s3-us-west-1.amazonaws.com/personalprojectfiles/profile.jpg',
      playerBimgSrc: 'https://s3-us-west-1.amazonaws.com/orphankittenproject/kmvernau.jpeg',
      leaderboard: false
    }
  }


  incrementScoreA(newScore) {
    this.setState({playerAScore: newScore});
  }

  incrementScoreB(newScore) {
    this.setState({playerBScore: newScore});
  }

  toggleLeaderboard() {
    if (this.state.leaderboard) {
      this.setState({leaderboard:false});
    }
      else {
        this.setState({leaderboard:true});
      }
  }


  render() {

    if (this.state.leaderboard) {
      return (
        <div className="App">
          <button onClick={this.toggleLeaderboard}> Go back to score</button>
          <h1 className='leaderboardHeader'> All time leaderboard</h1>
            <table>
              <tbody>
              <tr>
              <td>Player</td>
              <td>Wins</td>
              <td>Losses</td>
              </tr>
              <tr>
              <td> Ruchi</td>
              <td>4</td>
              <td>2</td>
              </tr>
              <tr>
              <td>Mathew</td>
              <td>3</td>
              <td>3</td>
              </tr>
              <tr>
              <td>Alex</td>
              <td>1</td>
              <td>5</td>
              </tr>
              </tbody>
            </table>
        </div>
      )
    }  else return (
      <div className="App">
        <button onClick={this.toggleLeaderboard}>See Leaderboard</button>


        <div className="playerScore">
          <h1>
            <span className="scoreNum" id="scoreA" onClick={this.incrementScoreA}>{this.state.playerAScore}</span>
              :
            <span className="scoreNum" id="scoreB">{this.state.playerBScore}</span>

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
