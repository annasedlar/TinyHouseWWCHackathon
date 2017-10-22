import React, { Component } from 'react';
import HomeSearch from '../components/homeSearch';

class SearchContainer extends Component {
  render() {
    return (
      <div className="page">
        <h1>Find Your Tiny Home</h1>
        <HomeSearch/>
      </div>
    );
  }
}

export default SearchContainer;
