import React, { Component } from 'react';

class Blog extends Component {
  page() {
    switch(this.props.location.pathname) {
      case "ads":
        <h1>Advertisements</h1>
      break;
      case "faq":
        <h1>Frequently Asked Questions</h1>
      break;
      case "reviews":
        <h1>Reviews</h1>
      break;
      case "contact":
        <h1>Contact Us</h1>
      break;
      case "blog":
        <h1>Blog</h1>
        break;
      default:
        <h1>About Us</h1>
        break;
    }
  }
  render() {
    return (
      <div className="page">
        {this.page()}
      </div>
    );
  }
}

export default Blog;
