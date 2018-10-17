import React, { Component } from 'react';
import Map from './Map.js'
import './App.css';
import './Style.css'
import SquareAPI from './API/';
import TopNav from './TopNav.js'
import SideMenu from './SideMenu.js'

class App extends Component {

  state = {
    venues: [],
    markers: [],
    openMenu: true
  }

  toggle = () => {
    this.setState(state =>({
      openMenu: !state.openMenu
    }))
  }

  componentDidMount() {
    SquareAPI.search({
      ll: "28.688239,-81.399993",
      query: "restaurant",
      limit: 10
    }).then(theVenues => {
      let { venues } = theVenues.response;
      let markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true
        }
      });
      this.setState({ venues, markers })
    });
  }

  render() {
    return (
      <div className="App">
        <TopNav toggle={this.toggle}/>
        <SideMenu openMenu={this.state.openMenu} venues={this.state.venues}/>
        <Map {...this.state}/>
      </div>
    );
  }
}

export default App;
