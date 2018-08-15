import React, { Component } from 'react';
import './Players.css';

class Player extends Component {

  handleChangeColor = () => {
    const newColor = this.props.player.color === 'white' ? 'green' : 'white';
    this.props.onColorChange(newColor, this.props.player.Rank);
  }
  
  render() {
    const { Rookies, Rank, Pos, color, visible } = this.props.player;

    if (!visible) return null;

    return ( 
      <div className="Players-div" style={{background:color}} onClick={this.handleChangeColor}>
        <h1>{Rank}. {Rookies}</h1><h2>{Pos}{color === 'green' && <b> - Drafted</b>}</h2>
      </div>
    );
  }
}

export default Player;