const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.details = !isEmpty(data.details) ? data.details : '';

  if (!Validator.isLength(data.details, { min: 10, max: 500 })) {
    errors.details = 'Details must be between 10 and 500 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.details)) {
    errors.details = 'Details field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
