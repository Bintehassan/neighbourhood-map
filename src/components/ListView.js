import React, { Component } from 'react'
import {ListGroup, ListGroupItem, FormControl} from 'react-bootstrap'

class ListView extends Component {
    state = {
        filterInput: '',
      
    }
    
    updateQuery = (filterInput) => {
    this.setState({filterInput: filterInput})
    this.props.updateFilteredPlaces(this.filterQuery(this.props.placesOfInterest, filterInput))
    }
    
    filterQuery = (placesOfInterest, filterInput) => placesOfInterest.filter(venue => venue.name.toLowerCase().includes(filterInput.toLowerCase()));

    render () {
      return (
               
        <div className = "filter" aria-label="kindergartens in Odense, Denmark" tabIndex={0}> 
            
          <FormControl 
            type = "text"
            placeholder = "Filter Results"
            value = {this.state.filterInput}
            onChange = {(event) => this.updateQuery(event.target.value)}
            aria-label = "filter locations"
            role = "search"
          />

          
          <div className = "list-of-kgs">
              <ul aria-label = "kindergartens in Odense, Denmark" role = "navigation">
                { this.filterQuery(this.props.placesOfInterest, this.state.filterInput).map((venue, index) => {
                return (
                    
                    <ListGroup
                    aria-label = "kindergartens in Odense, Denmark" 
                    tabIndex = "0"
                    role = "button"
                    key = {venue.id}
                    onClick = {() => {this.props.toggleInfoWindow(index)}}
                    onKeyPress = {() => {this.props.toggleInfoWindow(index)}}
                    >
                    
                    <ListGroupItem>{venue.name}</ListGroupItem>
                    
                    </ListGroup>
                    
                  )
                  }) }

              </ul>
          </div>
            
        </div>
                         
      )
    }

      
}
export default ListView