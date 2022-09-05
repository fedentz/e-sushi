module.exports = function(sequelize,dataTypes){
    
    let alias = "Users";

    let cols = {
        
        id:{
            type: dataTypes.INT,
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
        password:{
            type: dataTypes.STRING
        },
        phone_number:{
            type: dataTypes.INT
        },
        image:{
            type: dataTypes.STRING
        },
        id_rol:{
            type: dataTypes.INT
        }
    }

    let config = {
        tableName: 'users',
        timeStamps: false
    }

    let Users = sequelize.define(alias,cols,config)

    Users.associate = function(models) {
        Users.belongsTo(models.User, {
            as: "rol",
            foreignKey: 'rol_id',
            timestamps: false
        })
    }
    return Users
}