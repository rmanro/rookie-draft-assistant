import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './Player.css';
import cross from './hospital.png';

class Player extends Component {

  handleChangeColor = () => {
    const newColor = this.props.player.color === 'white' ? '#4CAF50' : 'white';
    this.props.onColorChange(newColor, this.props.player.Rank);
  }
  
  render() {
    const { Rookies, Rank, Pos, color, visible, target, Team, IR } = this.props.player;

    if (!visible) return null;

    return ( 
      <Card className="Players-div" style={{background:color}} onClick={this.handleChangeColor}>
        <h1>{Rank}. {Rookies} <span className="team">{Team}</span></h1>
        <h2>{Pos} {IR && <img src={cross} alt="Injured"/>}{target && <span className="target"> TARGET</span>}
        {color === '#4CAF50' && <strong> - Drafted</strong>}</h2>
      </Card>
    );
  }
}

export default Player;