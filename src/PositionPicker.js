import React, { Component } from 'react';

class PositionPicker extends Component {

  handleChange = (e) => {
    this.props.onFilterList(e.target.value);
  }

  render() {
    return (
    <div>
      <select name="positions" onChange={this.handleChange}>
        <option value="All">All</option>
        <option value="QB">QB</option>
        <option value="RB">RB</option>
        <option value="WR">WR</option>
        <option value="TE">TE</option>
      </select>
    </div>
  );
  }
}

export default PositionPicker;