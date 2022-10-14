// ************ Require's ************
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path')
const validations = require('../middlewares/productValidateMw');
const editValidations = require('../middlewares/editProductValidationMw')
const adminMw = require('../middlewares/adminMw')
const loggedMw = require('../middlewares/loggedMw')

// controller
const productController = require("../controllers/productController")


// ************ Multer Settings ************
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/images/uploads"))
    },
    filename: (req, file, cb) => {
        
        let nombreImagen = "producto-" + Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen)
    }
})
let upload = multer({ storage: storage })


// RUTAS DE PRODUCTOS
//formulario de creacion
router.get('/create',adminMw,loggedMw, productController.crear);

//formulario de edicion de producto 
router.get('/:id/edit',adminMw,loggedMw, productController.editar)
// listado de productos
router.get('/', productController.product);

// detalle de produto 
router.get('/:id', productController.detalle);






//guardado de producto
router.post('/create',upload.single('image') ,validations, productController.guardado);


//EDIT (PUT)

//Guardado de edicion de producto 
router.put('/:id', upload.single("image"),editValidations ,productController.actualizar)

// DELETE
router.delete('/:id/eliminar',productController.borrar)


module.exports = router;
