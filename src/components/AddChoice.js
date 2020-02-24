import React, { Component } from 'react'

export class AddChoice extends Component {
    state = {
        MatchID: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addChoice(this.state.MatchID);
        this.setState({MatchID: ''});
    }

    onChange = (e) => this.setState({ [e.target.name]:
    e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="MatchID" 
                    placeholder="Add Choice"
                    value={this.state.MatchID}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                />
            </form>
        )
    }
}

export default AddChoice
