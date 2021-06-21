import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './mainPages.css';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="page-container">
        <h1 className="main-title">Plan Your Life</h1>
        <Link className="page-link" to="/todos">
          <button className="link-button">Use Todo App</button>
        </Link>
      </div>
    );
  }
}

export default Home;
