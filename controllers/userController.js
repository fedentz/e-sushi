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
            first_name: req.body.first_name,
            last_name: req.body.last_name,
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
        /* }  */
    },
    login: (req, res) => {
        res.render('login.ejs')
    },
    loginProcess: async function (req, res){
        let userLogin = await db.User.findOne({
            where: {
                email : req.body.email
            },
         });
    
          if (userLogin) {
              let isOkPassword = bcryptjs.compareSync(req.body.password, userLogin.password);
              if (isOkPassword) {
                delete userLogin.password;
                req.session.userLogged = userLogin;
                req.session.usuarioLogueado = userLogin;
                req.session.adminLogueado = userLogin.rol_id
               if(req.body.remember_user) {
		  	 		res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
		  	 	}
                  return res.redirect('/user/profile');
              }
              return res.render("login", {
                errors: {
                    email: {
                        msg: "Las credenciales son invalidas" }
                    }
                });
          }
          return res.render("login", {
            errors: {
                email:
                {msg: "El email no se encuentra en nuestra base de datos" }
            }
        })
    },
    profile: (req, res) => {
		return res.render('perfil', {
			user: req.session.userLogged
		});
	},
/* 
	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	} */
}


module.exports = userController