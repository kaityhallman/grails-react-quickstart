import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Vehicles extends Component {
  render() {
    function renderVehicleRow(vehicle) {
      return (
        <tr key={vehicle.id}>
          <td>{vehicle.id}</td>
          <td>{vehicle.name}</td>
          <td>{vehicle.make.name}</td>
          <td>{vehicle.model.name}</td>
          <td>{vehicle.driver.name}</td>
        </tr>
      );
    }

    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Make</td>
              <td>Model</td>
              <td>Driver</td>
            </tr>
          </thead>
          <tbody>
            {this.props.vehicles.map(renderVehicleRow)}
          </tbody>
        </Table>
      </div>
    );
  }
}

Vehicles.propTypes = {
  vehicles: PropTypes.array,
};

export default Vehicles;
