const express = require('express');
const router = express.Router();

const productApiController = require('../../controllers/api/productControllerApi')

router.get('/', productApiController.allProducts);
router.get('/detail/:id', productApiController.productDetail);

module.exports = router;