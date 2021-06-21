import React, { Component } from 'react';
// import style
import './style.css';
// add image
import heroImg from './hero2.jpg';

class AppHeader extends Component {
  state = { time: new Date() };

  componentDidMount() {
    // create the interval once component is mounted
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000); // every 1 seconds
  }

  componentWillUnmount() {
    // delete the interval just before component is removed
    clearInterval(this.update);
  }

  getDate() {
    const now = new Date();
    return now.toLocaleDateString();
  }

  render() {
    return (
      <header>
        <img className="hero" src={heroImg} alt="Very nice view of a sky" />
        {/* gauti snd tada ir atvaizduoti  */}
        <p className="hero-date">{this.getDate()}</p>
        <p className="hero-time" id="clock">
          {this.state.time.toLocaleTimeString('lt')}
        </p>
      </header>
    );
  }
}

export default AppHeader;
