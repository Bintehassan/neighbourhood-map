import React, { Component} from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'



class Map extends Component {
  
   render() {
   const MyGoogleMap = withGoogleMap((props) => (
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
         
          animation = {this.props.desiredPlace === index ? window.google.maps.Animation.Drop: null}
          >
             {this.props.desiredPlace === index && (
                <InfoWindow
                onCloseClick={props.onToggleOpen}>               
                <div className="info-window" aria-label = "infor window" tabIndex = "0">
                  <h3>{venue.name}</h3>
                  <p>{venue.location.formattedAddress[0]}</p>
                  <p>{venue.location.formattedAddress[1]}</p>
                </div>
                </InfoWindow>
              )}
       
        </Marker>
      )}
      </GoogleMap>
    ));

   return(
      <div className = "my-google-map">
           
        <div className = "my-odensedk-map" role = "application">
          <MyGoogleMap
            googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_MykAjK0nyi4YZ8Fvki215doVtyIMer8&v=3.exp&libraries=geometry,drawing,places"
            loadingElement = {<div style={{ height: `100%` }} />}
            containerElement = {<div style={{ height: `500px`, width: '100%' }} />}
            mapElement = {<div style={{ height: `100%` }} />}
          />
        </div>
        
        <footer className = "footer">
          <p>Odense, Denmark neighbourhood map, created with react-google-maps, all locations fetched using Axios from Foursquare API</p>
        </footer>
        
      </div>
   );
   }
};

export default Map