import React, { Component } from 'react'

export class RegUser extends Component {

    state = {
        FirstName:'',
        LastName:'',
        Email:'',
        UserName:'',
        PassWord:'',
        City:''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value,
     });

    onSubmit = (e) => {
        e.preventDefault();
        
        this.props.regUser({
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            UserName: this.state.UserName,
            PassWord: this.state.PassWord,
            City: this.state.City
        });
        
        // this.props.regUser(this.state.LastName);
        // this.props.regUser(this.state.Email);
        // this.props.regUser(this.state.UserName);
        // this.props.regUser(this.state.PassWord);
        // this.props.regUser(this.state.City);

        this.setState({ FirstName: ''});
        this.setState({ LastName: ''});
        this.setState({ Email: ''});
        this.setState({ UserName: ''});
        this.setState({ PassWord: ''});
        this.setState({ City: ''});

        document.querySelector("#regMessageBox").innerHTML = "Du är registrerad!"
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={regFormStyle}>
                    <input className="std-input" id="FirstName" type="text" name="FirstName" placeholder="First Name" value={this.state.FirstName} onChange={this.onChange}/><br/>   
                    <input className="std-input" id="LastName" type="text" name="LastName" placeholder="Last Name" value={this.state.LastName} onChange={this.onChange}/><br/>
                    <input className="std-input" id="Email" type="text" name="Email" placeholder="Email" value={this.state.Email} onChange={this.onChange}/><br/>
                    <input className="std-input" id="UserName" type="text" name="UserName" placeholder="User Name" value={this.state.UserName} onChange={this.onChange}/><br/>
                    <input className="std-input" id="PassWord" type="text" name="PassWord" placeholder="Pass Word" value={this.state.PassWord} onChange={this.onChange}/><br/>
                    <input className="std-input" id="City" type="text" name="City" placeholder="City" value={this.state.City} onChange={this.onChange}/><br/>
                    <input className="btn" id="submitBtn" type="submit" name="skicka" value="Submit"/><br></br>
                    <p id="regMessageBox"></p>
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

// const regUserData = {
//     FirstName: this.state.FirstName,
//     LastName: this.state.LastName,
//     Email: this.state.Email,
//     UserName: this.state.UserName,
//     PassWord: this.state.PassWord,
//     City: this.state.City
// };

export default RegUser
