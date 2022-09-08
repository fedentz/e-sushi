module.exports = function(sequelize,dataTypes){
    
    let alias = "Product";

    let cols = {
        
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        description:{
            type: dataTypes.STRING
        },
        price:{
            type: dataTypes.INTEGER
        },
        image:{
            type: dataTypes.STRING
        },
        stock:{
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'product',
        timestamps: false
    }

    let Product = sequelize.define(alias,cols,config)

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: 'category_id',
            timestamps: false
        })
    }
    return Product
}