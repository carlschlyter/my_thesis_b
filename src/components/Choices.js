import React, { Component } from 'react';

export default class Choices extends Component {
    render() {
        return this.props.choices.map(choice => (
            <h3> { choice.id } {' '} { choice.title }</h3>
        )); 
    }
}
