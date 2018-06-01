const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateelectronicInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.details = !isEmpty(data.details) ? data.details : '';
  data.brand = !isEmpty(data.brand) ? data.brand : '';
  data.price = !isEmpty(data.price) ? data.price : '';

  if (!Validator.isLength(data.details, { min: 10, max: 500 })) {
    errors.details = 'Details must be between 10 and 500 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.details)) {
    errors.details = 'Details field is required';
  }

  if (Validator.isEmpty(data.brand)) {
    errors.brand = 'Brand field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Price field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
