module.exports = function(sequelize,dataTypes){
    
    let alias = "Rol";

    let cols = {
        
        id:{
            type: dataTypes.INTEGER,
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
        Rol.hasMany(models.Users, {
            as: "user",
            foreignKey: 'rol_id',
            timestamps: false
        })
    }
    return Rol
}