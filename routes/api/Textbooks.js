const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();

//Load BuynSell Model
const Textbook = require('../../models/Textbook');

const Profile = require('../../models/Textbook');

const validateEventInput = require('../../validation/textbook');

//Textbook Index page
router.get('/', (req, res) => {
    Textbook.find({})
    .sort({date:'desc'})
    .then(Textbook => res.json(Textbook))
    .catch(err => res.status(404).json({notextbookfound: 'No textbook found'}));  
});

 //Add Textbook form
 router.get('/:id', (req, res) => {
    Textbook.findByID(req.params.id)
    .then(Textbook => res.json(Textbook))
    .catch(err => 
        res.status(404).json({ notextbookfound:'No textbook added '})
    );
 })


 //// @route   POST api/events
// @desc    Create event
// @access  Private
router.post(
'/',
passport.authenticate('jwt', { session: false}),
(req, res) => {
    const { errors, isValid} = validateTextbookInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }
    const newTextbook = new Textbook({
        title: req.body.title,
        author: req.body.author,
        edition: req.body.edition,
        price: req.body.price,
        additional: req.body.additional,
        user: req.user.id
    });
    newTextbook.save().then(Textbook => res.json(Textbook));
}
);
 
//Delete Post

router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Textbook.findOne({ user: req.user.id }).then(Textbook => {
        Textbook.findById(req.params.id)
          .then(post => {
            // Check for post owner
            if (post.user.toString() !== req.user.id) {
              return res
                .status(401)
                .json({ notauthorized: 'User not authorized' });
            }
  
            // Delete
            Textbook.remove().then(() => res.json({ success: true }));
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
      });
    }
  );

module.exports = router;