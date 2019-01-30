import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class PlantTable extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
    }

    render() {
        return (
            <div>
                <h3>This is the plant table</h3>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
                <table className="garden">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* plants go here */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlantTable);
