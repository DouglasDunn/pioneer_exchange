import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../styling/login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
      redirect: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.setState({redirect: true});

    console.log(user);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 id="login-title" className="display-4 text-center">Log In</h1>
              <p id = "subtext-signin" className="lead text-center">
                Sign in to your Pioneer Exchange account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    id="email-textbox"
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    id = "password-textbox"
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
              {this.state.redirect &&
              <Redirect to='/textbooks'/>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
