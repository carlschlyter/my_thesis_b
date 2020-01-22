import React, { Component } from 'react';
import ChoiceItem from './ChoiceItem';
import PropTypes from 'prop-types';

export default class Choices extends Component {
    render() {
        return this.props.choices.map(choice => (
            <ChoiceItem key={choice.id} choice={choice}/>
        )); 
    }
}

//PropTypes
Choices.propTypes = {
    choices: PropTypes.array.isRequired    
}
