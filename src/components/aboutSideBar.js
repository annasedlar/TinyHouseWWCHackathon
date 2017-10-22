import React, { Component } from 'react';
import Navbar from './navbar';
import "../styles/about.css";
import axios from 'axios';

class AboutSideBar extends Component {
	state = {
		fontWeight: 'lighter',
		fontWeight2: 'lighter',
		AboutText: 'About Us Text',
		FoundersText: 'Founder text'
	}

	handleClick = ()=>{
		if(this.state.fontWeight == 'bolder'){
			this.setState({
				fontWeight: 'lighter',
				fontWeight2: 'bolder'
			})
		} else if(this.state.fontWeight == 'lighter'){
			this.setState({
				fontWeight: 'bolder',
				fontWeight2: 'lighter'
			})
		}
	}

	handleClick2 = ()=>{
		if(this.state.fontWeight2 == 'bolder'){
			this.setState({
				fontWeight2: 'lighter',
				fontWeight: 'bolder'

			})
		} else if(this.state.fontWeight2 == 'lighter'){
			this.setState({
				fontWeight2: 'bolder',
				fontWeight: 'lighter'
			})
		}
	}

  render() {
    return (
      <div className="about-side-bar">
        <h1 style={{fontWeight: this.state.fontWeight}} onClick={this.handleClick}>About</h1>
        <h1 style={{fontWeight: this.state.fontWeight2}} onClick={this.handleClick2}>Founders</h1>
      </div>
    );
  }
}

export default AboutSideBar;