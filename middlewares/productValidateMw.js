const { body } = require('express-validator')
const path = require('path');

const validations = [
body('name').notEmpty().withMessage('Tienes que escribir el nombre del producto').isLength({min: 5}).withMessage("Tienes que escribir más de 5 caracteres"),
body('description').notEmpty().withMessage('Tienes que escribir la descripcion del producto').isLength({min: 2}).withMessage("Tienes que escribir más de 2 caracteres"),
body('price').notEmpty().withMessage('Tienes que introducir el precio del producto').isNumeric('Tienes que introcir el valor numerico'),
body('category').notEmpty().withMessage('Tienes que elegir una categoria'),
body('image').custom((value,{ req }) => {
    let file = req.file;
    let acceptedExtension = ['.jpg','.jpeg','.png','.gif'];
    if(!file){
        throw new Error('Tienes que subir una imagen')
    }else {
        let fileExtension = path.extname(file.originalname)
        if (!acceptedExtension.includes(fileExtension)){
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtension.join(', ')}`)
           }
    }
return true;
})]

module.exports = validations