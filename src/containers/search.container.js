import React, { Component } from 'react';
import HomeSearch from '../components/homeSearch';

class SearchContainer extends Component {
  render() {
    return (
      <div className="page">
        {(this.props.location.pathname === "/professionals") ?
          <h1>Find Professionals to Build or Fix Your Tiny Home</h1> :
          <h1>Find Your Tiny Home</h1>
        }
        <HomeSearch/>
      </div>
    );
  }
}

export default SearchContainer;
