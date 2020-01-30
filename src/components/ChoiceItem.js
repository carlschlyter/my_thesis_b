import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChoiceItem extends Component {
    render() {
        return (
            <div style={ itemStyle }>
                <p> {this.props.choice.id} {' '} { this.props.choice.title } </p>
            </div>
        )
    }
}

//PropTypes
ChoiceItem.propTypes = {
    choice: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: 'lightGrey',
    color: 'white',
    padding: '3px',
    borderBottom: '1px white dotted'
}
