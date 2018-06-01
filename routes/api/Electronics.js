const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Electronic Model
const Electronic = require('../../models/Electronic');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validateElectronicInput = require('../../validation/electronic');

// @route   GET api/events/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Electronics Works' }));

// @route   GET api/electronics
// @desc    Get electronics
// @access  Public
router.get('/', (req, res) => {
  Electronic.find()
    .sort({ date: -1 })
    .then(electronics => res.json(electronics))
    .catch(err => res.status(404).json({ noelectronicsfound: 'No electronics found' }));
});

// @route   GET api/electronics/:id
// @desc    Get electronic by id
// @access  Public
router.get('/:id', (req, res) => {
  Electronic.findById(req.params.id)
    .then(electronic => res.json(electronic))
    .catch(err =>
      res.status(404).json({ noelectronicfound: 'No electronic found with that ID' })
    );
});

// @route   POST api/electronics
// @desc    Create electronic
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateElectronicInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newElectronic = new Electronic({
      name: req.body.name,
      details: req.body.details,
      additional: req.body.additional,
      brand: req.body.brand,
      price: req.body.price,
      user: req.user.id
    });

    newElectronic.save().then(electronic => res.json(electronic));
  }
);

// @route   DELETE api/electronics/:id
// @desc    Delete electronic
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Electronic.findById(req.params.id)
        .then(electronic => {
          // Check for electronic owner
          if (electronic.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }

          // Delete
          electronic.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ electronicnotfound: 'No electronic found' }));
    });
  }
);

module.exports = router;
