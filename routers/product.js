// ************ Require's ************
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController")
const multer = require('multer');
const path = require('path')
// ************ Controller Require ************


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
router.get('/create', productController.crear);

router.post('/create',upload.single('image') , productController.guardado);

router.get('/:id', productController.product);

router.get('/listado', productController.listado);

// CREATE


/* 
router.post('/',upload.single("image"), productController.store); */

//EDIT PUT
/* router.get('/:id/edit', productController.productToEdit)
router.put('/:id', productController.update) */

// DELETE
/* router.delete('/:id/eliminar',productController.delete) */


module.exports = router;
