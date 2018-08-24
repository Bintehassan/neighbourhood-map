import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'


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
            <Menu noOverlay tabIndex = "0" aria-label="opens list of kindergartens in Odense Denmark">
                <div className = "filter" aria-label="kindergartens in Odense, Denmark" tabIndex={0}> 
                   
                    <input 
                        type = "text"
                        placeholder = "Filter Results"
                        value = {this.state.filterInput}
                        
                        onChange = {(event) => this.updateQuery(event.target.value)}
                        aria-label = "filter locations"
                        role = "search"
                    />

                    
                    <div className = "list-of-kgs">
                        <ul aria-label = "kindergartens in Odense, Denmark" role = "menu">
                        { this.filterQuery(this.props.placesOfInterest, this.state.filterInput).map((venue, index) => {
                        return (
                            
                            <ListGroup
                            aria-label = "kindergartens in Odense, Denmark" 
                            tabIndex = "0"
                            role = "button"
                            key = {venue.id}
                            onClick = {() => {this.props.toggleInfoWindow(index)}}
                            onKeyPress = {() => {this.props.toggleInfoWindow(index)}}
                            animation = {this.props.desiredPlace === index ? window.google.maps.Animation.BOUNCE: null}
                            >
                            
                            {venue.name}
                            
                            </ListGroup>
                            
                        )
                        }) }

                        </ul>
                    </div>
                  
                </div>
            </Menu>
              
        )
    }

      
}
export default ListView