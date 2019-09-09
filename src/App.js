import React from 'react';
import logo from './logo.svg';
import './App.css';

import { players } from './players.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players
    }
  }
  render() {
    const playerList = this.state.players.map((player, i) => {
      return (
        <div className="col-md-4 p-4" key={i}>
          <div className="card">
            <div className="card-header bg-info text-white">
              <h4>{player.name}</h4>
            </div>
            <div className="card-body">
              <p className="card-text">HP: {player.hp}</p>
              <p className="card-text">MP: {player.mp}</p>
              <p className="card-text">Kills: {player.kills}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <div className="navbar shadow bg-danger text-white d-block text-center h5">
          Sebas se la come doblada y entera, SAPEEEEEEEEEEEEEEE
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-auto">
              <div className="card mt-4">
                <div className="card-header bg-secondary text-white">
                  New Hero
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label for="name">Name</label>
                      <input id="name" className="form-control" placeholder="Name"></input>
                    </div>
                    <div className="form-group">
                      <label for="hp">HP</label>
                      <input id="hp" className="form-control" placeholder="HP"></input>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                {playerList}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
