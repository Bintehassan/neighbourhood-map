import React, { Component } from 'react'
import './App.css';
import Map from './components/Map'
import axios from 'axios'
import ListView from './components/ListView'

class App extends Component {
  state = {
    placesOfInterest: [],
    desiredPlace: {},
    filteredPlaces: []
    
  }
 
   componentDidMount() {
     this.getLocations();
   }
 
   getLocations = (query) => {
     const endPoint = "https://api.foursquare.com/v2/venues/search?"
     const params = {
      client_id: "24CCXRLNNRBGWGQIXRCI2V2A1DDMXV433DKEZI5TGSOPZ1VH",
      client_secret: "Q41VRAQBU5TR1RMYT5NFJWIZLTBRX3DQFQJIMEZAB3UGNI1H",
      ll: "55.4118845, 10.4411767",
      intent: "browse",
      radius: 30000,
      query: "bornehave", //kindergartens or daycares
      v: "20180813"
     };
 
     axios.get(endPoint + new URLSearchParams(params)).then((response) => {
      this.setState({
        placesOfInterest: response.data.response.venues,
        filteredPlaces: response.data.response.venues
      })
     
    })
      .catch((error) => {alert ("Awh! Snap")
      console.log("Failed to fetch data from Foursquare");
    })

  } 

  updateFilteredPlaces = (filteredPlaces) => {
    this.setState({placesOfInterest: filteredPlaces})
  }

  toggleInfoWindow = (desiredPlace) => {
    this.setState({desiredPlace: desiredPlace})
  }

  render() {
    return (
      <div className="App">
        <Map
          placesOfInterest = {this.state.placesOfInterest}
          desiredPlace = {this.state.desiredPlace}
          toggleInfoWindow = {this.toggleInfoWindow}     
        />

        <ListView
          placesOfInterest = {this.state.placesOfInterest}
          toggleInfoWindow = {this.toggleInfoWindow}
          getLocations = {this.getLocations}
          updateFilteredPlaces = {this.updateFilteredPlaces}
        />
      </div>
    );
  }
}

export default App;
