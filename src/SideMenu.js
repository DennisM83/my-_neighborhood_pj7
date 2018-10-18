import React, { Component } from 'react';
import './Style.css';
import escapeRegExp from 'escape-string-regexp';
import VenueList from './VenueList.js'

class SideMenu extends Component {
    /* this sets the query for the filter */
    state = {
        query: ''
    }

    filterTheVenues = () => {

    }

    /*this updates the query when the user enters in a character */
    reviseQuery = (event) => {
        this.setState({
            query: event.target.value
        })
        let markers = this.props.venues.map(venue => {
            let doesMatch = venue.name.toLowerCase().includes(event.target.value.toLowerCase())
            let marker = this.props.markers.find(element => element.id === venue.id);
            if(doesMatch) {
                marker.isVisible = true;
            } else {
                marker.isVisible = false;
            }
            return marker;
        });
        this.props.updateToTheState(markers)
    }

    render() {
        
        /* filters through the venue names and checks to see if any characters match the venue names */
        /*let restaurants;
        let match;
        if(this.state.query) {
            match = new RegExp(escapeRegExp(this.state.query), 'i')
            restaurants = this.props.venues.filter(element => 
                match.test(element.name)
            )} else {
                restaurants = this.props.venues
            }*/

        return (
            <div className="sideMenu">
            {/* checks the toggle open and close */}
                {this.props.openMenu &&
                    <nav className="navbar navbar-dark bg-dark" id="navMenu">
                        <span className="navbar-span" id="navbar-span">
                        Local Eats
                        {/* the filter for the list items */}
                        <form className="form-inline align-items-center col-auto">
                            <input className="form-control mr-sm-1" type="search" placeholder="Filter Restaurants" value={this.state.query} onChange={this.reviseQuery} aria-label="filter"/>
                            <ul className="list-unstyled">
                            {/* dynamically renders the list-items based on the venue ID and name */}
                                {this.props.venues && this.props.venues.map((element, index) => (
                                   <VenueList
                                    key={index}
                                    {...element}
                                    sideBarClick={this.props.sideBarClick}
                                   /> 
                                ))}
                            </ul>
                        </form>
                        </span>
                    </nav>
                }
            </div>
        )
    }
}

export default SideMenu;