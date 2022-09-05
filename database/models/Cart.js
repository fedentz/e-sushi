module.exports = function(sequelize,dataTypes){
    
    let alias = "Cart";

    let cols = {
        
        id:{
            type: dataTypes.INT,
            primaryKey: true,
            autoIncrement: true
        },
        total_product:{
            type: dataTypes.INT
        },
        total_price:{
            type: dataTypes.INT
        },
        payment_methods_id:{
            type: dataTypes.INT
        },
        user_id:{
            type: dataTypes.INT
        } 
    }

    let config = {
        tableName: 'products',
        timeStamps: false
    }

    let Cart = sequelize.define(alias,cols,config)

    Cart.associate = function(models) {
        Cart.hasMany(models.Users, {
            as: "user",
            foreignKey: 'user_id',
            timestamps: false
        })
    
        Cart.hasMany(models.Payment_method, {
            as: "payment_method",
            foreignKey: 'payment_method_id',
            timestamps: false
        })
        
        Cart.hasMany(models.Product, {
            as: "product",
            through: "cart_product",
            foreignKey: 'product_id',
            otherKey: 'cart_id',
            timestamps: false
        })
    }
    return Product
}