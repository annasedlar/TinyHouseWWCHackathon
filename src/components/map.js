import React from 'react';
import { compose, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const MapWithAMarker = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
    }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 33.753746, lng: -84.386330 }} >
    <Marker
      position={{ lat: 34.0232, lng: -84.3616 }}>
    </Marker>
    <Marker
      position={{ lat: 33.8920, lng: -84.2988 }}>

    </Marker>
    <Marker
      position={{ lat: 33.9304, lng: -84.3733 }}>

    </Marker>
    <Marker
      position={{ lat: 33.6796, lng: -84.4394 }}>

    </Marker>
    <Marker
      position={{ lat: 33.6601, lng: -84.4102 }}>

    </Marker>
    <Marker
      position={{ lat: 33.8095, lng: -84.2396 }}>

    </Marker>
    <Marker
      position={{ lat: 33.7748, lng: -84.2963 }} >

    </Marker>
    <Marker
      position={{ lat: 33.753746, lng: -84.386330 }}
      onClick={props.onToggleOpen} >
      {
        props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>
            <h6>Atlanta</h6>
            <p className="muted-text">Fulton County</p>
            <div className="badge-row">
              <div className="sa-badge badge">SA</div>
              <div className="adu-badge badge">ADU</div>
              <div className="thow-badge badge">THOW</div>
            </div>  
          </div>
        </InfoWindow>
      }
    </Marker>
  </GoogleMap>
);

export default MapWithAMarker;
