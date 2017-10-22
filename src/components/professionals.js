import React, { Component } from 'react';
import Navbar from './navbar';
import AboutSideBar from './aboutSideBar'
import "../styles/about.css"

class Professionals extends Component {
  render() {
    return (
    	<div>
			< AboutSideBar />
		  	<div className="about-page">
		    <p>We're a group of tiny house enthusiasts who recognized the need for a online community and repository of Tiny House resources</p>
		  </div>
		</div>
    );
  }
}

export default Professionals;