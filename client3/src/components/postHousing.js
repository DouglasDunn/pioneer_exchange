import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import '../styling/register.css';

class postHousing extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      details: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newHousing = {
      title: this.state.title,
      details: this.state.details,
    };

    axios
      //.post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="postHousing">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              //<h1 id="signin-title" className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Submit your Housing Ad!
              </p>
              <form noValidate onSubmit={this.onSubmit}>

              	<div className="form-group">
                  <input
                    id="title-box"
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.title
                    })}
                    placeholder="Enter Posting Title...(Required)"
                    name="title"
                    value={this.state.eventname}
                    onChange={this.onChange}
                  />
                  {errors.title && (
                    <div className="invalid-feedback">{errors.title}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <textarea
                    id = "details-box"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.details
                    })}
                    placeholder="Enter Posting Details... (Required) \n 
                    Suggestions: \n
                    -Are you searching for a space or advertising a space? \n 
                    -Details of the space: Room size/Shared or Private room/No. of people in
                    the household/Location \n 
                    -Rent? Security Deposit? Lease Length? "
                    name="details"
                    value={this.state.details}
                    onChange={this.onChange}
                    cols={60} rows={20}
                  />
                  {errors.details && (
                    <div className="invalid-feedback">{errors.details}</div>
                  )}
                </div>
                
                
                
                <input type="submit" value="POST" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default postHousing;
