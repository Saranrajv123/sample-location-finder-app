import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class Location extends Component {
    state = {
        lat: null,
        long: null,
        errorMessage: null,

    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: 'err' }),

        );
    }

    renderContent = () => {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        else {
            return <Spinner message='Please accept the location request' />;
        }

    }


    // getLocation = () => {
    //     window.navigator.geolocation.getCurrentPosition(
    //         position => {
    //             this.setState({ lat: position.coords.latitude })
    //         },
    //         err => {
    //             this.setState({ errorMessage: err })
    //         }
    //     )
    // }
    render() {
        return (
            <div className={`border red`}>
                {this.renderContent()}
            </div>
        )
    }
}

export default Location;