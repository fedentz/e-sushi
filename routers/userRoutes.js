const express = require('express');
const router = express.Router();



const { body } = require('express-validator')


const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const usersControllers = require('../controllers/userController');

//En BODY va el nombre del campo del formulario que queremos validar

const validations = [
    body('full_name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail().isEmail().withMessage('Debes escribir un email valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una password'),
    body('country').notEmpty().withMessage('Tienes que elegir un pais')
]

// formulario de registro
router.get('/register', guestMiddleware, usersControllers.register);

// Proceso de registro
router.post('/register',  validations, usersControllers.processRegister);

// formulario de login
router.get('/login', guestMiddleware, usersControllers.login);

// Procesado el login
router.post('/login', usersControllers.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, usersControllers.profile); 

// Logout
router.get('/logout/', usersControllers.logout);

module.exports = router;