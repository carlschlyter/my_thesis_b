import React, { Component } from 'react';
import StartPage from './components/StartPage';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    choices: []
  }

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({ choices: res.data}))
}

  render() {
    return (
      <div className="App">
        <StartPage />
      </div>
    );
  }
}

export default App;
