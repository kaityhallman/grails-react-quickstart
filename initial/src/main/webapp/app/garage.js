import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Vehicles from './vehicles';

require('./../styles/style.css');

class Garage extends Component {
  constructor() {
    super();

    this.state = {
      vehicles: [
        {
          id: 1,
          name: 'Turtle McGurtle',
          make: {
            name: 'Scion',
            id: 1,
          },
          model: {
            name: 'xB',
            id: 1,
          },
          driver: {
            name: 'Kaity',
            id: 1,
          },
        },
      ],
    };
  }

  render() {
    const { vehicles } = this.state;

    return (
      <div>
        <Vehicles vehicles={vehicles} />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('garage'));
