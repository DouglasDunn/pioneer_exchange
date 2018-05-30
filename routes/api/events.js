const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Events Post model
const Event = require('../../models/Event');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validateEventInput = require('../../validation/event');

// @route   GET api/events/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Events Works' }));

// @route   GET api/events
// @desc    Get events
// @access  Public
router.get('/', (req, res) => {
  Event.find()
    .sort({ date: -1 })
    .then(events => res.json(events))
    .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
});

// @route   GET api/events/:id
// @desc    Get event by id
// @access  Public
router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err =>
      res.status(404).json({ noeventfound: 'No event found with that ID' })
    );
});

// @route   POST api/events
// @desc    Create event
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newEvent = new Event({
      name: req.body.name,
      details: req.body.details,
      additional: req.body.additional,
      user: req.user.id
    });

    newEvent.save().then(event => res.json(event));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Event.findById(req.params.id)
        .then(event => {
          // Check for post owner
          if (event.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }

          // Delete
          event.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ eventnotfound: 'No event found' }));
    });
  }
);

module.exports = router;
