import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


/*From Tom Chen @ https://tomchentw.github.io/react-google-maps/ */
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap 
            defaultZoom = { 10 }
            defaultCenter = {
            {   lat: 28.688239, lng: -81.399993 }}
        >
        { /*written by Forrest Walker - https://www.youtube.com/watch?v=cJ3sAG2Ybq4&index=4&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP */}
        {props.markers && props.markers.filter(marker => marker.isVisible).map((marker, index) => (
            <Marker key={index} position = {{ lat: marker.lat, lng: marker.lng }}/>
        ))
        }
        </GoogleMap>
))

window.gm_authFailure = () => {
    alert('Oops! looks like something went wrong!')
};

class Map extends Component {
    render() {
        return(
            <MyMapComponent
                {...this.props}
                isMarkerShown
                googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAbs0suPVRKY8V7nXTVVjoWeVZYJjxqQNU"
                loadingElement = { <div style = {{ height: `100%` }}/>}
                containerElement = { <div style = {{ height: `400px` }}/>}
                mapElement = {<div style = {{ height: `100vh` }}/>} 
            />
        )
    }
}

export default Map;