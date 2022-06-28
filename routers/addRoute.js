const express = require("express");
const router = express.Router();
const addController = require("../controllers/addController")

router.get('/add',addController);

module.exports = router;