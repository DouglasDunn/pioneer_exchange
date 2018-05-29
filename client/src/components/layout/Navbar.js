import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styling/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link 
          id ="main-bttn" 
          className="navbar-brand" 
          to="/">
            Pioneer Exchange
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {' '}
                  Developers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/textbooks">
                  TextBooks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/electronics">
                  Electronics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/houses">
                  Houses
                </Link>
              </li>
            </ul>
        

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
