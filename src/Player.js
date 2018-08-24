import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './Player.css';

class Player extends Component {

  handleChangeColor = () => {
    const newColor = this.props.player.color === 'white' ? '#4CAF50' : 'white';
    this.props.onColorChange(newColor, this.props.player.Rank);
  }
  
  render() {
    const { Rookies, Rank, Pos, color, visible } = this.props.player;

    if (!visible) return null;

    return ( 
      <Card className="Players-div" style={{background:color}} onClick={this.handleChangeColor}>
        <h1>{Rank}. {Rookies}</h1><h2>{Pos}{color === '#4CAF50' && <strong> - Drafted</strong>}</h2>
      </Card>
    );
  }
}

export default Player;