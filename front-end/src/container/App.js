import React from 'react';
import MainPage from '../component/main_page';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
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
      <MainPage/>
    );
  }
}

export default App;