import React, { Component } from 'react'

export class RegUser extends Component {

    state = {
        firstName:'',
        lastName:'',
        email:'',
        userName:'',
        passWord:'',
        city:'',
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value,
     });

    render() {
        return (
            <form style={regFormStyle}>
                <input className="std-input" id="FirstName" type="text" name="firstName" placeholder="FirstName" value={this.state.firstName} onChange={this.onChange}/><br/>   
                <input className="std-input" id="LastName" type="text" name="lastName" placeholder="LastName" value={this.state.lastName} onChange={this.onChange}/><br/>
                <input className="std-input" id="Email" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/><br/>
                <input className="std-input" id="UserName" type="text" name="userName" placeholder="UserName" value={this.state.userName} onChange={this.onChange}/><br/>
                <input className="std-input" id="PassWord" type="text" name="passWord" placeholder="PassWord" value={this.state.passWord} onChange={this.onChange}/><br/>
                <input className="std-input" id="City" type="text" name="city" placeholder="City" value={this.state.city} onChange={this.onChange}/><br/>
                <input className="btn" id="submitBtn" type="submit" name="skicka" value="Submit"/><br></br>
            </form>
        )
    }
}

const regFormStyle = {
    background: 'lightGrey',
    padding: '20px'
}

export default RegUser
