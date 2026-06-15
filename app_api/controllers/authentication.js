const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');

const register = (req, res) => {
    // Validate the message to ensure that the required fields are present
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({"message": "All fields required" });
    }

    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save()
        .then((u) =>{
            const token = u.generateJWT();
            res.status(200).json({ token });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const login = (req, res, next) => {
    //Validate the message to ensure email and password are present
    if (!req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({ "message": "All fields required" });
    }

    //Delegate authentication to passport odule
    passport.authenticate('local', (err, user, info) => {
        //Error in authentication process
        if (err) {
            return res.status(404).json(err);
        }
        //If a user is found, generate and return a JWT
        if (user) {
            const token = user.generateJWT();
            res.status(200).json({ token });
        } else {
            // Otherwise return error from passport
            res.status(401).json(info);
        }
    })(req, res, next);
};

module.exports = {
    register,
    login
};