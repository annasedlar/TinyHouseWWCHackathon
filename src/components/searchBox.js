import React, { Component } from 'react';
import StateDropdown from './stateDropdown';

class SearchBox extends Component {
  handleOnSubmit() {
    console.log('submitted!')
  }
  
  render() {
    return (
      <div className="col-lg-4 search-box">
        <h3>Search Regulations</h3>
        <p>Enter in your desired location to see if they have any regulations for Tiny Home zoning.</p>
        { this.props.page==='zoning' ? <StateDropdown/> : <input type="text" name="zoning-search" id="zoning-search" className="search-input" placeholder="Search By State" onSubmit={this.getDropdownState} /> }
        
        <div className="row">
          <input type="submit" onClick={this.handleOnSubmit} className="btn btn-primary" />
        </div>
      </div>
    );
  }
}

export default SearchBox;
