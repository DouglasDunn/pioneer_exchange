const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Events Post model
const EventTicket = require('../../models/EventTicket');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validateEventTicketInput = require('../../validation/eventTicket');

// @route   GET api/events/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Events Works' }));

module.exports = router;
