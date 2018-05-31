const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();

//Load Other Model
const Other = require('../../models/Other');

const Other = require('../../models/Other');

const validateOtherInput = require('../../validation/Other');

//Other Index page
router.get('/', (req, res) => {
    Other.find({})
    .sort({date:'desc'})
    .then(Other => res.json(Other))
    .catch(err => res.status(404).json({noOtherfound: 'No Other item found'}));  
});

 //Other form
 router.get('/:id', (req, res) => {
    Other.findByID(req.params.id)
    .then(Other => res.json(Other))
    .catch(err => 
        res.status(404).json({ noOtherfound:'No Other item added '})
    );
 })


 //// @route Other api/events
// @desc    Create event
// @access  Private
router.post(
'/',
passport.authenticate('jwt', { session: false}),
(req, res) => {
    const { errors, isValid} = validateOtherInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }
    const newOther = new Other({
        itemname: req.body.itemname,
        price:req.body.price,
        additional: req.body.additional,
        user: req.user.id
    });
    newOther.save().then(Other => res.json(Other));
}
);
 
//Delete Other Post 

router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Other.findOne({ user: req.user.id }).then(Other => {
        Other.findById(req.params.id)
          .then(post => {
            // Check for post owner
            if (post.user.toString() !== req.user.id) {
              return res
                .status(401)
                .json({ notauthorized: 'User not authorized' });
            }
  
            // Delete
            Other.remove().then(() => res.json({ success: true }));
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
      });
    }
  );

module.exports = router;