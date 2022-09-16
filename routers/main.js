const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const multer = require('multer')

router.get("/", mainController.index);
router.get("/eventos", mainController.eventos);
router.get("/menu", mainController.menu);
router.get("/perfil", mainController.perfil)

module.exports = router;
