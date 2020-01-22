import React, { Component } from 'react';
import StartPage from './components/StartPage';
import Choices from './components/Choices';
import Topnav from './components/Topnav';
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
        <Topnav />
        <StartPage  />
        <Choices choices={this.state.choices}/>
      </div>
    );
  }
}

export default App;
