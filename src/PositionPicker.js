import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './PositionPicker.css';

class PositionPicker extends Component {

  handleChange = (position) => {
    this.props.onFilterList(position);
  }

  render() {
    return (
    <div className='picker-div'>
        <Button className="test" variant="contained" color="primary" onClick={() => { this.handleChange('All') }}>All</Button>
        <Button variant="contained" color="primary" onClick={() => { this.handleChange('QB') }}>QB</Button>
        <Button variant="contained" color="primary" onClick={() => { this.handleChange('RB') }}>RB</Button>
        <Button variant="contained" color="primary" onClick={() => { this.handleChange('WR') }}>WR</Button>
        <Button variant="contained" color="primary" onClick={() => { this.handleChange('TE') }}>TE</Button>
    </div>
  );
  }
}

export default PositionPicker;