const db = require('../../database/models');

module.exports = {
    allProducts : async (req, res) => {

        let allProducts = await db.Product.findAll({
            include: [{
                association: "category"
            }]
        });

        let categoria = await db.Category.findAll(
            {include: [{
                association: "product"
            }]}
        );
        let productLength = allProducts.length;

        let countCategory = []
        categoria.forEach(category => {
            let count = {
                id : category.id,
                category : category.category,
                countByProducts : category.product.length 
            }

            console.log(category)

           countCategory.push(count)
        })

        let productsDetail = [];

        allProducts.forEach(product => {
            let producto = {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
                associations: [{
                    category: {
                        category: product.category
                    }
                }],
                detail: "http://localhost:3030/products/" + product.id
            }

            productsDetail.push(producto)
        })

        res.status(200).json({
            status: 200,
            count: productLength,
            countByCategory: countCategory,
            products : productsDetail
        })
    },

    productDetail: async (req, res) => {
        let productFounded = await db.Product.findOne({
            where: {
                id: req.params.id
            },

            include: [{
                association: "category"
            }]
        })

        res.status(200).json({
            id: productFounded.id,
            name: productFounded.name,
            category: productFounded.category,
            price: productFounded.price,
            image: "http://localhost:3030/img//img-product" + productFounded.image

        })
    }
}