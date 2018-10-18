import React, { Component } from 'react';
import './Style.css';
import escapeRegExp from 'escape-string-regexp';
import VenueList from './VenueList.js'

class SideMenu extends Component {
    /* this sets the query for the filter */
    state = {
        query: ''
    }

    /*this updates the query when the user enters in a character */
    reviseQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

    render() {
        
        /* filters through the venue names and checks to see if any characters match the venue names */
        let restaurants;
        let match;
        if(this.state.query) {
            match = new RegExp(escapeRegExp(this.state.query), 'i')
            restaurants = this.props.venues.filter(element => 
                match.test(element.name)
            )} else {
                restaurants = this.props.venues
            }

        return (
            <div className="sideMenu">
            {/* checks the toggle open and close */}
                {this.props.openMenu &&
                    <nav className="navbar navbar-dark bg-dark" id="navMenu">
                        <span className="navbar-span" id="navbar-span">
                        Local Eats
                        {/* the filter for the list items */}
                        <form className="form-inline align-items-center col-auto">
                            <input className="form-control mr-sm-1" type="search" placeholder="Filter Restaurants" value={this.state.query} onChange={(event) => {this.reviseQuery(event.target.value)}} aria-label="filter"/>
                            <ul className="list-unstyled">
                            {/* dynamically renders the list-items based on the venue ID and name */}
                                {this.props.venues && restaurants.map((element, index) => (
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