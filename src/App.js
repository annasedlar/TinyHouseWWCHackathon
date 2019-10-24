import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './containers/home.container';
import About from './containers/about.container';
import Blog from './containers/blog.container';
import SearchContainer from './containers/search.container';
import ZoningContainer from './containers/zoning.container';
import Financing from './containers/financing.container'; 
import DesignBox from './containers/designBox.container';

import NavBar from './components/navbar';
import Footer from './components/footer';

const App = () => (
  <Router>
    <div>
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route path="/homes" component={SearchContainer} />
      <Route path="/zoning" component={ZoningContainer} />
      <Route path="/professionals" component={SearchContainer} />
      <Route path="/financing" component={Financing} />
      <Route path="/designbox" component={DesignBox} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/ads" component={Blog} />
      <Route path="/faq" component={Blog} />
      <Route path="/reviews" component={Blog} />
      <Route path="/contact" component={Blog} />
      
      <Footer />
    </div>
  </Router>
);

export default App;
