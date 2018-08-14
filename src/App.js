import React, { Component } from 'react';
import logo from './football.svg';
import './App.css';
import players from './csvjson';
import Players from './Players';
import PositionPicker from './PositionPicker';

class App extends Component {

  state = {
    players: []
  };

  componentDidMount = () => {
    this.setState({ players: players });
  }

  handleFilterChange = (position) => {
    if (position === 'All') this.setState({ players: players })
    else
    this.setState({ players: players.filter(player => player.Pos.includes(position)) });
  }

  render() {
    const { players } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Draft Assistant</h1>
          <PositionPicker onFilterList={this.handleFilterChange}/>
        </header>
          {players.map(player => <Players
          player={player}
          key={player.Rank}
          />)}
      </div>
    );
  }
}

export default App;
