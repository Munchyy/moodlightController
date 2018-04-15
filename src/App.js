import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios';
import { HuePicker } from 'react-color';
import './App.css';

class App extends Component {
  onClear = () => {
    console.log('clear');
    axios.get('http://moodlight:3000/clear').then(console.log);
  }
  onColourPick = (colour) => {
    console.log(colour);
    const num = parseInt(colour.hex.replace('#', ''), 16);
    const arr = Array(...{ length: 32 }).map(() => num);
    console.log(arr);
    axios.post('http://moodlight:3000/display', { leds: arr }).then(console.log);
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <Button bsStyle="primary" onClick={this.onClear}>Clear</Button>
        <HuePicker
          width="90%"
          height="30px"
          onChangeComplete={this.onColourPick}
        />
      </div>
    );
  }
}

export default App;
