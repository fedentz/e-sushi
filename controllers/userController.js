const express = require("express");
const path = require("path");
var Promise = require('promise')
let db = require('../database/models')
const bcryptjs = require('bcryptjs');
const validation = require('express-validator')

let userController = {
    register: (req, res) => {
        res.render('register')
    },

    processRegister: async function (req, res) {
       /*  const validate = validation(req)

        if(validate.errors.length > 0){
        res.render('register.ejs', {
            errors: validate.mapped(),
            oldData: req.body
        });
        } else {
            let validateEmail = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })

        if (validateEmail){
            let errors = {
                email: {
                    msg: 'Este email ya esta en uso, intenta con otro'
                }
            }
            return res.render('register.ejs', {errors : errors})
        } */
        db.User.create({
            fisrt_name: req.body.name,
            last_name: req.body.lastname,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.body.avatar,
            rol_id: 1 
        },{
        where: {
            id: req.params.id
        }})
        res.redirect('/')
    }
}
/* }  */

module.exports = userController