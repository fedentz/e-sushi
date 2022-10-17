const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const multer = require('multer')
const adminMw = require('../middlewares/adminMw')
const loggedMw = require('../middlewares/loggedMw')

router.get("/", mainController.index);
router.get("/eventos", mainController.eventos);
router.get("/menu", mainController.menu);
router.get("/perfil", mainController.perfil)
router.get('/contacto', mainController.contacto)
router.get('/admin',adminMw,loggedMw, mainController.admin)

module.exports = router;
