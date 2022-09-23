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
//formulario de creacion
router.get('/create', productController.crear);

//formulario de edicion de producto 
router.get('/:id/edit', productController.editar)
// listado de productos
router.get('/', productController.product);

// detalle de produto 
router.get('/:id', productController.detalle);






//guardado de producto
router.post('/create',upload.single('image') , productController.guardado);


//EDIT (PUT)

//Guardado de edicion de producto !! ERR --> cannot put
router.put('/:id', upload.single("image") ,productController.actualizar)

// DELETE
router.delete('/:id/eliminar',productController.borrar)


module.exports = router;
