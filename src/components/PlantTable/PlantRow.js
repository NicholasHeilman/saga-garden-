import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlantRow extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
    }

    render() {
        return (
            <tr>
                <td>{this.props.plant.name}</td>
                <td>{this.props.plant.location}</td>
                <td>{this.props.plant.quantity}</td>
            </tr>
        );
    }
}

export default connect()(PlantRow);
