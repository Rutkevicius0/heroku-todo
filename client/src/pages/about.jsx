import React, { Component } from 'react';

import './mainPages.css';

class About extends Component {
  state = {};
  render() {
    return (
      <div className="page-container">
        <h1 className="main-title">About</h1>
        <p className="page-text">
          This app was designed and coded for learning purposes.
        </p>
      </div>
    );
  }
}

export default About;
