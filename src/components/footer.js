import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import footerLogo from '../assets/images/footer-logo.png';

const Footer = () => {
  return (
    <footer className="footer align-items-center">
      <div className="upper-footer row align-items-center">
        <div className="navbar-brand logo">
          <Link to="/">
            <img src={footerLogo} alt="Tiny Houses Logo" />
          </Link>  
        </div>
        <div>
        <ul className="navbar-nav rightfootnav">
          <li className="nav-item nav-link"><Link to="/about">About</Link></li>
          <li className="nav-item nav-link"><Link to="/faq">FAQs</Link></li>
          <li className="nav-item nav-link"><Link to="/reviews">Reviews</Link></li>
          <li className="nav-item nav-link"><Link to="/professionals">Professionals</Link></li>
          <li className="nav-item nav-link"><Link to="/ads">Advertise</Link></li>
          <li className="nav-item nav-link"><Link to="/contact">Contact Us</Link></li>
        </ul>
        </div>
        <div className="social-nav">
        <ul>
          <li><a href="http://twitter.com">
            <i className="icon ion-social-twitter"></i>  
          </a></li>
          <li><a href="http://facebook.com">
            <i className="icon ion-social-facebook"></i>
          </a></li>
          <li><a href="http://instagram.com">
            <i className="icon ion-social-instagram"></i>
          </a></li>
        </ul>
        </div>
      </div> 
      <hr/>
      <div className="lower-footer">
        <p className="text-right"> © Tiny Homes. All Rights Reserved. 2017  •  Made with love by msre Consulting, LLC.</p>  
      </div>
    </footer>
  );
};

export default Footer;