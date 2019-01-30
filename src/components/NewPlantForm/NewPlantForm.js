import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class NewPlantForm extends Component {
    constructor() {
        super();
        this.state = {
            newPlant: {
                name: '',
                quantity: 0,
                box_id: '',
            }
        }
    }

    handleNameChange = event => {
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                name: event.target.value,
            }
        });
    }

    handleQuantityChange = event => {
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                quantity: event.target.value,
            }
        });
    }

    handleBoxChange = event => {
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                box_id: event.target.value,
            }
        });
    }

    addNewPlant = event => {
        event.preventDefault();
        // Create a saga that listens for 'ADD_PLANT'
        this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.newPlant })
        this.setState({
            newPlant: {
                name: '',
            }
        });
    }

    // Populate the select drop down on page load
    componentDidMount() {
        this.getBoxes();
    }

    // Get boxes to populate the select drop down
    getBoxes = () => {
        axios({
            method: 'GET',
            url: '/api/plant/boxes'
        }).then((response) => {
            const action = {type: 'SET_BOXES', payload: response.data}
            this.props.dispatch(action);
        }).catch((error) => {
            console.log(error);
            alert('something went wrong');
        })
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                {/* DO NOT MODIFY THIS FORM FOR BASE MODE */}
                <form onSubmit={this.addNewPlant}>
                    <input type='text' value={this.state.newPlant.name} onChange={this.handleNameChange} />
                    <input type='text' value={this.state.newPlant.quantity} onChange={this.handleQuantityChange} />
                    <select onChange={this.handleBoxChange} value={this.state.newPlant.box_id}>
                        <option value="">Select Box</option>
                        {this.props.reduxState.boxList.map((box, i) => {
                            return <option key={i} value={box.id}>{box.location}</option>
                        })}
                    </select>
                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(NewPlantForm);
