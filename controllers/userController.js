const bcryptjs = require("bcryptjs");

const { validationResult } = require('express-validator');

const User = require("../models/User");

const controller= {
    register: (req,res) => {
        return res.render('register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body 
            });
        }

        User.create(req.body);
        return res.send('Ok, se guardó el usuario')
    },
    login: (req,res) => {
        return res.render('login')
    },
/*     register: (req,res) => {
        return res.render('userProfile')
    }, */
};


module.exports = controller