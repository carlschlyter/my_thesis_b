import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ToplistItem extends Component {
    render() {
        return (
            <div style={itemStyle}>
                <p> 
                { this.props.toplistItem.BetterNick } {': Total points: '} 
                { this.props.toplistItem.TotPoints }
                </p> 
            </div>
        )
    }
}

//PropTypes
ToplistItem.propTypes = {
    toplistItem: PropTypes.object
}

const itemStyle = {
    backgroundColor: 'lightGrey',
    color: 'white',
    padding: '3px',
    borderBottom: '1px white dotted'
}

