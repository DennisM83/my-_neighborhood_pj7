import React, { Component } from 'react';
import Map from './Map.js'
import './App.css';
import './Style.css'
import SquareAPI from './API/';

class App extends Component {

  componentDidMount() {
    SquareAPI.search({
      ll: '28.688239,-81.399993',
      query: "food",
      limit: 10
    }).then(result => console.log(result))
  }

  render() {
    return (
      <div className="App">
        <Map/>
      </div>
    );
  }
}

export default App;
