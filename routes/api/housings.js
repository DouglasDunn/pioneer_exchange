const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Housing Model
const Housing = require('../../models/Housing');
// Profile model
const Profile = require('../../models/Profile');

const validateHousingInput = require('../../validation/housing');

// @route   GET api/events/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Housing Works' }));

//Housing Index page
router.get('/', (req, res) => {
    Housing.find({})
    .sort({date:'desc'})
    .then(Housing => res.json(Housing))
    .catch(err => res.status(404).json({nohousingfound: 'No Housing found'}));
});

 //Housing form
 router.get('/:id', (req, res) => {
    Housing.findByID(req.params.id)
    .then(Housing => res.json(Housing))
    .catch(err =>
        res.status(404).json({ noHousingfound:'No Housing added '})
    );
 })


 //// @route   POST api/events
// @desc    Create event
// @access  Private
router.post(
'/',
passport.authenticate('jwt', { session: false}),
(req, res) => {
    const { errors, isValid} = validateHousingInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }
    const newHousing = new Housing({
        title: req.body.title,
        details: req.body.details,
        date:req.body.date,
        additional: req.body.additional,
        user: req.user.id
    });
    newHousing.save().then(Housing => res.json(Housing));
}
);

//Delete Post

router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Housing.findOne({ user: req.user.id }).then(Housing => {
        Housing.findById(req.params.id)
          .then(post => {
            // Check for post owner
            if (post.user.toString() !== req.user.id) {
              return res
                .status(401)
                .json({ notauthorized: 'User not authorized' });
            }

            // Delete
            Housing.remove().then(() => res.json({ success: true }));
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
      });
    }
  );

module.exports = router;
