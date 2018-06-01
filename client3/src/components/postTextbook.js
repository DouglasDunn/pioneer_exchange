import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import './styling/register.css';

class postTextbook extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      textbookname: '',
      author: '',
      edition: '',
      price: '',
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

    const newTextbook = {
      subject: this.state.subject,
      textbookname: this.state.textbookname,
      author: this.state.author,
      edition: this.state.edition,
      price: this.state.price,
      details: this.state.details
    };

    axios
      //.post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 id="signin-title" className="display-4 text-center">Post Submition</h1>
              <p className="lead text-center">
                Post your Textbook!
              </p>
              <form noValidate onSubmit={this.onSubmit}>
              	
              	<div className="form-group">
                  <select id="subject-box"
                  value={this.state.subject}
                  className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.subject
                    })}
                    onChange={this.onChange}
                  >
                  <option value="" disabled selected>What subject is this for? (Required)</option>
           		  <option value="computerscience">Computer Science</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="biology"> Biology</option>
                   </select>
                   
                  {errors.subject && (
                    <div className="invalid-feedback">{errors.subject}</div>
                  )}
                </div>
              	
                <div className="form-group">
                  <input
                    id="textbookname-box"
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.textbookname
                    })}
                    placeholder="Enter Textbook Name (Required)"
                    name="textbookname"
                    value={this.state.textbookname}
                    onChange={this.onChange}
                  />
                  {errors.textbookname && (
                    <div className="invalid-feedback">{errors.textbookname}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <input
                    id = "author-box"
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.author
                    })}
                    placeholder="Enter Author Name (Required)"
                    name="author"
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                  {errors.author && (
                    <div className="invalid-feedback">{errors.author}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <select id="edition-box"
                  value={this.state.edition}
                  className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.edition
                    })}
                    onChange={this.onChange}
                  >
                  <option value="" disabled selected>Select Edition (Required)</option>
           			<option value="1st">1st</option>
           			<option value="2nd">2nd</option>
           			<option value="3rd"> 3rd</option>
           			<option value="4th"> 4th</option>
           			<option value="5th"> 5th</option>
           			<option value="6th"> 6th</option>
           			<option value="7th"> 7th</option>
           			<option value="8th"> 8th</option>
           			<option value="9th"> 9th</option>
           			<option value="10"> 10th</option>
           			<option value="11th"> 11th</option>
           			<option value="12th"> 12th</option>
           			<option value="13th"> 13th</option>
           			<option value="14th"> 14th</option>
           			<option value="15th"> 15th</option>
           			<option value="16th"> 16th</option>
           			<option value="17th"> 17th</option>
           			<option value="18th"> 18th</option>
           			<option value="19th"> 19th</option>
           			<option value="20th"> 20th</option>
           			<option value="21st"> 21st</option>
           			<option value="22nd"> 22nd</option>
           			<option value="23rd"> 23rd</option>
           			<option value="24th"> 24th</option>
           			<option value="25th"> 25th</option>
           			<option value="26th"> 26th</option>
           			<option value="27th"> 27th</option>
           			<option value="28th"> 28th</option>
           			<option value="29th"> 29th</option>
           			<option value="30th"> 30th</option>
                   </select>
                   
                  {errors.edition && (
                    <div className="invalid-feedback">{errors.edition}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <input
                    id = "price-box"
                    type="number"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.price
                    })}
                    placeholder="Enter Desired Price (Required)"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                  />
                  {errors.price && (
                    <div className="invalid-feedback">{errors.price}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <input
                    id = "details-box"
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.details
                    })}
                    placeholder="Enter Additional Details (Optional)"
                    name="details"
                    value={this.state.details}
                    onChange={this.onChange}
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

export default postTextbook;
