module.exports = function(sequelize,dataTypes){
    
    let alias = "Cart";

    let cols = {
        
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total_product:{
            type: dataTypes.INTEGER
        },
        total_price:{
            type: dataTypes.INTEGER
        },
        payment_methods_id:{
            type: dataTypes.INTEGER
        },
        user_id:{
            type: dataTypes.INTEGER
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
    
        Cart.hasMany(models.PaymentMethod, {
            as: "paymentMethod",
            foreignKey: 'payment_method_id',
            timestamps: false
        })
        
        Cart.belongsToMany(models.Product, {
            as: "product",
            through: "cart_product",
            foreignKey: 'product_id',
            otherKey: 'cart_id',
            timestamps: false
        })
    }
    return Cart
}