import React, { Component } from 'react';
import ZoningSearch from '../components/zoningSearch';

class ZoningContainer extends Component {
  render() {
    return (
      <div className="page zoning-search">
        <div className="text-center intro-text">
          <h1>Where Can I Tiny Home?</h1>
          <p>
            Use the map and the state dropdown to look through state, county and city regulations on tiny home placement.
          </p>
        </div>  
        <ZoningSearch/>
      </div>
    );
  }
}

export default ZoningContainer;
