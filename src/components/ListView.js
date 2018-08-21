import React, { Component } from 'react'
import {ListGroup, ListGroupItem, FormControl} from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'

class ListView extends Component {
    state = {
        filterInput: '',
      
    }
    
    filterQuery = (filteredPlaces, filterInput) => filteredPlaces.filter(venue => venue.name.toLowerCase().includes(filterInput.toLowerCase()));
    
    updateQuery = (filterInput) => {
    this.setState({filterInput: filterInput})
    this.props.updateFileteredPlaces(this.filterQuery(this.props.placesOfInterest, filterInput))
    }
    
    changeHandler = (event) => {
        this.setState({filterInput: event.target.value});
    }

    render () {
           
        const listItems = this.filterQuery(this.props.placesOfInterest, this.state.filterInput).map((venue, index) => {
            return (
                <ListGroup
                key = {venue.id}
                onClick = {() => {this.props.toggleInfoWindow(index)}}
                onKeyPress = {() => {this.props.toggleInfoWindow(index)}}
                >
                <ListGroupItem>{venue.name}</ListGroupItem>
                
                </ListGroup>
            )
        })

        return (
            <Menu noOverlay>
            <div> 
                <form
                onSubmit = {this.props.getLocations.bind(null, this.state.filterInput)}
                > 
                <FormControl
                    type = "text"
                    placeholder = "Filter Results"
                    name = "filterInput"
                    id = "filterInput"
                    onChange = {this.changeHandler}
                />

                
                    <div>
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                </form>
            </div>
            </Menu>
            
            
        )
    }

      
}
export default ListView