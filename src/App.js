import React, { Component } from 'react';
import './App.css';
import playersData from './csvjson';
import Player from './Player';
import PositionPicker from './PositionPicker';

class App extends Component {

  state = {
    players: []
  };

  componentDidMount = () => {
    this.setState({ 
      players: playersData.map(player => Object.assign({}, player, { color: 'white', visible: true }))
    });
  }

  handleFilterChange = (position) => {
    if (position === 'All') 
      this.setState({ 
        players: this.state.players.map(player => Object.assign({}, player, { visible: true }))
      });
    else
    this.setState({ players: this.state.players.map(player => 
      (player.Pos.includes(position)) ?
        Object.assign({}, player, { visible: true })
      :
        Object.assign({}, player, { visible: false })
      )});
  }

  handleColorChange = (color, rank) => {
    this.setState({ players: this.state.players.map(player => 
      (player.Rank === rank) ? Object.assign({}, player, { color: color }) : player 
    )});
  }

  render() {
    const { players } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DRAFT ASSISTANT</h1>
          <PositionPicker onFilterList={this.handleFilterChange}/>
        </header>
          {players.map(player => <Player
          player={player}
          key={player.Rank}
          onColorChange={this.handleColorChange}
          />)}
      </div>
    );
  }
}

export default App;