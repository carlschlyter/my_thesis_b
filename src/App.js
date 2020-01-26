import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import Choices from './components/Choices';
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
      <Router>
        <div className="App">
          <Route path="/" render={props => (
            <React.Fragment>
              <StartPage  />
              <Choices choices={this.state.choices}/> 
            </React.Fragment>
          )} />
        </div>        
      </Router>
    );
  }
}

export default App;
