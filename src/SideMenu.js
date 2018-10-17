import React, { Component } from 'react';
import './Style.css';
import escapeRegExp from 'escape-string-regexp';

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

    componentDidUpdate() {
        console.log(this.props.venues)
    }

    render() {

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
                {this.props.openMenu &&
                    <nav className="navbar navbar-dark bg-dark" id="navMenu">
                        <span className="navbar-span" id="navbar-span">
                        Local Eats
                        <form className="form-inline align-items-center col-auto">
                            <input className="form-control mr-sm-1" type="search" placeholder="filter" value={this.state.query} onChange={(event) => {this.reviseQuery(event.target.value)}} aria-label="filter"/>
                            <ul className="list-unstyled">
                                {restaurants.map((element) => {
                                    return <li key={element.id}>{element.name}</li>
                                })}
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