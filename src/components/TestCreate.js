import React, { Component } from 'react'

export class TestCreate extends Component {

    state = {
        TestID:''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
     });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.testCreate(this.state.TestID);

        this.setState({ TestID: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={regFormStyle}>
                    <input className="std-input" type="text" name="TestID" placeholder="Add Test ID" value={this.state.TestID} onChange={this.onChange}/><br/>   
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
}

export default TestCreate