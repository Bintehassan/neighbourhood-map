import React, { Component } from 'react'
import './App.css';
import Map from './components/Map'
import axios from 'axios'
import ListView from './components/ListView'
import {PageHeader} from 'react-bootstrap'

class App extends Component {
  state = {
    placesOfInterest: [],
    desiredPlace: {},
    filteredPlaces: []

    
  }
 
  componentDidMount() {
    this.getLocations();
  }

   //Fetch data from Foursquare and display error message in case of error
  getLocations = (query) => {
    const endPoint = "https://api.foursquare.com/v2/venues/search?"
    const params = {
    client_id: "24CCXRLNNRBGWGQIXRCI2V2A1DDMXV433DKEZI5TGSOPZ1VH",
    client_secret: "Q41VRAQBU5TR1RMYT5NFJWIZLTBRX3DQFQJIMEZAB3UGNI1H",
    ll: "55.4118845, 10.4411767",
    intent: "browse",
    radius: 10000,
    limit: 10,
    query: "bornehave", //kindergartens or daycares
    v: "20180813"
    };

    axios.get(endPoint + new URLSearchParams(params)).then((response) => {
    this.setState({
      placesOfInterest: response.data.response.venues,
      filteredPlaces: response.data.response.venues
    })
    
  })
    .catch((error) => {alert (`Awh! Snap! Failed to fetch data from Foursquare. ${error}`)
    
  })

  } 

  toggleInfoWindow = (desiredPlace) => {
    this.setState({desiredPlace: desiredPlace})
  }

  updateFilteredPlaces = (filteredPlaces) => {
    this.setState({filteredPlaces: filteredPlaces})
  }

  render() {
    return (
      <div className = "app" role = "main">
        <PageHeader className = "header" tabIndex="0">
          Kindergartens in Odense, Denmark
        </PageHeader>
        
              <ListView
              placesOfInterest = {this.state.placesOfInterest}
              toggleInfoWindow = {this.toggleInfoWindow}
              updateFilteredPlaces = {this.updateFilteredPlaces}
              />
            
              <Map
              placesOfInterest = {this.state.filteredPlaces}
              desiredPlace = {this.state.desiredPlace}
              toggleInfoWindow = {this.toggleInfoWindow}     
              />
          
             
      </div>
    )
  }
}

export default App
