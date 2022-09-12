// ************ Require's ************
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path')

// controller
const productController = require("../controllers/productController")


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


// RUTAS DE PRODUCTOS

// listado de productos
router.get('/', productController.product);

// detalle de produto 
router.get('/:id', productController.detalle);


// CREATE

//formulario de creacion
router.get('/form/create', productController.crear);

//guardado de producto
router.post('/create',upload.single('image') , productController.guardado);


//EDIT (PUT)
//formulario de edicion de producto 
router.get('/:id/edit', productController.editar)

//Guardado de edicion de producto !! ERR --> cannot put
router.put('/:id', productController.actualizar)

// DELETE
router.delete('/:id/eliminar',productController.borrar)

//CARRITO (prximamente) --> crear .carrito
/* router.post('/',upload.single("image"), productController.carrito) */


module.exports = router;
