import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import playersData from './csvjson';
import Player from './Player';
import PositionPicker from './PositionPicker';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {

  state = {
    players: [],
    drafting: false
  };

  componentDidMount = () => {
    this.setState({ 
      players: playersData.map(player => Object.assign({}, player, { color: 'white', visible: true }))
    });
  }

  componentDidUpdate() {
   if(!this.state.drafting) ReactDOM.findDOMNode(this).scrollIntoView();
  }

  handleFilterChange = (position) => {
    if (position === 'All') 
      this.setState({ 
        players: this.state.players.map(player => Object.assign({}, player, { visible: true })),
        drafting: false
      });
    else
    this.setState({ players: this.state.players.map(player => 
      (player.Pos.includes(position)) ?
        Object.assign({}, player, { visible: true })
      :
        Object.assign({}, player, { visible: false })
      ), drafting: false});
  }

  handleColorChange = (color, rank) => {
    this.setState({ players: this.state.players.map(player => 
      (player.Rank === rank) ? Object.assign({}, player, { color: color }) : player 
    ), drafting: true});
  }

  render() {
    const { players } = this.state;

    return (
      <div className="App">
        <AppBar position="sticky" color="default">
          <PositionPicker onFilterList={this.handleFilterChange}/>
        </AppBar>
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