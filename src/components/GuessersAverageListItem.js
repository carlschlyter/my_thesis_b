import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GuessersAverageListItem extends Component {
    render() {
        return (
            <div style={itemStyle}>
                <p> 
                { this.props.guessersAverageListItem.MatchName } {': Match date: '} 
                { this.props.guessersAverageListItem.MatchDate } { ', Goals Home Bet Average: ' }
                { this.props.guessersAverageListItem.GoalsHomeBetAvg } { ', Goals Away Bet Average: '}
                { this.props.guessersAverageListItem.GoalsAwayBetAvg }
                </p> 
            </div>
        )
    }
}

//PropTypes
GuessersAverageListItem.propTypes = {
    guessersAverageListItem: PropTypes.object
}

const itemStyle = {
    backgroundColor: 'lightGrey',
    color: 'white',
    padding: '3px',
    borderBottom: '1px white dotted'
}
