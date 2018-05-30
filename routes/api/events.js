const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Events Post model
const EventsPost = require('../../models/EventsPost');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validatePostInput = require('../../validation/post');

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Events Works' }));
