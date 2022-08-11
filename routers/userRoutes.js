const express = require('express');
const router = express.Router();



const { body } = require('express-validator')


const usersControllers = require('../controllers/userController');

//En BODY va el nombre del campo del formulario que queremos validar

const validations = [
    body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail().isEmail().withMessage('Debes escribir un email valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una password'),
    body('country').notEmpty().withMessage('Tienes que elegir un pais')
]

// formulario de registro
router.get('/register', usersControllers.register);

// Proceso de registro
router.post('/register',  validations, usersControllers.processRegister);

// formulario de login
router.get('/login', usersControllers.login);


module.exports = router;