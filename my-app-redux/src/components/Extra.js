import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import logo from './carro.png';

class Extra extends Component {

  render() {
    return (
        <div className="banner">
            <span><img src={logo} className="App-logo" alt="logo" /><h1>Carrito</h1></span>
        </div>
    )
  }
}

export default Extra