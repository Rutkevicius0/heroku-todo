import React, { Component } from 'react';

import './mainPages.css';

import photoId from './profile.jpg';

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div className="page-container">
        <h1 className="main-title">Contacts</h1>
        <div className="contact-container">
          <img className="photo-id" src={photoId} alt="photoId" />
          <h4>Ovidijus Rutkevicius</h4>
          <h5>Developer & designer</h5>
          <p>ovidijus.rutkevicius@gmail.com</p>
          <i
            className="fa fa-facebook-official social-icon"
            aria-hidden="true"
          ></i>
          <i
            className="fa fa-linkedin-square social-icon"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    );
  }
}

export default Contacts;
