import React, { Component } from 'react';
// import uuid from 'uuid';

export class AddChoice extends Component {
    state = {
        // MatchID: uuid(),
        MatchName: ''
    }

    onChange = (e) => this.setState({ [e.target.name]:
        e.target.value });
        
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addChoice(this.state.MatchName);

        this.setState({MatchName: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="MatchName" 
                    placeholder="Add Choice"
                    value={this.state.MatchName}
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
