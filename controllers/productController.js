let db = require('../database/models')
const { validationResult } = require("express-validator");

let productController = {

    product: (req, res) => {

        db.Product.findAll()
            .then(function (product) {
                return res.render('productList.ejs', { product: product })
            })

    },

    crear: function (req, res) {

        db.Category.findAll()
            .then(category => {
                return res.render('create.ejs', { category })

            })

    },
    guardado: async function (req, res) {
        let productImg = "default.png"
        let imageFromBody = req.file
        if (imageFromBody) {
            productImg = req.file.filename
        }

        const validate = validationResult(req)
       let category = await db.Category.findAll()
        if (validate.errors.length > 0) {
            return res.render('create.ejs', {
                errors: validate.mapped(),
                oldData: req.body,
                category
            })
        }
        
       await db.Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: productImg,
            category_id: req.body.category_id
        })
        return res.redirect('/products')

        /*  const validate = validationResult(req)    
 
         if (validate.isEmpty()){
 
             let imageFromBody = req.file
         if(imageFromBody){
             productImg = "img-product/" + req.file.originalname
         } else {
             productImg = "img-product/default.png"
         }
 
             await db.Product.create({
                 name: req.body.name,
                 description: req.body.description,
                 price: req.body.price,
                 image: productImg,
                 category_id:req.body.category_id , 
             }).then(() =>  res.redirect('/products') )
         } else{
             res.render('create.ejs', {
                 errors: validate.mapped(),
                 oldData: req.body
             })
         }
  */
    },

    listado: function (req, res) {
        db.Product.findAll()
            .then(function (product) {
                res.render('productList.ejs', { product: product })
            })
    },

    detalle: function (req, res) {


        db.Product.findByPk(req.params.id, {
            include: [{ association: 'category' }]
        })
            .then(function (product) {
                res.render('product.ejs', { product: product })
            })

    },

    editar: async function  (req, res) {

      /*   db.Product.findByPk(req.params.id, {
            include: [{ association: 'category' }]
        })
        .then(function (product) {
            res.render('edit.ejs', { product: product })
        }) */
     let product = await db.Product.findByPk(req.params.id, {
        include: [{ association: 'category' }]
    })   
    let category = await db.Category.findAll() 
    return res.render ('edit.ejs',{category: category, product: product})
    
    },

    actualizar:async function (req, res) {


        const validate = validationResult(req)

        /* if(validate.errors.length > 0){
        res.render('edit.ejs', {
            errors: validate.mapped(),
            oldData: req.body
        })} */ //product is not defined linea 14. Sin esto se updatea bien, andan las validaciones front

        let productImg = "default.png"
        let imageFromBody = req.file
        if (imageFromBody) {
            productImg = req.file.originalname
        } 

       await db.Product.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            category_id: req.body.category_id
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products/' + req.params.id)
    },

    borrar: function (req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products')
    }
}

module.exports = productController