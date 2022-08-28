const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer'); 
const { body } = require('express-validator')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./public/images/avatars')
    },
    fileName: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName)}
})
    
const uploadFile = multer({storage})




const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const usersControllers = require('../controllers/userController');
const { fileName } = require('../models/User');

//En BODY va el nombre del campo del formulario que queremos validar

const validations = [
    body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail().isEmail().withMessage('Debes escribir un email valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una password'),
    body('country').notEmpty().withMessage('Tienes que elegir un pais'),
    body('avatar').custom((value,{ req }) => {
        let file = req.file;
        let acceptedExtension = ['.jpg','.png','.gif'];
       if(!file){
            throw new Error('Tienes que subir una imagen')
        }else {
            let fileExtension = path.extname(file.originalname)
           if (!acceptedExtension.includes(fileExtension)){
            throw new Error(`Las extensiones de archivo peprmitidas son ${acceptedExtension.join(', ')}`)
           }
        }
    return true;
    })
]

// formulario de registro
router.get('/register', guestMiddleware, usersControllers.register);

// Proceso de registro
router.post('/register', uploadFile.single('avatar') ,validations, usersControllers.processRegister);

// formulario de login
router.get('/login', guestMiddleware, usersControllers.login);

// Procesado el login
router.post('/login', usersControllers.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, usersControllers.profile); 

// Logout
router.get('/logout/', usersControllers.logout);

module.exports = router;