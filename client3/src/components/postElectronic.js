import React, { Component } from 'react';

import axios from 'axios';

import classnames from 'classnames';



import './styling/register.css';



class postElectronic extends Component {

  constructor() {

    super();

    this.state = {

      type: '',

      brand: '',

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



    const newElectronics = {

      type: this.state.type,

      brand: this.state.brand,

      price: this.state.price,

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

      <div className="postElectronic">

        <div className="container">

          <div className="row">

            <div className="col-md-8 m-auto">

              <h1 id="signin-title" className="display-4 text-center">Post Submition</h1>

              <p className="lead text-center">

                Post your Electronics!

              </p>

              <form noValidate onSubmit={this.onSubmit}>

              	

              	<div className="form-group">

                  <select id="type-box"

                  value={this.state.type}

                  className={classnames('form-control form-control-lg', {

                      'is-invalid': errors.subject

                    })}

                    onChange={this.onChange}

                  >

                  <option value="" disabled selected>What type of electronics? (Required)</option>

           		  <option value="laptopstablets">Laptops/Tablets</option>

                  <option value="phones">Phones</option>

                  <option value="accessories">Accessories</option>

                  <option value="other">Other</option>

                   </select>

                   

                  {errors.subject && (

                    <div className="invalid-feedback">{errors.subject}</div>

                  )}

                </div>



                

              	<div className="form-group">

                  <input

                    id="brand-box"

                    type="text"

                    className={classnames('form-control form-control-lg', {

                      'is-invalid': errors.type

                    })}

                    placeholder="What Brand? (Required)"

                    name="brand"

                    value={this.state.brand}

                    onChange={this.onChange}

                  />

                  {errors.brand && (

                    <div className="invalid-feedback">{errors.brand}</div>

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



export default postElectronic;