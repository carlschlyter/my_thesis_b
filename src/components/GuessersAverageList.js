import React, { Component } from 'react';
import GuessersAverageListItem from "./GuessersAverageListItem";
import PropTypes from 'prop-types';
import axios from 'axios';

export default class GuessersAverageList extends Component {

    state = {
        guessersAverageListItems: [

        ]
    }

    componentDidMount(){
        axios.get('http://localhost/examensarbete_a/api/bets/read.php')
        .then(res => this.setState({ guessersAverageListItems: res.data }))
        // .then(res => console.log(res.data))
      }

    render() {
        return this.state.guessersAverageListItems.map((guessersAverageListItem) => (
            <GuessersAverageListItem key={guessersAverageListItem.MatchID} guessersAverageListItem={guessersAverageListItem}/>
            ));
    }
}

//PropTypes
GuessersAverageList.propTypes = {
    guessersAverageListItems: PropTypes.array
}
