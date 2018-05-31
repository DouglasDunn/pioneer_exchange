const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();

//Load Electronic Model
const Electronic = require('../../models/Electronic');

const Electronic = require('../../models/Electronic');

const validateElectronicInput = require('../../validation/Electronic');

//Electronics Index page
router.get('/', (req, res) => {
    Electronic.find({})
    .sort({date:'desc'})
    .then(Electronic => res.json(Electronic))
    .catch(err => res.status(404).json({noElectronicfound: 'No Electronic found'}));  
});

 //Electronic form
 router.get('/:id', (req, res) => {
    Electronic.findByID(req.params.id)
    .then(Electronic => res.json(Electronic))
    .catch(err => 
        res.status(404).json({ noElectronicfound:'No Electronic added '})
    );
 })


 //// @route  Electronic api/events
// @desc    Create event
// @access  Private
router.post(
'/',
passport.authenticate('jwt', { session: false}),
(req, res) => {
    const { errors, isValid} = validateElectronicInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }
    const newHousing = new Electronic({
        title: req.body.title,
        brand: req.body.brand,
        price:req.body.price,
        additional: req.body.additional,
        user: req.user.id
    });
    newElectronic.save().then(Electronic => res.json(Electronic));
}
);
 
//Delete Electronic Post 

router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Electronic.findOne({ user: req.user.id }).then(Electronic => {
        Electronic.findById(req.params.id)
          .then(post => {
            // Check for post owner
            if (post.user.toString() !== req.user.id) {
              return res
                .status(401)
                .json({ notauthorized: 'User not authorized' });
            }
  
            // Delete
            Electronic.remove().then(() => res.json({ success: true }));
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
      });
    }
  );

module.exports = router;