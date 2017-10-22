import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from "../assets/images/hompact-logo.png";
import mag from "../assets/images/mag-glass.jpg";
import user from "../assets/images/user.png";

export default class NavBar extends Component {

  render() {
    return (
      <header>
      <div className="row align-items-center">
        <nav className="navbar navbar-expand fixed-top">
          <div className="navbar-brand logo">
            <Link to="/">
              <img className="logo" src={logo} alt="Tiny Houses Logo" />
            </Link>  
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav">
            <li className="nav-item nav-link"><Link to="/zoning">Zoning Search</Link></li>
            <li className="nav-item nav-link"><Link to="/homes">Home Search</Link></li>
            <li className="nav-item nav-link"><Link to="/professionals">Find Pros</Link></li>
            <li className="nav-item nav-link"><Link to="/financing">Financing</Link></li>
          </ul>
          <div className="searchAndProfile align-items-center">
            <img className="user" src={mag} style={{paddingLeft:'5px'}}alt="Search" />
            <img className="user" src={user} alt="User" />
            <span>Signin</span>
          </div>
        </nav>
        </div>
      </header>
    );
  }
}