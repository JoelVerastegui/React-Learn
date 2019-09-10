import React from 'react';
import logo from './logo.svg';
import './App.css';

import { players } from './players.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players,
      player: {
        name: '',
        hp: 0,
        mp: 0,
        kills: 0
      }
    }
    this.createHero = this.createHero.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  createHero(event) {
    event.preventDefault();
    this.setState({
      players: [...this.state.players, this.state.player]
    })
  }

  handleInput(e) {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState(prevState => ({
      player: {
        ...prevState.player,
        [name]: value
      }
    })
    )
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
          First Blood
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-auto">
              <div className="card mt-4">
                <div className="card-header bg-secondary text-white">
                  New Hero
                </div>
                <div className="card-body">
                  <form className="text-left" onSubmit={this.createHero}>
                    <div className="form-group">
                      <label>Name</label>
                      <input name="name" className="form-control" placeholder="Name" onChange={this.handleInput}></input>
                      <small className="form-text text-muted">Enter a cool name!</small>
                    </div>
                    <div className="form-group">
                      <label>HP</label>
                      <input name="hp" className="form-control" placeholder="HP" onChange={this.handleInput}></input>
                    </div>
                    <div className="form-group">
                      <label>MP</label>
                      <input name="mp" className="form-control" placeholder="MP" onChange={this.handleInput}></input>
                    </div>
                    <div className="form-group">
                      <label>Kills</label>
                      <input name="kills" className="form-control" placeholder="Kills" onChange={this.handleInput}></input>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success">Create</button>
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
