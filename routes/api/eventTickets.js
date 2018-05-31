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
  Event.find()
    .sort({ date: -1 })
    .then(eventTickets => res.json(eventTickets))
    .catch(err => res.status(404).json({ noeventticketsfound: 'No event tickets found' }));
});

//  //EventTickets form
//  router.get('/:id', (req, res) => {
//     EventTickets.findByID(req.params.id)
//     .then(EventTickets => res.json(EventTickets))
//     .catch(err =>
//         res.status(404).json({ noEventTicketsfound:'No EventTickets added '})
//     );
//  })
//
//
//  //// @route EventTickets api/events
// // @desc    Create event
// // @access  Private
// router.post(
// '/',
// passport.authenticate('jwt', { session: false}),
// (req, res) => {
//     const { errors, isValid} = validateEventTicketsInput(req.body);
//
//     //check validation
//     if(!isValid) {
//         return res.status(400).json(errors);
//     }
//     const newEventTickets = new EventTickets({
//         eventname: req.body.eventname,
//         price:req.body.price,
//         date:req.body.date,
//         additional: req.body.additional,
//         user: req.user.id
//     });
//     newEventTickets.save().then(EventTickets => res.json(EventTickets));
// }
// );
//
// //Delete EventTickets Post
//
// router.delete(
//     '/:id',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         EventTickets.findOne({ user: req.user.id }).then(EventTickets => {
//         EventTickets.findById(req.params.id)
//           .then(post => {
//             // Check for post owner
//             if (post.user.toString() !== req.user.id) {
//               return res
//                 .status(401)
//                 .json({ notauthorized: 'User not authorized' });
//             }
//
//             // Delete
//             EventTickets.remove().then(() => res.json({ success: true }));
//           })
//           .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
//       });
//     }
//   );

module.exports = router;
