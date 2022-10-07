const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');

//CONTROLLER REQUIRE
const usersControllers = require('../controllers/userController');

//MIDDLEWARES REQUIREs
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validations = require('../middlewares/vaditationMiddleware');
const uploadFile = require('../middlewares/userStorageMiddleware');




// formulario de registro
router.get('/register', guestMiddleware, usersControllers.register);

// Proceso de registro
router.post('/register', uploadFile.single('avatar'), validations, usersControllers.processRegister);

// formulario de login
router.get('/login', guestMiddleware, usersControllers.login);

// Procesado el login
router.post('/login', usersControllers.loginProcess);

// Perfil de Usuario
router.get('/profile', authMiddleware, usersControllers.profile); 

router.get('/:id', authMiddleware, usersControllers.detail);

// Logout
/* router.get('/logout/', usersControllers.logout); */

module.exports = router;