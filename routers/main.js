const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

router.get("/", mainController);
router.get("/eventos", mainController);
router.get("/menu", mainController);
router.get("/login", mainController);
router.get("/register", mainController);

module.exports = router;
