module.exports = function(sequelize,dataTypes){
    
    let alias = "Rol";

    let cols = {
        
        id:{
            type: dataTypes.INT,
            primaryKey: true,
            autoIncrement: true
        },
        rol:{
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'rol',
        timeStamps: false
    }

    let Rol = sequelize.define(alias,cols,config)

    Rol.associate = function(models) {
        Rol.belongsTo(models.User, {
            as: "user",
            foreignKey: 'rol_id',
            timestamps: false
        })
    }
    return Rol
}