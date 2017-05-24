import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
    constructor (props) {
      super(props);

      this.state = {title: props.title ? props.title : "" }
    }

  render() {
    return (
        <div className="App-header">
            <h3>Welcome to FireStorm Products Store</h3>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>{this.state.title}</h3>
        </div>
    );
  }
}

export default Header;
