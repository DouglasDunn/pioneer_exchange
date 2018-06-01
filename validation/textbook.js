const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatetextbookInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.author = !isEmpty(data.author) ? data.author : '';
  data.edition = !isEmpty(data.edition) ? data.edition : '';
  data.price = !isEmpty(data.price) ? data.price : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.author)) {
    errors.author = 'Author field is required';
  }

  if (Validator.isEmpty(data.edition)) {
    errors.edition = 'Edition field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Price field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
