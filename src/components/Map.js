import React, { Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import {PageHeader} from 'react-bootstrap'


class Map extends Component {
  render() {
   const MyGoogleMap = withScriptjs (withGoogleMap((props) => (
      <GoogleMap
        defaultCenter = { { lat: 55.40375599999999, lng:  10.40237} }
        defaultZoom = { 11 }
      >
      
      {this.props.placesOfInterest.map((venue, index) => 
        <Marker
          key = {index}
          name = {venue.name}
          position = {{lat: venue.location.lat, lng: venue.location.lng}}
          onClick ={() => {this.props.toggleInfoWindow(index)}}
          animation = {this.props.desiredPlace === index ? window.google.maps.Animation.BOUNCE: null}
          >
            {this.props.desiredPlace === index && (
              <InfoWindow
              onCloseClick={this.props.toggleInfoWindow}>               
              <div className="info-window" aria-label = "info window" tabIndex = "0">
                <h3>{venue.name}</h3>
                <h4>{venue.location.formattedAddress[0]}</h4>
                <h5>{venue.location.formattedAddress[1]}</h5>
              </div>
              </InfoWindow>
            )}
      
        </Marker>
      )}
      </GoogleMap>
    ) ));

   return(
      <div className = "my-google-map">
        <div className = "my-odensedk-map" role = "application">
          <PageHeader className = "header">
            Kindergartens in Odense, Denmark
          </PageHeader>
          
          <MyGoogleMap
            googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_MykAjK0nyi4YZ8Fvki215doVtyIMer8&v=3.exp&libraries=geometry,drawing,places"
            loadingElement = {<div style={{ height: `100%` }} />}
            containerElement = {<div style={{ height: `400px`, width: '100%' }} />}
            mapElement = {<div style={{ height: `100%` }} />}
          />
        </div>
        
        <footer className = "footer">
          <p>Odense, Denmark neighbourhood map, created with react-google-maps, all locations fetched using Axios from Foursquare API</p>
        </footer>
        
      </div>
   )
   }
}

export default Map