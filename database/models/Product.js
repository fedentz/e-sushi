module.exports = function(sequelize,dataTypes){
    
    let alias = "Product";

    let cols = {
        
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firts_name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        discount:{
            type: dataTypes.INTEGER
        },
        image:{
            type: dataTypes.INTEGER
        },
        stock:{
            type: dataTypes.STRING
        },
        id_products_category:{
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'products',
        timeStamps: false
    }

    let Product = sequelize.define(alias,cols,config)

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: 'category_id',
            timestamps: false
        })
    
        Product.belongsTo(models.Cart, {
            as: "carrito",
            through: "cart_product",
            foreignKey: 'product_id',
            otherKey: 'cart_id',
            timestamps: false
        })
    }
    return Product
}