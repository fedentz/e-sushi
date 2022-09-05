module.exports = function(sequelize,dataTypes){
    
    let alias = "Payment_method";

    let cols = {
        
        id:{
            type: dataTypes.INT,
            primaryKey: true,
            autoIncrement: true
        },
        method:{
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'payment_method',
        timeStamps: false
    }

    let Payment_method = sequelize.define(alias,cols,config)

    Payment_method.associate = function(models) {
        Payment_method.belongsTo(models.Cart, {
            as: "payment",
            foreignKey: 'payment_method_id',
            timestamps: false
        })
    }
    return Payment_method
}