import React, { Component } from 'react'

export class TestCreate extends Component {

    state = {
        TestID:'',
        TestName: ''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
     });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.testCreate(this.state.TestID);
        this.props.testCreate(this.state.TestName);

        this.setState({ TestID: ''});
        this.setState({ TestName: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={regFormStyle}>
                    <input className="std-input" type="text" name="TestID" placeholder="Add id" value={this.state.TestID} onChange={this.onChange}/><br/>
                    <input className="std-input" type="text" name="TestName" placeholder="Add name " value={this.state.TestName} onChange={this.onChange}/><br/>   
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