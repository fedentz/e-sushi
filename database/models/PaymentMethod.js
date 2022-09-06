module.exports = function(sequelize,dataTypes){
    
    let alias = "PaymentMethod";

    let cols = {
        
        id:{
            type: dataTypes.INTEGER,
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

   let PaymentMethod = sequelize.define(alias,cols,config)

   PaymentMethod.associate = function(models) {
        PaymentMethod.belongsTo(models.Cart, {
            as: "payment",
            foreignKey: 'payment_method_id',
            timestamps: false
        })
    } 
    return PaymentMethod
}