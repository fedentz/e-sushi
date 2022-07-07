// ************ Require's ************
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require('multer');
const path = require('path')
// ************ Controller Require ************
const productsController = require('../controllers/productController');

// ************ Multer Settings ************
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/images/uploads"))
    },
    filename: (req, file, cb) => {
        console.log(file)
        let nombreImagen = "producto-" + Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen)
    }
})
let upload = multer({ storage: storage })
// PRODUCTOS
router.get('/', productController.product);
router.get('/create', productController.create)

// CREATE



router.post('/',upload.single("image"), productController.store);
//EDIT 
router.get('/edit', productController.edit)

/* // PUT
router.put('/:id', productController.editProduct)
// DELETE
router.delete('/:id',productController.deleteProduct) */


module.exports = router;
