import React, { Component } from 'react';
import ChoiceItem from './ChoiceItem';
import PropTypes from 'prop-types';

export default class Choices extends Component {
    render() {
        console.log(this.props.choices)
        return this.props.choices.map(choice => (
            <ChoiceItem key={choice.MatchID} choice={choice}/>
        )); 
    }
}

//PropTypes
Choices.propTypes = {
    choices: PropTypes.array.isRequired    
}
