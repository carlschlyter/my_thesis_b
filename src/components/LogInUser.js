import React, { Component } from 'react';

export default class LogInUser extends Component {

    state = {
        UserName:'',
        PassWord:''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value,
     });

    onSubmit = (e) => {
        e.preventDefault();
        
        this.props.regUser({
            UserName: this.state.UserName,
            PassWord: this.state.PassWord
        });
    
        this.setState({ UserName: ''});
        this.setState({ PassWord: ''});

    }
        
    render() {
        return (
            <div>                            
                <form onSubmit={this.onSubmit} style={logInFormStyle}>
                    <input className="std-input" id="UserName" type="text" name="UserName" placeholder="UserName" value={this.state.UserName} onChange={this.onChange}/><br/>
                    <input className="std-input" id="PassWord" type="text" name="PassWord" placeholder="PassWord" value={this.state.PassWord} onChange={this.onChange}/><br/>
                    <input className="btn" id="submitBtn" type="submit" name="skicka" value="Submit"/><br></br>
                </form>
            </div>
        )
    }
}

const logInFormStyle = {
    background: 'lightGrey',
    padding: '20px',
    textAlign: 'center'
};