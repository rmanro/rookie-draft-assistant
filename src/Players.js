import React, { Component } from 'react';
import './Players.css';

class Player extends Component {

  state = {
    color: 'white'
  };

  changeColor = () => {
    const newColor = this.state.color === 'white' ? 'green' : 'white';
    this.setState({ color: newColor });
  }
  
  render() {
    const { Rookies, Rank, Pos } = this.props.player;
    return ( 
      <div className="Players-div" style={{background:this.state.color}} onClick={this.changeColor}>
      <h1>{Rank}. {Rookies}</h1><h2>{Pos}</h2>
      {this.state.color === 'green' && <h4>Drafted</h4>}
      </div>
    );
  }
}

export default Player;