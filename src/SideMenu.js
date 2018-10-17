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

    render() {
        let restaurants;
        let match; 
        return (
            <div className="sideMenu">
                <nav className="navbar navbar-dark bg-dark" id="navMenu">
                    <span className="navbar-span" id="navbar-span">
                    Local Eats
                    <form className="form-inline align-items-center col-auto">
                        <input className="form-control mr-sm-1" type="search" placeholder="filter" aria-label="filter"/>
                        <ul className="list-unstyled">
                        
                        </ul>
                    </form>
                    </span>
                </nav>
            </div>
        )
    }
}

export default SideMenu;