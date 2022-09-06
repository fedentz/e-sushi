module.exports = function(sequelize,dataTypes){
    
    let alias = "Category";

    let cols = {
        
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category:{
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'rol',
        timeStamps: false
    }

    let Category = sequelize.define(alias,cols,config)

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "product",
            foreignKey: 'Category_id',
            timestamps: false
        })
    }
    return Category
}