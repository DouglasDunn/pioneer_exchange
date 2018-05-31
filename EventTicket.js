const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();

//Load EventTicket Model
const EventTickets = require('../../models/EventTickets');

const EventTickets = require('../../models/EventTickets');

const validateEventTicketsInput = require('../../validation/EventTickets');

//EventTickets Index page
router.get('/', (req, res) => {
    EventTickets.find({})
    .sort({date:'desc'})
    .then(EventTickets => res.json(EventTickets))
    .catch(err => res.status(404).json({noEventTicketsfound: 'No EventTickets found'}));  
});

 //EventTickets form
 router.get('/:id', (req, res) => {
    EventTickets.findByID(req.params.id)
    .then(EventTickets => res.json(EventTickets))
    .catch(err => 
        res.status(404).json({ noEventTicketsfound:'No EventTickets added '})
    );
 })


 //// @route EventTickets api/events
// @desc    Create event
// @access  Private
router.post(
'/',
passport.authenticate('jwt', { session: false}),
(req, res) => {
    const { errors, isValid} = validateEventTicketsInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }
    const newEventTickets = new EventTickets({
        eventname: req.body.eventname,
        price:req.body.price,
        date:req.body.date,
        additional: req.body.additional,
        user: req.user.id
    });
    newEventTickets.save().then(EventTickets => res.json(EventTickets));
}
);
 
//Delete EventTickets Post 

router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        EventTickets.findOne({ user: req.user.id }).then(EventTickets => {
        EventTickets.findById(req.params.id)
          .then(post => {
            // Check for post owner
            if (post.user.toString() !== req.user.id) {
              return res
                .status(401)
                .json({ notauthorized: 'User not authorized' });
            }
  
            // Delete
            EventTickets.remove().then(() => res.json({ success: true }));
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
      });
    }
  );

module.exports = router;