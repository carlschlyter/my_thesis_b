import React, { Component } from 'react'

export default class CreateGuess extends Component {

    state = {
        BetterNick:'',
        MatchName:'',
        GoalsHomeBet:'',
        GoalsAwayBet:'',
        WinningTeamBet:''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value,
     });

     onSubmit = (e) => {
        e.preventDefault();
        
        this.props.createGuess({
            BetterNick: this.state.BetterNick,
            MatchName: this.state.MatchName,
            GoalsHomeBet: this.state.GoalsHomeBet,
            GoalsAwayBet: this.state.GoalsAwayBet,
            WinningTeamBet: this.state.WinningTeamBet
        });

        this.setState({ BetterNick: ''});
        this.setState({ MatchName: ''});
        this.setState({ GoalsHomeBet: ''});
        this.setState({ GoalsAwayBet: ''});
        this.setState({ WinningTeamBet: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={regFormStyle}>
                    <input className="std-input" id="BetterNick" type="text" name="BetterNick" placeholder="Better Nick" value={this.state.BetterNick} onChange={this.onChange}/><br/>   
                    <input className="std-input" id="MatchName" type="text" name="MatchName" placeholder="Match Name" value={this.state.MatchName} onChange={this.onChange}/><br/>
                    <input className="std-input" id="GoalsHomeBet" type="text" name="GoalsHomeBet" placeholder="Goals Home Bet" value={this.state.GoalsHomeBet} onChange={this.onChange}/><br/>
                    <input className="std-input" id="GoalsAwayBet" type="text" name="GoalsAwayBet" placeholder="Goals Away Bet" value={this.state.GoalsAwayBet} onChange={this.onChange}/><br/>
                    <input className="std-input" id="WinningTeamBet" type="text" name="WinningTeamBet" placeholder="Winning Team Bet" value={this.state.WinningTeamBet} onChange={this.onChange}/><br/>
                    <input className="btn" id="submitBtn" type="submit" name="skicka" value="Submit"/><br></br>
                </form>
            </div>
        )
    }
}

const regFormStyle = {
    background: 'lightGrey',
    padding: '20px',
    textAlign: 'center'
};