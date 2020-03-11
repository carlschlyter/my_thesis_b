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
import Test from './components/pages/Test';
import RegUser from './components/RegUser';
import TestCreate from './components/TestCreate';
import AddChoice from './components/AddChoice';
import './App.css';
import axios from 'axios';
// import uuid from 'uuid';


class App extends Component {

  state = {
    choices: [
      // {
      //   MatchID: '11',
      //   MatchName: 'Spain-Greece'
      // },
      // {
      //   MatchID: '12',
      //   MatchName: 'Portugal-France'
      // },
      // {
      //   MatchID: '13',
      //   MatchName: 'Iceland-Norway'
      // }
    ]    
  }


componentDidMount(){
  axios.get('http://localhost/examensarbete_a/api/game/read.php')
  .then(res => this.setState({ choices: res.data }))
  // .then(res => console.log(res.data))
}

//Register User
regUser = (FirstName, LastName, Email, UserName, PassWord, City) => {

  axios.post('http://localhost/examensarbete_a/api/user/create.php', {
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    UserName: UserName,
    PassWord: PassWord,
    City: City
  })
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // });
  .then(function (res) {
    console.log(res);
    //res => this.setState({ regUser: [...this.state.regUser, res.data] });
  })
  .catch(function(error){
    console.log(error);
  });
  // .then(res => this.setState({ regUser:
  //   res.data }));
  // .then(res =>   console.log(this.state.regUser));
}

//Test Create
testCreate = (TestID, TestName) => {
  // console.log(TestID);
  axios.post('http://localhost/examensarbete_a/api/test/create.php', {
      TestID: TestID,    
      TestName: TestName
  })
  .then(res => this.setState({ testCreate:
   res.data }));
}

//Add Choice
addChoice = (MatchName) => {
  console.log(MatchName)
  axios.post('http://localhost/examensarbete_a/api/game/create.php', {
    // MatchID: uuid(),
    MatchName
  })
  .then(res => this.setState({ addChoice:
   res.data }));

  // const newChoice = {
  //   MatchID: MatchID,
  // }

  // this.setState({
  //   choices: [...this.state.choices, newChoice]
  // });
}

  render() {
    // console.log(this.state.choices)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <StartPage  />
                <AddChoice addChoice={this.addChoice}/>
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
            <Route path="/test" render={props => (
              <React.Fragment>
                <Test />
                <TestCreate testCreate={this.testCreate}/>
              </React.Fragment>
            )} />
          </div>
        </div>        
      </Router>
    );
  }
}

export default App;
