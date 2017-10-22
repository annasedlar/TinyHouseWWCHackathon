import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/home.css';
// import main from '../assets/images/main.jpg';
// import post1 from '../assets/images/post1.png';
// import post2 from '../assets/images/post2.png';
// import post3 from '../assets/images/post3.png';
import property1 from '../assets/images/property1.png';
import property2 from '../assets/images/property2.png';
import property3 from '../assets/images/property3.png';
import sunTrust from '../assets/images/suntrust-hero.png';
// import map from '../assets/images/map-screenshot.png';
// import computerScreenshot from '../assets/images/computer-screenshot2.png';

class Home extends Component {
  render() {
    return (
      <div className="SplashPage">
      <div className="overlay">
        <div id="hero" className="row">
          <div className="col-lg-8 col-sm-12 cta mx-auto">
            <h1>Embrace the Tiny Home Experience</h1>
            <button type="button" className="btn createAccount">Create Account</button>
          </div>
        </div>
        </div>

        <div id="search" className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-5 searchText">
                <h2>Less Space. More Life.</h2>
                <hr/>
                <p>Find your perfect place to begin your tiny house life.</p>
                <p>Use our custom mapping solution to find your new location.</p>
                <button type="button" className="btn search"><Link to="/zoning">Search</Link></button>
              </div>
            </div>		
          </div>
        </div>

        <div id="listings" className="container-fluid">
        <h2 className="text-center">Featured Listings from Coast to Coast</h2>
        <div className="container">
          <div className="row mx-auto">
            <div className="card">
              <img className="card-img-top" src={property1} alt="Minneapolis, Minnesota"/>
              <div className="card-body">
                <h4 className="card-title">Minneapolis, Minnesota</h4>
                <p className="card-text">$55,000 + haul</p>
                <p>2 Lofts | 1 Full Bath | 235 sq ft</p>
              </div>
            </div>
      
            <div className="card">
              <img className="card-img-top" src={property2} alt="Atlanta, Georgia"/>
              <div className="card-body">
                <h4 className="card-title">Atlanta, Georgia</h4>
                <p className="card-text">$55,000 + haul</p>
                <p>2 Lofts | 1 Full Bath | 235 sq ft</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={property3} alt="Fresno, California" />
              <div className="card-body">
                <h4 className="card-title">Fresno, California</h4>
                <p className="card-text">$55,000 + haul</p>
                <p>2 Lofts | 1 Full Bath | 235 sq ft</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div id="learnMore" className="row align-items-center">
          <div className="col-lg-8 col-md-4">
          <img className ="img-fluid" src={sunTrust} alt="Placeholder"/>
          </div>
          <div className="col-lg-4 col-md-8">
            <h2>Looking to Downsize?</h2>
            <p>Lower your cost of living when you finance a tiny home.</p>
            <a href="/financing" ><button type="button" className="btn learnMore">Learn More</button></a>
          </div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
            
    );
  }
}

export default Home;