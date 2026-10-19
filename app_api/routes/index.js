const express = require('express'); // Express app
const router = express.Router();    // Router logic
const tripsController = require('../controllers/trips'); // This is where we import the trips controller.
const authController = require('../controllers/authentication'); // This is where we import the authentication controller.
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens
//const { rawListeners } = require('../models/travlr');

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (authHeader == null) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if (headers.length < 1) {
        console.log('not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    if (token == null) {
            console.log('Null Bearer Token');
            return res.sendStatus(401);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified; // Set the auth param to the decoded object
    });

    next(); // continue request or the request will wait for a response that will never come.
}

// define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripsList
    .post(authenticateJWT, tripsController.tripsAddTrip); // POST Method adds a trip.

// Authentication routes
router
    .route('/register')
    .post(authController.register);

router
    .route('/login')
    .post(authController.login);

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip)
    .delete(tripsController.tripsDeleteTrip);

module.exports = router;