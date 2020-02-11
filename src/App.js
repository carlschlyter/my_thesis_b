import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import StartPage from './components/StartPage';
import Choices from './components/Choices';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Guessing from './components/pages/Guessing';
import GuessResults from './components/pages/GuessResults';
import Toplist from './components/pages/Toplist';
import RegUser from './components/RegUser';
import './App.css';
import axios from 'axios';


class App extends Component {

  state = {
    choices: []
  }

componentDidMount(){
  axios.get('http://localhost/examensarbete_a/api/game/read.php')
  .then(res => this.setState({ choices: res.data}))
  // .then(res => console.log(res.data))
}

//Register User
regUser = (firstName, lastName, email, userName, passWord, city) => {
  axios.post('http://localhost/examensarbete_a/api/user/create.php', {
    firstName: firstName,
    lastName: lastName,
    email: email,
    userName: userName,
    passWord: passWord,
    city: city
  })
  .then(res => this.setState({ regUser:
  [...this.state.regUser, res.data] }));
}

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <StartPage  />
                <Choices choices={this.state.choices}/> 
              </React.Fragment>
            )} />
            <Route path="/register" render={props => (
              <React.Fragment>
                <Register />
                <RegUser regUser={this.regUser}/>
              </React.Fragment>
            )} />
            <Route path="/login" component={Login} />
            <Route path="/guessing" component={Guessing} />
            <Route path="/guessResults" component={GuessResults} />
            <Route path="/toplist" component={Toplist} />
          </div>
        </div>        
      </Router>
    );
  }
}

export default App;
