const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load EventTicket Model
const EventTicket = require('../../models/EventTicket');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validateEventTicketInput = require('../../validation/eventTicket');

// @route   GET api/eventTickets/test
// @desc    Tests eventTickets route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Event Tickets Works' }));

// @route   GET api/events
// @desc    Get events
// @access  Public
router.get('/', (req, res) => {
  EventTicket.find()
    .sort({ date: -1 })
    .then(eventTickets => res.json(eventTickets))
    .catch(err => res.status(404).json({ noeventticketsfound: 'No event tickets found' }));
});

// @route   GET api/eventTickets/:id
// @desc    Get eventTicket by id
// @access  Public
router.get('/:id', (req, res) => {
  EventTicket.findById(req.params.id)
    .then(eventTicket => res.json(eventTicket))
    .catch(err =>
      res.status(404).json({ noeventticketfound: 'No event ticket found with that ID' })
    );
});

// @route   POST api/eventTickets
// @desc    Create eventTickets
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventTicketInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newEventTicket = new EventTicket({
      name: req.body.name,
      additional: req.body.additional,
      price: req.body.price,
      user: req.user.id
    });

    newEventTicket.save().then(eventTicket => res.json(eventTicket));
  }
);

// @route   DELETE api/eventTickets/:id
// @desc    Delete eventTicket
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      EventTicket.findById(req.params.id)
        .then(eventTicket => {
          // Check for eventTicket owner
          if (eventTicket.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }

          // Delete
          eventTicket.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ eventticketnotfound: 'No event ticket found' }));
    });
  }
);


module.exports = router;
