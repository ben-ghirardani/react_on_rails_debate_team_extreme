import React, { Component } from 'react';
import CardTray from '../component/card_tray'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        // gets updated with seed data from back-end when componentDidMount gets called.
        characters: []
    }
  }

  componentDidMount() {
    this.getDebaters();
  }

  getDebaters() {
      let url = "http://localhost:5000/debaters"
      this.makeRequest(url);
    }

  // when I do more requests, add a callback that takes in 
  // the 'results' for this.setState( { characters: results } )
  makeRequest(url) {
      let request = new XMLHttpRequest();
      request.open('GET', url);
      request.addEventListener('load', () => {
        if (request.status !== 200) return;
        let jsonString = request.responseText;
        let results = JSON.parse(jsonString);
        this.setState( { characters: results } )
      });
      request.send();
    }
  
  render() {
    return (
      // might need to change "main page" as I expand the scope of the app, as this will
      // no longer be the main page.
      <div className="main-page">
        <CardTray characters={ this.state.characters } />
      </div>
    );
  }
}

export default App;