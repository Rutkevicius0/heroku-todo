import React, { Component } from 'react';

//importuojam modulini indvidualu css
import navStyles from './navbar.module.css';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className={navStyles.navbar}>
        <Link className={navStyles.navLogo} to="/">
          ReactApp
        </Link>
        <div className="nav-links">
          <Link className={navStyles.navLink} to="/">
            Home
          </Link>
          <Link className={navStyles.navLink} to="/todos">
            Todos
          </Link>
          <Link className={navStyles.navLink} to="/about">
            About
          </Link>
          <Link className={navStyles.navLink} to="/contacts">
            Contacts
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
