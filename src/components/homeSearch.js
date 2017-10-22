import React, {Component} from 'react';

import SearchBox from './searchBox';
import MapWithAMarker from "./map";
import '../styles/listings.css';

export class HomeSearch extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <div className="row search-map-wrapper">
        <SearchBox />  
        <MapWithAMarker
          className="col-md-8"  
          containerElement={<div className="mapWrapper"/>}
          mapElement={<div style={{ height: `100%` }} />} />
      </div>
    );
  }
}

export default HomeSearch;