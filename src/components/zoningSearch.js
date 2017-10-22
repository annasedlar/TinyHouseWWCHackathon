import React, {Component} from 'react';
import axios from 'axios';

import api from '../utils/api';
import SearchBox from './searchBox';
import MapWithAMarker from "./map";
import '../styles/listings.css';

export class ZoningSearch extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  state = {
    loading: true,
    selectedState: 'Georgia',
    selectedStateData: null
  }

  componentWillMount(props) {
    this.getDropdownState();
  }

  getDropdownState() {
    axios.get(api() + 'zoning/' + this.state.selectedState, {
      headers: {'Access-Control-Allow-Origin': '*'}
    } )
    .then(response => {
      this.setState({
        selectedStateData: response.data,
        loading: false
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    // render loading when app is not ready
    if(this.state.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div className="row search-map-wrapper">
        <SearchBox searchType="zoning-search" page="zoning" />  
        <div className="col-lg-8">
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="mapWrapper" />}
          mapElement={<div style={{ height: `100%` }} />}
          markersList={this.state.selectedStateData}  
        />  
        
        <div className="card results-count">
          <p>{this.state.selectedStateData.length} Results</p>
          <div className="key">
            <h5>Key</h5>    
            <div className="sa-badge badge">SA<span> - Stand Alone Units</span></div>
            <div className="thc-badge badge">THC<span> - Tiny Home Community</span></div>
            <div className="adu-badge badge">ADU<span> - Accessory Dwelling Units</span></div> 
            <div className="thow-badge badge">THOW<span> - Tiny Home on Wheels</span></div>
          </div>
        </div>
          
        {this.state.selectedStateData.map((result, i) => {
          return (
            <div key={i} className="card results-card col">              
              <div className="card-body row">
                <div className="card-info-wrap">
                  <h4 className="card-title">{result.CityName}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{result.CountyName} County</h6>
                  <div className="badge-row">
                    {result.StandAlone ? (<div className="sa-badge badge">SA</div>) : null}
                    {result.THCommunity ? (<div className="thc-badge badge">THC</div>) : null}
                    {result.ADU ? (<div className="adu-badge badge">ADU</div>) : null}
                    {result.THOW ? (<div className="thow-badge badge">THOW</div>) : null}
                  </div>
                </div>  
                {result.PDF ? (<p className="card-text">Follow link for more info: <a href={result.PDF} target="_blank">{result.CityName}</a></p>) : (null)}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default ZoningSearch;