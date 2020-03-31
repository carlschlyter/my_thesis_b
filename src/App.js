import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import Header from './components/layout/Header';
import HeaderLoggedIn from './components/layout/HeaderLoggedIn';
import StartPage from './components/StartPage';
import Choices from './components/Choices';
import Register from './components/pages/Register';
// import Login from './components/pages/Login';
// import Logout from './components/pages/Logout';
import Guessing from './components/pages/Guessing';
import GuessResults from './components/pages/GuessResults';
import Toplist from './components/pages/Toplist';
import RegUser from './components/RegUser';
import './App.css';
import axios from 'axios';
import ToplistList from './components/ToplistList';
// import LogInUser from './components/LogInUser';
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
regUser = ({FirstName, LastName, Email, UserName, PassWord, City}) => {

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
            {/* <Route render={props => (
              <React.Fragment>
                <Route exact path="/" render={props => (
                  <React.Fragment>
                    <Header />
                    <StartPage  />
                    <Choices choices={this.state.choices}/> 
                  </React.Fragment>
                )} />
                <Route path="/register" render={props => (
                  <React.Fragment>
                    <Header />
                    <Register />
                    <RegUser regUser={this.regUser}/>
                  </React.Fragment>
                )} />
                <Route path="/login" render={props => (               
                  <React.Fragment>
                    <Header />
                    <Login />
                    <LogInUser loginUser={this.loginUser}/>
                  </React.Fragment>  
                )} />
                <Route path="/toplist" render={props => (
                  <React.Fragment>
                    <Header />
                    <Toplist />
                  </React.Fragment>
                )} />
              </React.Fragment>
            )} />            */}
            <Route render={props => (
              <React.Fragment>
                <Route exact path="/" render={props => (
                  <React.Fragment>
                    <HeaderLoggedIn />
                    <StartPage  />
                    <Choices choices={this.state.choices}/> 
                  </React.Fragment>
                )} />
                <Route path="/register" render={props => (               
                  <React.Fragment>
                    <HeaderLoggedIn />
                    <Register />
                    <RegUser regUser={this.regUser}/>
                  </React.Fragment>  
                )} />
                <Route exact path="/guessing" render={props => (               
                  <React.Fragment>
                    <HeaderLoggedIn />
                    <Guessing />
                  </React.Fragment>  
                )} />
                <Route exact path="/guessresults" render={props => (               
                  <React.Fragment>
                    <HeaderLoggedIn />
                    <GuessResults />
                  </React.Fragment>  
                )} />
                <Route path="/toplist" render={props => (
                  <React.Fragment>
                    <HeaderLoggedIn />
                    <Toplist />
                    <ToplistList />
                  </React.Fragment>
                )} />
              </React.Fragment>
            )} />           
          </div>
        </div>        
      </Router>
    );
  }
}

export default App;
