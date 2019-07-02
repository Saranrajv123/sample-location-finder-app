import React, { Component } from "react";
import { connect } from "react-redux";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

class Map extends Component {

  state = {
    selectedPlace: null
  }

  render() {
    console.log('this.props.availableCarDetails', this.props.availableCarDetails)
    const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 13.061267, lng: 80.254402 }}
      defaultZoom={12}
      // center = {{ lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng) }}
    >
      {this.props.availableCars.cars.rides &&
        this.props.availableCars.cars.rides.map(item =>
          item.driver_details.map(d => 
            <Marker 
              position={{ lat: parseFloat(d.latitude), lng: parseFloat(d.longitude)  }}
              onClick={() => {
                this.setState({ selectedPlace: d })
              }}
            >
               {this.state.selectedPlace && (
            <InfoWindow>
              <div>Place</div>
            </InfoWindow>
          )}
            </Marker>
          )
        )}

         
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `657px`, width: "588px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    availableCars: state.availableCars,
    availableCarDetails: state.availableCarDetails
  };
};
export default connect(mapStateToProps)(Map);
