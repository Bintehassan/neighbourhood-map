import React, { Component } from 'react'
import {ListGroup, ListGroupItem, FormControl} from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'


class ListView extends Component {
    state = {
        filterInput: '',
      
    }
    
    updateQuery = (filterInput) => {
    this.setState({filterInput: filterInput})
    this.props.updateFilteredPlaces(this.filterQuery(this.props.placesOfInterest, filterInput))
    }
    
    filterQuery = (filteredPlaces, filterInput) => filteredPlaces.filter(venue => venue.name.toLowerCase().includes(filterInput.toLowerCase()));

    // changeHandler = (event) => {
    //     this.setState({filterInput: event.target.value});
    // }

    render () {
           
        const listItems = this.filterQuery(this.props.placesOfInterest, this.state.filterInput).map((venue, index) => {
            return (
               
                <ListGroup
                key = {venue.id}
                onClick = {() => {this.props.toggleInfoWindow(index)}}
                onKeyPress = {() => {this.props.toggleInfoWindow(index)}}
                tabIndex = "0"
                role = "button"
                >
                <ListGroupItem>{venue.name}</ListGroupItem>
                
                </ListGroup>
                
            )
        })

        return (
            <Menu noOverlay>
                <div className = "filter" aria-label="kindergartens in Odense, Denmark" tabIndex={0}> 
                    {/* <form
                    onSubmit = {this.props.getLocations.bind(null, this.state.filterInput)}
                    >  */}
                    <FormControl 
                        type = "text"
                        placeholder = "Filter Results"
                        value = {this.state.filterInput}
                        // name = "filterInput"
                        // id = "filterInput"
                        onChange = {(event) => this.updateQuery(event.target.value)}
                        aria-label = "filter locations"
                        role = "search"
                    />

                    
                        <div className = "list-of-kgs" aria-label = "kindergartens in Odense, Denmark">
                            <ul>
                                {listItems}
                            </ul>
                        </div>
                    {/* </form> */}
                </div>
            </Menu>
            
            
        )
    }

      
}
export default ListView