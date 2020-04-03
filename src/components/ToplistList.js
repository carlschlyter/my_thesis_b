import React, { Component } from 'react';
import ToplistItem from "./ToplistItem";
import PropTypes from 'prop-types';
import axios from 'axios';

export default class ToplistList extends Component {

    state = {
        toplistItems: [
        ]
    }


    componentDidMount(){
        axios.get('http://localhost/examensarbete_a/api/user/toplist.php')
        .then(res => this.setState({ toplistItems: res.data }))
        // .then(res => console.log(res.data))
      }

      render() {
        return this.state.toplistItems.map((toplistItem) => (
        <ToplistItem key={toplistItem.BetterID} toplistItem={toplistItem}/>
        )); 
    }
}

//PropTypes
ToplistList.propTypes = {
    toplistItems: PropTypes.array
}


