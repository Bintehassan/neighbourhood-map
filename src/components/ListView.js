import React, { Component } from 'react'

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
                <li
                key = {venue.id}
                onClick = {() => {this.props.toggleInfoWindow(index)}}
                onKeyPress = {() => {this.props.toggleInfoWindow(index)}}
                >
                {venue.name}
                
                </li>
            )
        })

        return (
            <div> 
                <form
                onSubmit = {this.props.getLocations.bind(null, this.state.filterInput)}
                > 
                <input
                    type = "text"
                    placeholder = "Filter Results"
                    name = "filterInput"
                    id = "filterInput"
                    onChange = {this.changeHandler}
                />
                <button type="submit">Filter</button>

                    <div>
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                </form>
            </div>
            
            
        )
    }

      
}
export default ListView