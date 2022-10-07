const db = require('../../database/models');


module.exports = {
    list: async (req, res) => {

        
        let usuarios = await db.Users.findAll({
            include: [{ association: 'rol' }]
        })
        
        let userLength = usuarios.length
        
        let infoUser = [];
        
        usuarios.forEach(user => {let PushUsuario = {
            id : user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            detail: "http://localhost:3030/user/" + user.id 
        }
        infoUser.push(PushUsuario)
    })

        res.status(200).json({
            status: 200,
            count: userLength,
            users: infoUser
        })
    },
    
    detail: async (req, res) => {
        
        let userToShow = await db.Users.findOne({
            where: {
                id : req.params.id
            }
        })

        res.status(200).json({
            
            id: userToShow.id,
            first_name: userToShow.first_name,
            lastName: userToShow.lastname,
            email: userToShow.email,
            image: "http://localhost:3030/img/img-avatars/" + userToShow.image

        })
    },

}



