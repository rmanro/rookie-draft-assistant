import React, { Component } from 'react';
import './PositionPicker.css';

class PositionPicker extends Component {

  handleChange = (e) => {
    this.props.onFilterList(e.target.value);
  }

  render() {
    return (
    <div className='picker-div'>
        <button value="All" onClick={this.handleChange}>All</button>
        <button value="QB" onClick={this.handleChange}>QB</button>
        <button value="RB" onClick={this.handleChange}>RB</button>
        <button value="WR" onClick={this.handleChange}>WR</button>
        <button value="TE" onClick={this.handleChange}>TE</button>
    </div>
  );
  }
}

export default PositionPicker;