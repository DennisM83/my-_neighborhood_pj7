import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


/*From Tom Chen @ https://tomchentw.github.io/react-google-maps/ */
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap 
            defaultZoom = { 14 }
            defaultCenter = {
            {   lat: 28.688239, lng: -81.399993 }}
        >
        {props.isMarkerShown && < Marker position = {
                {   lat: 28.688239, lng: -81.399993 }}
            />}
        </GoogleMap>
))

window.gm_authFailure = () => {
    alert('Oops! looks like something went wrong!')
};

class Map extends Component {
    render() {
        return(
            <MyMapComponent
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